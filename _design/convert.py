#!/usr/bin/env python3
"""Convert a DC HTML fragment into JSX. Handles inline styles, class->className,
SVG camelCasing, void self-closing, entities. Leaves {{ }} bindings for manual handling
unless --strip-bindings is passed."""
import sys, re
from html.parser import HTMLParser

VOID = {"area","base","br","col","embed","hr","img","input","link","meta","param","source","track","wbr",
        "path","circle","rect","line","polygon","polyline","ellipse","stop","use"}

# attributes that must be camelCased for React/SVG
CAMEL = {
    "stroke-width":"strokeWidth","stroke-dasharray":"strokeDasharray","stroke-linecap":"strokeLinecap",
    "stroke-linejoin":"strokeLinejoin","stroke-miterlimit":"strokeMiterlimit","stroke-opacity":"strokeOpacity",
    "fill-opacity":"fillOpacity","fill-rule":"fillRule","clip-rule":"clipRule","clip-path":"clipPath",
    "stop-color":"stopColor","stop-opacity":"stopOpacity","gradientunits":"gradientUnits",
    "gradienttransform":"gradientTransform","xmlns:xlink":"xmlnsXlink","xlink:href":"xlinkHref",
    "text-anchor":"textAnchor","baseline-shift":"baselineShift","font-family":"fontFamily","font-size":"fontSize",
    "font-weight":"fontWeight","letter-spacing":"letterSpacing","dominant-baseline":"dominantBaseline",
    "mix-blend-mode":"mixBlendMode","for":"htmlFor","tabindex":"tabIndex","viewbox":"viewBox",
    "preserveaspectratio":"preserveAspectRatio","maxlength":"maxLength","autocomplete":"autoComplete",
    "spreadmethod":"spreadMethod","patternunits":"patternUnits","patterncontentunits":"patternContentUnits",
    "colspan":"colSpan","rowspan":"rowSpan","enable-background":"enableBackground",
}
DROP = {"style-hover","onclick","onmouseenter","onmouseleave","onmousemove","ref","onmouseover","onmouseout"}

def camel(k):
    k=k.lower()
    if k in CAMEL: return CAMEL[k]
    if k.startswith("data-") or k.startswith("aria-"): return k
    if "-" in k:
        parts=k.split("-")
        return parts[0]+"".join(p.capitalize() for p in parts[1:])
    return k

def style_to_obj(s):
    out=[]
    for decl in s.split(";"):
        decl=decl.strip()
        if not decl or ":" not in decl: continue
        k,v=decl.split(":",1)
        k=k.strip(); v=v.strip()
        # camelCase css prop
        if k.startswith("--"):
            key='"'+k+'"'
        else:
            ck=re.sub(r"-([a-z])",lambda m:m.group(1).upper(),k)
            key=ck
        v=v.replace("\\","\\\\").replace('"','\\"')
        out.append(f'{key}: "{v}"')
    return "{{ "+", ".join(out)+" }}"

class J(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=False)
        self.buf=[]
    def emit(self,t): self.buf.append(t)
    def handle_starttag(self,tag,attrs):
        self.emit(self._tag(tag,attrs, self_close=(tag in VOID)))
    def handle_startendtag(self,tag,attrs):
        self.emit(self._tag(tag,attrs, self_close=True))
    def handle_endtag(self,tag):
        if tag in VOID: return
        self.emit(f"</{tag}>")
    def _tag(self,tag,attrs,self_close):
        parts=[f"<{tag}"]
        for k,v in attrs:
            if k in DROP: continue
            if k=="class":
                parts.append(f' className="{v}"')
            elif k=="style":
                parts.append(f" style={style_to_obj(v)}")
            elif v is None:
                parts.append(f" {camel(k)}")
            else:
                if "{{" in v:
                    parts.append(f' {camel(k)}="{v}"')
                else:
                    vv=v.replace('"','&quot;')
                    parts.append(f' {camel(k)}="{vv}"')
        parts.append(" />" if self_close else ">")
        return "".join(parts)
    def handle_data(self,data):
        # escape braces in text
        if "{" in data or "}" in data:
            data=data.replace("{","{'{'}").replace("}","{'}'}")
        self.emit(data)
    def handle_entityref(self,name):
        import html
        try: self.emit(html.unescape("&"+name+";"))
        except: self.emit("&"+name+";")
    def handle_charref(self,name):
        import html
        self.emit(html.unescape("&#"+name+";"))

def convert(html_frag):
    p=J(); p.feed(html_frag); p.close()
    return "".join(p.buf)

if __name__=="__main__":
    data=sys.stdin.read()
    out=convert(data)
    if "--strip-bindings" in sys.argv:
        out=re.sub(r"\{\{[^}]*\}\}","",out)
    sys.stdout.buffer.write(out.encode("utf-8"))
