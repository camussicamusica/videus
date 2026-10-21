# ViDeus public site

Live: https://camussicamusica.github.io/videus/

| URL | What |
|---|---|
| `/` | latest version (currently V3 · Final) |
| `/v1/` | V1 (first release, 2026-10-03) |
| `/v2/` | V2 (2026-10-16, music + ViDeus Catalog end card) |
| `/v3/` | V3 · Final permalink (same content as `/`) |

Previews: V1 in `videos/voz/` (never move or rename), V2 in `videos/v2/`, V3 in `videos/v3/`.

V3 page layout: Final first (Selección final / Todos), the older versions in the "Historial de iteraciones" side drawer (not the top version menu). Generator: `_render-work/yacimiento/v3-todos/site/gen_v3.py` (outside this repo).

## How to add a version (e.g. V3)
1. Previews go in `videos/v3/`.
2. `v2/index.html` already exists as V2's permalink, so the root can be replaced. Build the new page and save it as `v3/index.html` (video paths `../videos/v3/...`, script tag `<script src="../versions.js" data-current="v3" data-root="../">`) AND as the root `index.html` (video paths `videos/v3/...`, `<script src="versions.js" data-current="v3" data-root="">`).
3. In `versions.js` add one line: `{ id: "v3", path: "v3/" }` after the V2 line. The last entry is labelled "(última)" and links to the site root; older ones link to their folder.
4. Check that every `src` resolves, then commit and push.
