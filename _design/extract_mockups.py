import re
from convert import convert

src = open("extracted/template.html", encoding="utf-8").read()

tex = {
    "8690252d-8398-4b28-aab7-37f5f7ec00a9": "/photos/guidelines.jpg",
    "bd951a32-83b9-4617-b117-a43f42c9a1a4": "/photos/web-texture.jpg",
    "13c5c1b7-cdcf-444f-ab60-625556529169": "/photos/growth-texture.jpg",
    "dbf3e850-1577-43c9-b364-dadd5d4f6fa3": "/photos/3d-texture.jpg",
    "c465a54f-2284-4de9-87e2-0320232fd59f": "/photos/events-texture.jpg",
    "807a7af4-1899-40bb-8b62-ca4325894df2": "/photos/print-texture.jpg",
}
for k, v in tex.items():
    src = src.replace(k, v)

def extract_balanced(s, start_idx):
    # start_idx points at a '<div' that opens the element; return substring through its matching </div>
    i = start_idx
    depth = 0
    while i < len(s):
        if s.startswith("<div", i):
            depth += 1
            i += 4
        elif s.startswith("</div>", i):
            depth -= 1
            i += 6
            if depth == 0:
                return s[start_idx:i]
        else:
            i += 1
    return None

rows = []
for m in re.finditer(r'<div class="svc-row"', src):
    # back up to the '<div'
    start = m.start()
    frag = extract_balanced(src, start)
    rows.append(frag)

print("found", len(rows), "svc-row blocks")
out = []
for idx, frag in enumerate(rows):
    jsx = convert(frag)
    out.append(f"  /* service {idx} */\n  <>{jsx}</>,")

with open("mockups.jsx.txt", "w", encoding="utf-8") as f:
    f.write("export const MOCKUPS = [\n" + "\n".join(out) + "\n];\n")
print("wrote mockups.jsx.txt")
