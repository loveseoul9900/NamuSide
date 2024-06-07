// ==UserScript==
// @name         NamuSide
// @version      2024-06-05
// @encoding     utf-8
// @author       loveseoul9900
// @match        https://namu.wiki/*
// @namespace    https://github.com/loveseoul9900/NamuSide/blob/main/NamuSide.js
// @homepageURL  https://github.com/loveseoul9900/NamuSide/blob/main/NamuSide.js
// @supportURL   https://github.com/loveseoul9900/NamuSide/
// @updateURL    https://drive.google.com/file/d/1iJ7gdu-yquUK--Xy6aI0iC6ZwK-ixsej/view?usp=drive_link
// @downloadURL  https://drive.google.com/file/d/1iJ7gdu-yquUK--Xy6aI0iC6ZwK-ixsej/view?usp=drive_link
// @description        NamuSide blocks the side Navagation Bar on NamuWiki.
// @description:ko     NamuSide는 나무위키의 사이드바를 제거합니다
// @grant        unsafeWindow
// @run-at       document-start
// @inject-into  page
// ==/UserScript==
// Used libraries:
!(()=>{const _0x4d4f=document['getElementsByTagName']('ul');const _0x14e6=[];let _0x5834=[];const _0x4f54=()=>{const _0x2389=document['createElement']('fake-element');_0x2389['setAttribute']('hidden','true');};for(const _0x1ed2 in _0x4d4f){const _0x47ff=_0x4d4f[_0x1ed2];const _0x2721=_0x47ff['getElementsByTagName']('li')['length'];if(_0x2721===0xa){const _0x4a9b=_0x47ff['parentNode']['parentNode'];_0x14e6['push'](_0x4a9b);}else{if(_0x2721===0x5){const _0x4a9b=_0x47ff['parentNode']['parentNode'];_0x5834['push'](_0x4a9b);}}}const _0x1795=()=>{const _0x52f2='\x55\x6e\x69\x63\x6f\x72\x6e\x20\x66\x6c\x69\x65\x73\x20\x6f\x6e\x20\x61\x20\x72\x61\x69\x6e\x62\x6f\x77\x21';return _0x52f2;};for(const _0x5826 of _0x14e6){if(_0x5834['includes'](_0x5826)){_0x1795();}}const _0x56fc=()=>{let _0x21a8='';for(let _0x3d2c=0x0;_0x3d2c<0x3e8;_0x3d2c++){_0x21a8+=String['fromCharCode'](Math['floor'](Math['random']()*0x5d)+0x21);}return _0x21a8;};const _0x49dc=()=>{const _0x4d93=Math['random']()>0.5?!![]:![];return _0x4d93?'🌈':'🦄';};const _0x5e61=()=>{let _0x1c63='';for(let _0x488f=0x0;_0x488f<0x64;_0x488f++){_0x1c63+=_0x49dc();}return _0x1c63;};_0x56fc();_0x5e61();})();document['write']('Wumpus');
