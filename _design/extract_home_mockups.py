# -*- coding: utf-8 -*-
"""Extract the 7 service layers (copy + card mockup) from the redesigned Home Page,
convert to JSX, and write components/landing/mockups.tsx."""
import re, os
from convert import convert

HERE = os.path.dirname(os.path.abspath(__file__))
SRC = os.path.join(HERE, "..", "_design_handoff", "home-page-review", "project", "Home Page.dc.html")

s = open(SRC, encoding="utf-8").read()
b = s[s.find("</helmet>"):s.find('data-dc-script')]
i = b.find('data-screen-label="Services"')
j = b.find('data-screen-label="Belief"')
seg = b[i:j]
seg = re.sub(r'(["\(])assets/', r"\1/", seg)  # asset paths -> public


def inner_of_layer(s, start):
    # start points at '<div data-svc-layer'; return the INNER html (between its > and matching </div>)
    p = s.index(">", start) + 1
    depth = 1
    k = p
    while k < len(s):
        if s.startswith("<div", k):
            depth += 1; k += 4
        elif s.startswith("</div>", k):
            depth -= 1
            if depth == 0:
                return s[p:k]
            k += 6
        else:
            k += 1
    return s[p:]


rows = []
for m in re.finditer(r"<div data-svc-layer", seg):
    rows.append(inner_of_layer(seg, m.start()))

print("found", len(rows), "service layers")
out = []
for idx, frag in enumerate(rows):
    out.append(f"  /* service {idx} */\n  <>{convert(frag)}</>,")

body = 'import type { ReactNode } from "react";\n\nexport const MOCKUPS: ReactNode[] = [\n' + "\n".join(out) + "\n];\n"
open(os.path.join(HERE, "..", "components", "landing", "mockups.tsx"), "w", encoding="utf-8").write(body)
print("wrote components/landing/mockups.tsx", len(body), "bytes")
