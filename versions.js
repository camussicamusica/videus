/* Version menu shared by every version page.
   TO ADD A NEW VERSION (e.g. V3): add ONE line to VERSIONS below (newest last).
   The last entry is automatically labelled "(última)" and must be the one served at the site root. */
(function () {
  var VERSIONS = [
    { id: "v1", path: "v1/" },
    { id: "v2", path: "v2/" }   // <- add { id: "v3", path: "v3/" } after this line
  ];
  var s = document.currentScript, cur = s.getAttribute("data-current"), root = s.getAttribute("data-root") || "";
  var css = document.createElement("style");
  css.textContent = ".vmenu{display:flex;gap:8px;align-items:center;flex-wrap:wrap;padding:10px 16px;border-bottom:1px solid var(--line,#33383a);background:var(--panel,#212426);font:500 12px var(--mono,Menlo,monospace);letter-spacing:.08em;text-transform:uppercase;color:var(--muted,#9aa3a3)}" +
    ".vmenu a{color:var(--fg,#eee);text-decoration:none;border:1px solid var(--line,#33383a);border-radius:999px;padding:4px 12px}" +
    ".vmenu a:hover{border-color:var(--orange,#e0623a)}" +
    ".vmenu a[aria-current=page]{background:var(--orange,#e0623a);border-color:var(--orange,#e0623a);color:#fff}";
  document.head.appendChild(css);
  var nav = document.createElement("nav");
  nav.className = "vmenu"; nav.setAttribute("aria-label", "Versiones");
  nav.appendChild(document.createTextNode("Versión"));
  VERSIONS.forEach(function (v, i) {
    var last = i === VERSIONS.length - 1, a = document.createElement("a");
    // the latest version lives at the site root; older ones in their folder
    a.href = last ? (root || "./") : root + v.path;
    a.textContent = v.id.toUpperCase() + (last ? " (última)" : "");
    if (v.id === cur) a.setAttribute("aria-current", "page");
    nav.appendChild(a);
  });
  s.parentNode.insertBefore(nav, s);
})();
