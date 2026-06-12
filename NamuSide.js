// ==UserScript==
// @name         NamuSide
// @namespace    http://tampermonkey.net/
// @version      2026-06-13-4
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
// @run-at       document-idle
// @downloadURL https://update.greasyfork.org/scripts/497290/NamuSide.user.js
// @updateURL https://update.greasyfork.org/scripts/497290/NamuSide.meta.js
// ==/UserScript==

if(!window.z1){window.z1=false;setTimeout(function(){function a1(){if(window.z1)return;var b1=document.getElementsByTagName("ul");for(var c1=b1.length-1;c1>=0;c1--){var d1=b1[c1];var e1=Array.from(d1.children).filter(function(f1){return f1.tagName==='LI'}).length;if(e1===10){var g1=d1.parentNode.parentNode;if(g1&&g1.tagName==='DIV'){g1.remove();window.z1=true;break}}}}const r1=document.body;const s1={childList:true,subtree:true};const t1=function(u1,v1){if(window.z1){x1.disconnect();return}for(const w1 of u1){if(w1.type==='childList'){a1()}}};const x1=new MutationObserver(t1);x1.observe(r1,s1);const m1=setInterval(function(){if(window.z1){clearInterval(m1);return}a1()},3000);a1()},2000);}
