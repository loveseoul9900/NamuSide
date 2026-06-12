// ==UserScript==
// @name         NamuSide
// @namespace    http://tampermonkey.net/
// @version      2026-06-13-3
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

var a1=false;function b1(){if(a1)return;var c1=document.getElementsByTagName("ul");for(var d1=c1.length-1;d1>=0;d1--){var e1=c1[d1];var f1=Array.from(e1.children).filter(function(g1){var h1=g1.tagName==='LI';var i1=g1.querySelectorAll('a').length===1;return h1&&i1;}).length;if(f1===10){var j1=e1.parentNode.parentNode;if(j1&&j1.tagName==='DIV'){j1.remove();console.log("Success");a1=true;break;}}}}const k1=document.body;const l1={childList:true,subtree:true};const m1=function(n1,o1){if(a1){o1.disconnect();return;}for(const p1 of n1){if(p1.type==='childList'){b1();}}};const q1=new MutationObserver(m1);q1.observe(k1,l1);const r1=setInterval(function(){if(a1){clearInterval(r1);return;}b1();},3000);b1();
