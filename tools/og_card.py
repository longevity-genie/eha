"""Draw the 1200x630 share card and a favicon for the EHA 2026 site: EHA star ring, Heales rings, title."""
import math, sys
from PIL import Image, ImageDraw, ImageFont

fonts, site = sys.argv[1], sys.argv[2]  # e.g. python3 tools/og_card.py <dir with Archivo and Atkinson TTFs> site
for i in range(1, 5):
    print(i, ImageFont.truetype(f"{fonts}/f{i}.ttf", 20).getname())
display = ImageFont.truetype(f"{fonts}/f2.ttf", 60)
display_s = ImageFont.truetype(f"{fonts}/f2.ttf", 44)
body_b = ImageFont.truetype(f"{fonts}/f4.ttf", 34)
body = ImageFont.truetype(f"{fonts}/f3.ttf", 28)

S = 2  # supersample
W, H = 1200 * S, 630 * S
blue, gold, amber, lemon, white, navy = (0, 51, 153), (255, 204, 0), (231, 176, 19), (238, 218, 20), (255, 255, 255), (0, 31, 92)
im = Image.new("RGB", (W, H), blue)
d = ImageDraw.Draw(im)

def star(cx, cy, r, fill):
    pts = []
    for i in range(10):
        rr = r if i % 2 == 0 else r * 0.382
        a = math.radians(-90 + i * 36)
        pts.append((cx + rr * math.cos(a), cy + rr * math.sin(a)))
    d.polygon(pts, fill=fill)

def emblem(cx, cy, R):
    for k in range(12):
        a = math.radians(-90 + k * 30)
        star(cx + R * math.cos(a), cy + R * math.sin(a), R * 0.11, gold)
    rings = [(0.79, 0.07, [150, 9, 64, 9, 210, 9, 38, 9, 200, 9]), (0.676, 0.028, [44, 8, 120, 8, 70, 8, 160, 8, 85, 8]),
             (0.6, 0.05, [90, 8, 140, 8, 50, 8, 160, 8]), (0.507, 0.021, [30, 7, 80, 7, 120, 7, 60, 7, 90, 7])]
    for rf, wf, dash in rings:
        r = R * rf
        circ = 2 * math.pi * r
        scale = circ / (2 * math.pi * 142 * rf)  # dash lengths were drawn for the 142-unit SVG ring
        pos, on, i = 0.0, True, 0
        while pos < circ:
            seg = dash[i % len(dash)] * scale
            if on:
                a0 = -38 + pos / circ * 360
                a1 = -38 + min(pos + seg, circ) / circ * 360
                mid = math.radians((a0 + a1) / 2 + 45)
                col = amber if math.cos(mid) < 0 else lemon
                d.arc([cx - r, cy - r, cx + r, cy + r], a0 - 90, a1 - 90, fill=col, width=max(2, int(R * wf)))
            pos += seg; on = not on; i += 1
    r = R * 0.38
    d.pieslice([cx - r, cy - r, cx + r, cy + r], 135, 315, fill=amber)
    d.pieslice([cx - r, cy - r, cx + r, cy + r], -45, 135, fill=lemon)
    for (L, w1, w2, ang) in [(R * 0.44, R * 0.077, R * 0.042, -60), (R * 0.79, R * 0.05, R * 0.022, 150)]:
        a = math.radians(ang - 90)
        x2, y2 = cx + L * math.cos(a), cy + L * math.sin(a)
        d.line([cx, cy, x2, y2], fill=navy, width=int(w1))
        d.line([cx, cy, x2, y2], fill=white, width=int(w2))
    d.ellipse([cx - R * .05, cy - R * .05, cx + R * .05, cy + R * .05], fill=navy)

emblem(1022 * S, H / 2, 152 * S)
for i in range(0, W, 60 * S):
    d.rectangle([i, H - 10 * S, i + 48 * S, H], fill=gold)
im = im.resize((1200, 630), Image.LANCZOS)
d = ImageDraw.Draw(im)
d.text((70, 72), "8TH EDITION · HEALES", font=body_b, fill=gold)
d.text((66, 130), "Eurosymposium", font=display, fill=white)
d.text((66, 200), "on Healthy Ageing", font=display, fill=white)
d.text((66, 270), "and Longevity", font=display, fill=gold)
d.text((70, 392), "5–6 November 2026", font=display_s, fill=white)
d.text((70, 456), "Muntpunt, Brussels · and online · free", font=body, fill=(201, 213, 245))
im.save(f"{site}/img/og-card.png", optimize=True)

fav = Image.new("RGBA", (128 * S, 128 * S), (0, 0, 0, 0))
d = ImageDraw.Draw(fav)
d.rounded_rectangle([0, 0, 128 * S, 128 * S], radius=28 * S, fill=blue)
emblem(64 * S, 64 * S, 52 * S)
fav.resize((128, 128), Image.LANCZOS).save(f"{site}/img/brand/favicon.png")
print("ok")
