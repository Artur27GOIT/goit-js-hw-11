import{a as f,S as d,i as c}from"./assets/vendor-Dtuz2WrL.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const m="https://pixabay.com/api/",p="54245277-1c637348af7f3e854ea758d9c";function h(n){const o={key:p,q:n,image_type:"photo",orientation:"horizontal",safesearch:!0};return f.get(m,{params:o}).then(t=>t.data)}const u=document.querySelector(".gallery"),a=document.querySelector(".loader");a?console.log("Loader element found:",a):console.warn("Loader element not found: .loader");const y=new d(".gallery a",{captionsData:"alt",captionDelay:250});function g(n){const o=n.map(t=>`
      <li class="gallery-item">
        <a href="${t.largeImageURL}">
          <img src="${t.webformatURL}" alt="${t.tags}" />
        </a>
        <div class="info">
          <p><b>Likes:</b> ${t.likes}</p>
          <p><b>Views:</b> ${t.views}</p>
          <p><b>Comments:</b> ${t.comments}</p>
          <p><b>Downloads:</b> ${t.downloads}</p>
        </div>
      </li>
    `).join("");u.insertAdjacentHTML("beforeend",o),y.refresh()}function L(){u.innerHTML=""}function b(){a.classList.remove("is-hidden")}function w(){a.classList.add("is-hidden")}const l=document.querySelector(".form");l?l.addEventListener("submit",S):console.warn("Form element not found: .form");function S(n){n.preventDefault();const o=n.currentTarget,s=o.elements["search-text"].value.trim();if(s===""){c.error({message:"Please enter a search query!"});return}o.reset(),L(),b(),h(s).then(e=>{const r=e&&e.hits?e.hits:[];if(r.length===0){c.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}g(r)}).catch(e=>{console.error(e),c.error({message:"Something went wrong. Please try again later."})}).finally(()=>{w()})}
//# sourceMappingURL=index.js.map
