# -*- coding: utf-8 -*-
"""Generate the new pages (Case Study details, Casework, About, Contact) from the
'Case study details page' export, matching the project's current content.html format:
full helmet styles (minus @font-face) + nav stripped + hero padding-top for the
absolute React <Nav> overlay. Case Study is emitted per client (URL-routed)."""
import re, os
from build_service import bars  # reuse the 22-bar generator

HERE = os.path.dirname(os.path.abspath(__file__))
# redesign handoff export (Home + 6 services + Casework/About/Contact)
SRC = os.path.join(HERE, "..", "_design_handoff", "home-page-review", "project")
# Case Study detail page is not in the handoff; keep the earlier export for it
CS_SRC = os.path.join(HERE, "..", "_design_cs", "uploads", "SpeedIQ Website design")
APP = os.path.join(HERE, "..", "app")
SLUGS = ["ethmar", "jaroudi", "maceen", "villate", "leilnhar", "amesys"]

SERVICE_PAGES = {
    "brand-identity": "Brand Identity Service",
    "web-development": "Web Development Service",
    "advertising-growth": "Advertising and Growth Service",
    "3d-modeling": "3D Modeling Service",
    "events-exhibitions": "Events and Exhibitions Service",
    "print-production": "Print and Production Service",
}

LINKS = {
    "Brand Identity Service.dc.html": "/services/brand-identity",
    "Web Development Service.dc.html": "/services/web-development",
    "Advertising and Growth Service.dc.html": "/services/advertising-growth",
    "3D Modeling Service.dc.html": "/services/3d-modeling",
    "Events and Exhibitions Service.dc.html": "/services/events-exhibitions",
    "Print and Production Service.dc.html": "/services/print-production",
    "Casework.dc.html": "/casework",
    "About.dc.html": "/about",
    "Contact.dc.html": "/contact",
    "Case Study.dc.html": "/casework/ethmar",
}


def style_block(html):
    head = html[: html.find("</helmet>")]
    css = "\n".join(re.findall(r"<style>(.*?)</style>", head, re.S))
    css = re.sub(r"@font-face\s*\{[^{}]*\}", "", css)  # fonts live in globals.css
    css = re.sub(r"\n{3,}", "\n\n", css).strip()
    return "<style>\n" + css + "\n</style>\n\n"


def base_body(html):
    a = html.find("</helmet>")
    return html[html.find(">", a) + 1 : html.find("</x-dc>")]


def common(body):
    body = re.sub(r"<sc-for\b[^>]*>.*?</sc-for>", lambda m: "".join(bars()), body, flags=re.S)
    # FAQ (if present)
    body = re.sub(r'onclick="\{\{ faq\d+\.toggle \}\}"', "data-faq-toggle", body)
    body = re.sub(
        r'<div style="display: grid; grid-template-rows: \{\{ faq\d+\.rows \}\};',
        '<div data-faq-body style="display: grid; grid-template-rows: 0fr;',
        body,
    )
    body = re.sub(r"\{\{ faq\d+\.icon \}\}", "<span data-faq-icon>+</span>", body)
    # strip binding-driven attrs and any leftover bindings
    body = re.sub(r'\s*onclick="\{\{[^"]*\}\}"', "", body)
    body = re.sub(r'\s*hint-placeholder[a-z-]*="[^"]*"', "", body)
    body = re.sub(r'\s*style-hover="[^"]*"', "", body)
    body = re.sub(r'\s*as="[^"]*"', "", body)
    body = re.sub(r"\{\{[^}]*\}\}", "", body)
    # asset + home-link paths
    body = body.replace("uploads/SpeedIQ Website.html", "/")
    body = re.sub(r"assets/(photos|logos|fonts)/", r"/\1/", body)  # any quoting
    # design .dc.html links -> real routes (per-client case study first, then the rest)
    for s in SLUGS:
        body = body.replace('href="Case Study.dc.html#' + s + '"', 'href="/casework/' + s + '"')
    for fname, route in LINKS.items():
        body = body.replace('href="' + fname + '"', 'href="' + route + '"')
    # remove the site nav (a React <Nav> is overlaid instead) and offset the hero for it
    body = re.sub(r"<nav\b.*?</nav>", "", body, count=1, flags=re.S)
    body = re.sub(r'(<div data-screen-label="[^"]*" style="[^"]*)"', r'\1 padding-top: 72px;"', body, count=1)
    # case-study hash links -> routes
    for s in SLUGS:
        body = body.replace('href="#' + s + '"', 'href="/casework/' + s + '"')
    return body


def simple_page(html):
    body = base_body(html)
    body = re.sub(r"</?sc-if\b[^>]*>", "", body)  # keep all sections
    return (style_block(html) + common(body)).strip()


def balanced_scif_remove(s, cond):
    open_tag = '<sc-if value="{{ ' + cond + ' }}"'
    out, i = [], 0
    while True:
        j = s.find(open_tag, i)
        if j < 0:
            out.append(s[i:])
            break
        out.append(s[i:j])
        depth, k = 0, j
        while k < len(s):
            if s.startswith("<sc-if", k):
                depth += 1
                k += 6
            elif s.startswith("</sc-if>", k):
                depth -= 1
                k += 8
                if depth == 0:
                    break
            else:
                k += 1
        i = k
    return "".join(out)


def case_page(html, client):
    body = base_body(html)
    for s in SLUGS:
        active = s == client
        body = body.replace("{{ t." + s + "Bg }}", "#FFFFFF" if active else "transparent")
        body = body.replace("{{ t." + s + "Fg }}", "#0526D9" if active else "rgba(255,255,255,0.85)")
        body = body.replace("{{ t." + s + "Border }}", "#FFFFFF" if active else "rgba(255,255,255,0.35)")
    for s in SLUGS:
        if s != client:
            body = balanced_scif_remove(body, "is" + s.capitalize())
    body = common(body)
    body = re.sub(r"</?sc-if\b[^>]*>", "", body)  # unwrap active client + showMeta/showCaseNav
    return (style_block(html) + body).strip()


def write(path, content):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, "w", encoding="utf-8") as f:
        f.write(content)


if __name__ == "__main__":
    # 6 service pages (nav stripped for the React <Nav> overlay)
    for slug, fname in SERVICE_PAGES.items():
        html = open(os.path.join(SRC, fname + ".dc.html"), encoding="utf-8").read()
        out = simple_page(html)
        write(os.path.join(APP, "services", slug, "content.html"), out)
        print("svc/" + slug, "->", len(out), "bytes; leftover {{}}:", out.count("{{"), "nav:", out.count("<nav"))

    # simple single pages
    for out_slug, fname in [("about", "About"), ("contact", "Contact"), ("casework", "Casework")]:
        html = open(os.path.join(SRC, fname + ".dc.html"), encoding="utf-8").read()
        out = simple_page(html)
        write(os.path.join(APP, out_slug, "content.html"), out)
        print(out_slug, "->", len(out), "bytes; leftover {{}}:", out.count("{{"), "nav:", out.count("<nav"))

    # case study, one file per client (from the earlier export)
    cs = open(os.path.join(CS_SRC, "Case Study.dc.html"), encoding="utf-8").read()
    for client in SLUGS:
        out = case_page(cs, client)
        write(os.path.join(APP, "casework", "_cases", client + ".html"), out)
        print("case/" + client, "->", len(out), "bytes; leftover {{}}:", out.count("{{"), "nav:", out.count("<nav"), "sc-if:", out.count("sc-if"))
