// ==UserScript==
// @name         NamuSide
// @namespace    http://tampermonkey.net/
// @version      2024-06-08-2
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

(function(){function a(){var b=document.getElementsByTagName("ul"),c=[],d=[];for(var e=0;e<b.length;e++){var f=b[e],g=f.getElementsByTagName("li").length;if(10===g){var h=f.parentNode.parentNode;c.push(h)}else 5===g&&(h=f.parentNode.parentNode,d.push(h))}var i=[];for(var j=0;j<c.length;j++){var k=c[j];-1!==d.indexOf(k)&&i.push(k)}i.length>0&&i.forEach(function(a){a.classList.length>1&&a.remove()})}const b=document.body,c={childList:!0,subtree:!0},d=function(b,d){for(const e of b)"childList"===e.type&&a()};new MutationObserver(d).observe(b,c),a()})();
