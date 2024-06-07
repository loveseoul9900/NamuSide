// ==UserScript==
// @name         NamuSide
// @namespace    http://tampermonkey.net/
// @version      2024-06-07
// @description        NamuSide blocks the side Navagation Bar on NamuWiki.
// @description:ko     NamuSide는 나무위키의 사이드바를 제거합니다
// @author       loveseoul9900
// @match        https://namu.wiki/*
// @namespace    https://github.com/loveseoul9900/NamuSide/blob/main/NamuSide.js
// @homepageURL  https://github.com/loveseoul9900/NamuSide/blob/main/NamuSide.js
// @supportURL   https://github.com/loveseoul9900/NamuSide/
// @updateURL    https://github.com/loveseoul9900/NamuSide/blob/main/NamuSide.js
// @downloadURL  https://github.com/loveseoul9900/NamuSide/blob/main/NamuSide.js
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    var a=document.getElementsByTagName("ul");var b=[];var c=[];for(var d=0;d<a.length;d++){var e=a[d];var f=e.getElementsByTagName("li").length;if(f===10){var g=e.parentNode.parentNode;b.push(g);}else if(f===5){var g=e.parentNode.parentNode;c.push(g);}}var h=[];for(var i=0;i<b.length;i++){var j=b[i];if(c.indexOf(j)!==-1){h.push(j);}}h[0].remove();
    'use strict';

    // Your code here...
})();
