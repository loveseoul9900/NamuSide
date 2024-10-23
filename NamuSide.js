// ==UserScript==
// @name         NamuSide
// @namespace    http://tampermonkey.net/
// @version      2024-10-24
// @description        NamuSide blocks the side Navagation Bar on NamuWiki.
// @description:ko     NamuSide는 나무위키의 사이드바를 제거합니다
// @author       loveseoul9900
// @match        https://namu.wiki/*
// @namespace    https://github.com/loveseoul9900/NamuSide/blob/main/NamuSide.js
// @homepageURL  https://github.com/loveseoul9900/NamuSide/blob/main/NamuSide.js
// @supportURL   https://github.com/loveseoul9900/NamuSide/
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @grant        unsafeWindow
// @run-at       document-end
// @downloadURL https://update.greasyfork.org/scripts/497290/NamuSide.user.js
// @updateURL https://update.greasyfork.org/scripts/497290/NamuSide.meta.js
// ==/UserScript==

function a() { var b = document.getElementsByTagName("ul"); var c = []; var d = []; for (var e = 0; e < b.length; e++) { var f = b[e]; var g = f.getElementsByTagName("li").length; if (g === 10) { var h = f.parentNode.parentNode; c.push(h); } else if (g === 5) { var i = f.parentNode.parentNode; d.push(i); } } var j = []; for (var k = 0; k < c.length; k++) { var l = c[k]; if (d.indexOf(l) !== -1) { j.push(l); } } if (j.length > 0) { j[0].remove(); } } const m = document.body; const n = { childList: true, subtree: true }; const o = function(p, q) { for (const r of p) { if (r.type === 'childList') { a(); } } }; const s = new MutationObserver(o); s.observe(m, n); a();
