!function u(i,c,a){function f(e,r){if(!c[e]){if(!i[e]){var t="function"==typeof require&&require;if(!r&&t)return t(e,!0);if(l)return l(e,!0);var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}var n=c[e]={exports:{}};i[e][0].call(n.exports,function(r){return f(i[e][1][r]||r)},n,n.exports,u,i,c,a)}return c[e].exports}for(var l="function"==typeof require&&require,r=0;r<a.length;r++)f(a[r]);return f}({1:[function(r,e,t){"use strict";var o=r("./time2color");Array.from(document.querySelectorAll(".post")).forEach(function(r){var e=o(r.querySelector("time").textContent);r.querySelector("header").style.backgroundColor="rgb("+e.r+", "+e.g+", "+e.b+")"})},{"./time2color":2}],2:[function(r,e,t){"use strict";e.exports=function(r){var e=r instanceof Date?r:new Date(r.replace(/-/g,"/")),t=e.getFullYear(),o=e.getMonth()+1,n=e.getDate(),u=e.getDay()+1,i=(t+o*n*u)%256,c=(t*o+n*u)%256,a=(t*o*n+u)%100+384-i-c;return a<64?(i-=64,c-=64,a+=128):192<a&&(i+=64,c+=64,a-=128),{r:i,g:c,b:a}}},{}]},{},[1]);