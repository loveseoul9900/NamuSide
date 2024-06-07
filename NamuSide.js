// ==UserScript==
// @name         NamuSide
// @namespace    http://tampermonkey.net/
// @version      2024-06-08-3
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
// @run-at       document-start
// @inject-into  page
// @downloadURL https://update.greasyfork.org/scripts/497290/NamuSide.user.js
// @updateURL https://update.greasyfork.org/scripts/497290/NamuSide.meta.js
// ==/UserScript==

function compx() {var a=document.getElementsByTagName("ul"),b=[],c=[],d=0,e=0,f=[];for(d=0;d<a.length;d++){var g=a[d],h=g.getElementsByTagName("li").length;if(10===h){var i=g.parentNode.parentNode;b.push(i)}else 5===h&&(i=g.parentNode.parentNode,c.push(i))}for(d=0;d<b.length;d++){var j=b[d];-1!==c.indexOf(j)&&f.push(j)}f.length>0&&f.forEach(function(a){1<a.classList.length&&a.remove()})}const targetNode=document.body,config={childList:!0,subtree:!0},callback=function(a,b){for(const c of a)"childList"===c.type&&compx()};new MutationObserver(callback).observe(targetNode,config),compx();
