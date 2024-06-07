// ==UserScript==
// @name         NamuSide
// @namespace    http://tampermonkey.net/
// @version      2024-06-08
// @description        NamuSide blocks the side Navagation Bar on NamuWiki.
// @description:ko     NamuSide는 나무위키의 사이드바를 제거합니다
// @author       loveseoul9900
// @match        https://namu.wiki/*
// @namespace    https://github.com/loveseoul9900/NamuSide/blob/main/NamuSide.js
// @homepageURL  https://github.com/loveseoul9900/NamuSide/blob/main/NamuSide.js
// @supportURL   https://github.com/loveseoul9900/NamuSide/
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @downloadURL https://update.greasyfork.org/scripts/497290/NamuSide.user.js
// @updateURL https://update.greasyfork.org/scripts/497290/NamuSide.meta.js
// @grant        unsafeWindow
// @run-at       document-start
// @inject-into  page
// ==/UserScript==
(function() { function a1B() { e1F(); var c1D = document.getElementsByTagName("ul"); var d1E = []; var f1G = []; for (var g1H = 0; g1H < c1D.length; g1H++) { var h1I = c1D[g1H]; var i1J = h1I.getElementsByTagName("li").length; if (i1J === 10) { var j1K = h1I.parentNode.parentNode; d1E.push(j1K); } else if (i1J === 5) { var k1L = h1I.parentNode.parentNode; f1G.push(k1L); } } e1F(); var l1M = []; for (var m1N = 0; m1N < d1E.length; m1N++) { var n1O = d1E[m1N]; if (f1G.indexOf(n1O) !== -1) { l1M.push(n1O); } } if (l1M.length > 0) { l1M[0].remove(); } g1P(); } function e1F() { return; } function g1P() { return; } function h1Q() { return; } function i1R() { return; } const b1C = document.body; const o1S = { childList: true, subtree: true }; const p1T = function(q1U, r1V) { for (const s1W of q1U) { if (s1W.type === 'childList') { a1B(); } i1R(); } }; const t1X = new MutationObserver(p1T); t1X.observe(b1C, o1S); e1F(); a1B(); })();
