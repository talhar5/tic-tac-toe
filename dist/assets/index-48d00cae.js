(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))m(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&m(i)}).observe(document,{childList:!0,subtree:!0});function c(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function m(t){if(t.ep)return;t.ep=!0;const n=c(t);fetch(t.href,n)}})();const s=document.querySelectorAll("[mark-box]"),p=document.querySelector(".popup-message"),l=document.getElementById("board"),u=document.getElementById("popup"),L=document.getElementById("resetBtn");let g=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],o=!0;d();L.addEventListener("click",h);function a(r){let e=r.target;if(w(e,o),E()){p.innerHTML=o?"X is winner":"O is winner",u.classList.add("show");return}if(y()){p.innerHTML="Draw!",u.classList.add("show");return}v(),f.innerHTML=o?"X's turn":"O's turn",r.target.removeEventListener("click",a)}function h(r){u.classList.remove("show"),s.forEach(e=>{e.classList.remove("x"),e.classList.remove("o"),e.removeEventListener("click",a)}),d()}function y(){let r=!0;return s.forEach(e=>{r=r*(e.classList.contains("x")||e.classList.contains("o"))}),r}function E(){return g.some(r=>r.every(e=>s[e].classList.contains(o?"x":"o")))}function v(){o=!o,d()}function d(){l.classList.remove("x"),l.classList.remove("o"),l.classList.add(o?"x":"o"),s.forEach(r=>{r.addEventListener("click",a,{once:!0})})}function w(r,e){let c=e?"x":"o";r.classList.add(c)}let f=document.getElementById("whosturn"),x=document.getElementById("targetElem"),B=x.getBoundingClientRect().top-f.offsetHeight-3;f.style.top=B+"px";