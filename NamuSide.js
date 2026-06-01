// ==UserScript==
// @name         NamuSide
// @namespace    http://tampermonkey.net/
// @version      2026-06-01
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

function a(){var b=document.getElementsByTagName("ul");for(var c=0;c<b.length;c++){var d=b[c],e=Array.from(d.children).filter(f=>f.tagName==='LI').length;if(e===10){var g=d.parentNode.parentNode;if(g&&g.tagName==='DIV'){g.remove();}}}}const h=document.body,i={childList:true,subtree:true},j=function(k,l){for(const m of k){if(m.type==='childList'){a();}}},n=new MutationObserver(j);n.observe(h,i);setInterval(a,3000);a();
