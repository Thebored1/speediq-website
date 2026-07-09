# -*- coding: utf-8 -*-
"""Injects a pure-CSS Services dropdown into an injected-HTML service-page nav,
and points the other nav links back to the landing sections."""
import re

MONO = "'IBM Plex Mono', monospace"

_ITEMS = [
    ("Brand & Corporate Identity", "/services/brand-identity", "Logos, identities, guidelines"),
    ("Web & App Development", "/services/web-development", "Sites, web & mobile apps"),
    ("Advertising & Growth", "/services/advertising-growth", "Campaigns, media, SEO"),
    ("3D Modeling", "/services/3d-modeling", "Exterior & interior renders"),
    ("Events & Exhibitions", "/services/events-exhibitions", "Stands & event branding"),
    ("Print & Production", "/services/print-production", "Packaging, signage, print"),
]


def _items_html():
    out = []
    for label, href, blurb in _ITEMS:
        out.append(
            f'<a href="{href}" class="svc-drop-item">'
            f'<span class="svc-drop-title" style="display: block; font-size: 14.5px; font-weight: 600; color: #0A0E2A;">{label}</span>'
            f'<span style="display: block; font-size: 12.5px; color: #8A8FA3; margin-top: 2px;">{blurb}</span>'
            f"</a>"
        )
    return "".join(out)


DROPDOWN = (
    '<div class="svc-nav-group" style="position: relative;">'
    '<a href="/#services" style="color: #FFFFFF; display: inline-flex; align-items: center; gap: 6px;">'
    'Services <span class="svc-caret" aria-hidden="true">▾</span></a>'
    '<div class="svc-drop-panel" style="position: absolute; top: 100%; left: -16px; padding-top: 14px; z-index: 30;">'
    '<div style="width: 320px; background: #FFFFFF; border-radius: 4px; box-shadow: 0 24px 60px -20px rgba(2,10,60,0.45); border: 1px solid #E7EAF5; padding: 8px;">'
    + _items_html()
    + "</div></div></div>"
)


def inject_nav(body):
    # raise the nav above the hero content so the panel isn't clipped/covered
    body = body.replace(
        '<nav style="position: relative; z-index: 3;',
        '<nav style="position: relative; z-index: 20;',
    )
    # swap the plain "Services" link for the dropdown group
    body = re.sub(r'<a href="#" style="color: #FFFFFF;">Services</a>', DROPDOWN, body, count=1)
    # point the remaining nav links back to the landing sections
    for label, anchor in [("Casework", "/#casework"), ("About", "/#about"), ("Insights", "/#insights")]:
        body = re.sub(
            r'<a href="#" (style="color: rgba\(255,255,255,0\.78\);">)' + label + r"</a>",
            rf'<a href="{anchor}" \1{label}</a>',
            body,
            count=1,
        )
    return body
