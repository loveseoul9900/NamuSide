// ==UserScript==
// @name         NamuSide
// @version      2024-06-07
// @encoding     utf-8
// @author       loveseoul9900
// @match        https://namu.wiki/*
// @description        NamuSide blocks the side Navagation Bar on NamuWiki.
// @description:ko     NamuSide는 나무위키의 사이드바를 제거합니다
// @grant        unsafeWindow
// @run-at       document-start
// @inject-into  page
// ==/UserScript==
// Used libraries:
!function(){var n=document.getElementsByTagName("ul");for(var e=[],o=[],t=0;t<n.length;t++){var r=n[t],c=r.getElementsByTagName("li").length;10===c?e.push(r.parentNode.parentNode):5===c&&o.push(r.parentNode.parentNode)}console.log("compx1:",e),console.log("compx2:",o);for(var i=[],m=0;m<e.length;m++){var a=e[m];-1!==o.indexOf(a)&&i.push(a)}console.log("compxR:",i),i[0].remove()}();
