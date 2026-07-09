import re, os
from nav_dropdown import inject_nav

PAGES = {
    "brand-identity": "Brand Identity Service.dc.html",
    "web-development": "Web Development Service.dc.html",
    "advertising-growth": "Advertising and Growth Service.dc.html",
    "3d-modeling": "3D Modeling Service.dc.html",
    "events-exhibitions": "Events and Exhibitions Service.dc.html",
    "print-production": "Print and Production Service.dc.html",
}

def bars():
    out = []
    for i in range(22):
        t = i / 21
        h = f"{8 + (100 - 8) * t:.1f}%"
        bg = f"rgba(255,255,255,{0.12 + 0.34 * t:.3f})"
        delay = f"{0.2 + i * 0.04:.2f}s"
        out.append(
            f'<div style="flex: 1; height: {h}; background: {bg}; border-radius: 5px 5px 0 0; '
            f'transform-origin: bottom; animation: barGrow 0.7s cubic-bezier(0.22, 0.8, 0.36, 1) {delay} backwards;"></div>'
        )
    return "".join(out)

def transform(html):
    # 1. body between </helmet> and </x-dc>
    a = html.find("</helmet>")
    head = html[:a]
    a = html.find(">", a) + 1
    b = html.find("</x-dc>")
    body = html[a:b]

    # 1b. responsive @media rules live in the helmet <style> (can't be inlined) — keep them
    media = re.findall(r"@media[^{]*\{(?:[^{}]|\{[^}]*\})*\}", head)
    media = [m for m in media if "print" not in m[:22]]  # the print rule is already in globals.css

    # 2. bars: replace each sc-for ... </sc-for> with 22 generated bars
    body = re.sub(r"<sc-for\b[^>]*>.*?</sc-for>", lambda m: bars(), body, flags=re.S)

    # 3. drop sc-if wrappers (keep inner content)
    body = re.sub(r"</?sc-if\b[^>]*>", "", body)

    # 4. FAQ
    body = re.sub(r'onclick="\{\{ faq\d+\.toggle \}\}"', "data-faq-toggle", body)
    body = re.sub(
        r'<div style="display: grid; grid-template-rows: \{\{ faq\d+\.rows \}\};',
        '<div data-faq-body style="display: grid; grid-template-rows: 0fr;',
        body,
    )
    body = re.sub(r"\{\{ faq\d+\.icon \}\}", '<span data-faq-icon>+</span>', body)

    # 5. strip binding-driven onclick (goCasework) and other binding attrs
    body = re.sub(r'\s*onclick="\{\{[^"]*\}\}"', "", body)
    body = re.sub(r'\s*hint-placeholder[a-z-]*="[^"]*"', "", body)
    body = re.sub(r'\s*style-hover="[^"]*"', "", body)
    body = re.sub(r'\s*as="[^"]*"', "", body)

    # 6. any leftover bindings
    body = re.sub(r"\{\{[^}]*\}\}", "", body)

    # 7. asset + home-link paths
    body = body.replace('uploads/SpeedIQ Website.html', "/")
    body = re.sub(r'(["\(])assets/', r"\1/", body)

    # 8. Services dropdown in the nav
    body = inject_nav(body)

    # 9. prepend the page's own responsive media queries
    style = "<style>\n" + "\n".join(media) + "\n</style>\n\n" if media else ""
    return (style + body).strip()

for slug, fname in PAGES.items():
    html = open(fname, encoding="utf-8").read()
    out = transform(html)
    d = os.path.join("..", "app", "services", slug)
    os.makedirs(d, exist_ok=True)
    with open(os.path.join(d, "content.html"), "w", encoding="utf-8") as f:
        f.write(out)
    print(slug, "->", len(out), "bytes; remaining {{}}:", out.count("{{"))
