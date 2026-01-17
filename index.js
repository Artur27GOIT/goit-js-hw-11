import{a as h,S as g,i as u}from"./assets/vendor-Dtuz2WrL.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const y="https://pixabay.com/api/",L="54245277-1c637348af7f3e854ea758d9c";function w(t){const n={key:L,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0};return h.get(y,{params:n}).then(o=>o.data)}let a=null;const f=document.querySelector(".gallery"),l=document.querySelector(".loader");l?l.classList.add("is-hidden"):console.warn("Loader element not found: .loader");function b(){a||(a=new g(".gallery a",{captionsData:"alt",captionDelay:250}))}function v(t){if(!f)return;const n=t.map(o=>{const i=(o.tags||"Image").split(",")[0].trim(),e=E(o.views),r=o.user||"CREATOR";return`
      <li class="gallery-item" role="listitem">
        <a class="gallery-link" href="${o.largeImageURL}">
          <img class="gallery-image" src="${o.webformatURL}" alt="${d(o.tags)}" loading="lazy" />
        </a>
        <div class="info">
          <h3 class="info-title">${d(i)}</h3>
          <div class="info-meta">
            <span class="info-views">${e} views</span>
            <span class="info-creator">${d(r)}</span>
          </div>
          <div class="info-stats">
            <span><b>Likes:</b> ${o.likes}</span>
            <span><b>Comments:</b> ${o.comments}</span>
            <span><b>Downloads:</b> ${o.downloads}</span>
          </div>
        </div>
      </li>`}).join("");f.insertAdjacentHTML("beforeend",n),b(),a&&typeof a.refresh=="function"&&a.refresh()}function S(){f&&(f.innerHTML="",a&&typeof a.refresh=="function"&&a.refresh())}function $(){console.trace("showLoader called"),l&&l.classList.remove("is-hidden")}function p(){console.trace("hideLoader called"),l&&l.classList.add("is-hidden")}function E(t=0){return t>=1e6?(t/1e6).toFixed(1).replace(/\.0$/,"")+"M":t>=1e3?(t/1e3).toFixed(1).replace(/\.0$/,"")+"K":String(t)}function d(t=""){return String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}const m=document.querySelector(".form");m?m.addEventListener("submit",q):console.warn("Form element not found: .form");function q(t){t.preventDefault();const n=t.currentTarget,i=n.elements["search-text"].value.trim();if(i===""){u.error({message:"Please enter a search query!"});return}n.reset(),S();const e=500,r=Date.now();$(),w(i).then(s=>{const c=s&&s.hits?s.hits:[];if(c.length===0){u.error({message:"Sorry, there are no images matching your search query. Please try again!"}),p();return}v(c)}).catch(s=>{console.error(s),u.error({message:"Something went wrong. Please try again later."})}).finally(()=>{const s=Date.now()-r,c=Math.max(0,e-s);setTimeout(()=>p(),c)})}
//# sourceMappingURL=index.js.map
