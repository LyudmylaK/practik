import{a as n}from"./assets/vendor-CNNbG8jS.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();n.defaults.baseURL="https://dummyjson.com/recipes";async function d(){const{data:t}=await n();return t}async function l(t){const{data:o}=await n(`/${t}`);return o}const a={recipesList:document.querySelector(".recipes-list"),backdrop:document.querySelector(".backdrop")};function u(){a.backdrop.classList.remove("is-hidden")}function p(t){const o=t.map(({image:s,name:i,difficulty:e,cuisine:r,id:c})=>`
      <li class="recipes-item">
          <img src="${s}" alt="${i}" data-id="${c}">
          <div>
            <h3>${i}</h3>
            <p>Cuisine: ${r}</p>
            <p>Difficulty: ${e}</p>
          </div>
        </li>
    
    `).join("");a.recipesList.insertAdjacentHTML("beforeend",o)}async function f(){try{const{recipes:t}=await d();p(t)}catch(t){console.log(t)}}async function m(t){if(t.target.nodeName==="IMG")try{const o=t.target.dataset.id,s=await l(o);u()}catch(o){console.log(o)}}document.addEventListener("DOMContentLoaded",f);a.recipesList.addEventListener("click",m);
//# sourceMappingURL=index.js.map
