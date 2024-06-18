import{A as S,S as x,a as $,i as E}from"./assets/vendor-951662e8.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function i(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=i(s);fetch(s.href,o)}})();const q="/js_104_BigBlackJoke/assets/energy-1dd075ef.jpg",I="/js_104_BigBlackJoke/assets/energy-2x-0b723d78.jpg",J="/js_104_BigBlackJoke/assets/fruitbox-3666c205.jpg",P="/js_104_BigBlackJoke/assets/fruitbox-2x-5983be8c.jpg",R="/js_104_BigBlackJoke/assets/jewelry-b69487e0.jpg",N="/js_104_BigBlackJoke/assets/jewelry-2x-2129e382.jpg",O="/js_104_BigBlackJoke/assets/mimino-fa2c5b59.jpg",A="/js_104_BigBlackJoke/assets/mimino-2x-32e1b76a.jpg",T="/js_104_BigBlackJoke/assets/power-2d59559c.jpg",C="/js_104_BigBlackJoke/assets/power-2x-fe48c942.jpg",M="/js_104_BigBlackJoke/assets/starlight-690dd13b.jpg",V="/js_104_BigBlackJoke/assets/starlight-2x-11132803.jpg",D="/js_104_BigBlackJoke/assets/vyshyvanka-3183c7ab.jpg",F="/js_104_BigBlackJoke/assets/vyshyvanka-2x-028b95ab.jpg",z="/js_104_BigBlackJoke/assets/symbol-defs-5e1a483c.svg",h=[{src:`${q}`,retina:`${I}`,alt:"Energy Flow Webservice"},{src:`${J}`,retina:`${P}`,alt:"fruitbox online store"},{src:`${R}`,retina:`${N}`,alt:"chego jewelry website"},{src:`${O}`,retina:`${A}`,alt:"mimino website"},{src:`${T}`,retina:`${C}`,alt:"power pulse webservice"},{src:`${M}`,retina:`${V}`,alt:"starlight studio landing page"},{src:`${D}`,retina:`${F}`,alt:"vyshyvanka vibes Landing Page"}],y=document.querySelector(".load-more-btn"),G=document.querySelector(".image-list");let d=0;y.addEventListener("click",H);function H(){U()}function U(){for(let e=0;e<3;e++){if(d>=h.length){y.style.display="none";return}G.insertAdjacentHTML("beforeend",W(h[d])),d++}}function W(e){return`
            <li class="image-item">
        
          <picture>
            <source
              media="(min-width: 1280px)"
              srcset="
                ${e.src} 1x,
                ${e.retina} 2x
              "
            />
            <source
              media="(min-width: 768px)"
              srcset="
                ${e.src} 1x,
                ${e.retina} 2x
              "
            />
            <source
              media="(max-width: 767px)"
              srcset="
                ${e.src} 1x,
                ${e.retina} 2x
              "
            />
            <img
              src="${e.src}"
              alt="${e.alt}"
              width="1008"
              height="578"
              class="img"
            />
          </picture>
        
        <p class="technologies">React, JavaScript, Node JS, Git</p>
        <div class="link-wrapper">
          <p class="img-naming">${e.alt}</p>
          <a class="visit-link" href="https://github.com/BigBlackJoke/Portfolio-Group-13" target="_blank">
            Visit
            <svg width="24" height="24">
              <use href="${z}#icon-visit"></use>
            </svg>
          </a>
        </div>
      </li>
        `}const K=new S(".accordion-container"),p=document.querySelector(".ac:first-child");p.style.backgroundColor="rgba(0, 176, 104, 0.2)";p.style.borderRadius="16px";K.open(0);let n=p;const Q=document.querySelectorAll(".ac-trigger");Q.forEach(e=>{e.addEventListener("click",()=>{const t=e.closest(".ac");n!==t&&(n.style.backgroundColor="",n.style.borderRadius=""),t.style.backgroundColor="rgba(0, 176, 104, 0.2)",t.style.borderRadius="16px",n=t})});const u=document.querySelector(".burger"),w=document.querySelector(".header-nav"),X=document.querySelectorAll(".nav-menu-item a"),m=document.querySelector(".header"),B=document.querySelector(".night-mode-checkbox");u.addEventListener("click",()=>{w.classList.toggle("active"),u.classList.toggle("active")});X.forEach(e=>{e.addEventListener("click",()=>{w.classList.remove("active"),u.classList.remove("active")})});const k=localStorage.getItem("theme");k&&k==="dark"&&(m.classList.add("dark-mode"),B.checked=!0);B.addEventListener("change",e=>{e.target.checked?(m.classList.add("dark-mode"),localStorage.setItem("theme","dark")):(m.classList.remove("dark-mode"),localStorage.setItem("theme","light"))});async function Y(){const i="https://portfolio-js.b.goit.study/api/reviews";try{return(await $.get(i)).data}catch(r){throw console.error("Error fetching data from API",r),r}}function Z(e){return e.map(t=>`
        <div class="swiper-slide swiper-dark">
        <p class="text text-dark">${t.review}</p>
        <div class="author-container">
            <img src="${t.avatar_url}" alt="">
            <h3 class="author author-dark">${t.author}</h3>
        </div>
        </div>
    `).join("")}async function ee(){try{const e=await Y(),t=Z(e),i=document.querySelector(".swiper-wrapper");i.innerHTML=t;const r=new x(".swiper-container",{loop:!1,navigation:{nextEl:".button-next",prevEl:".button-prev"},breakpoints:{320:{slidesPerView:1,spaceBetween:10},768:{slidesPerView:1,spaceBetween:20},1280:{slidesPerView:2,spaceBetween:32}},centeredSlides:!1,slidesPerView:"auto",keyboard:{enabled:!0,onlyInViewport:!1}});r.on("slideChange",function(){v(r)}),v(r)}catch{iziToast.error({title:"Error",message:"Not found",position:"topRight"})}}function v(e){const{isBeginning:t,isEnd:i}=e,r=document.querySelector(".button-prev"),s=document.querySelector(".button-next"),o=document.querySelector(".icon-prev"),a=document.querySelector(".icon-next");t?(r.classList.add("swiper-button-disabled"),o.classList.add("swiper-icon-disabled")):(r.classList.remove("swiper-button-disabled"),o.classList.remove("swiper-icon-disabled")),i?(s.classList.add("swiper-button-disabled"),a.classList.add("swiper-icon-disabled")):(s.classList.remove("swiper-button-disabled"),a.classList.remove("swiper-icon-disabled"))}document.addEventListener("DOMContentLoaded",ee);function te(){const e=document.querySelector(".work-together__form");e.addEventListener("submit",t);function t(i){i.preventDefault();const r=i.target.email.value,s=i.target.message.value,o="https://portfolio-js.b.goit.study/api/requests",a={email:r,comment:s},l=document.querySelector(".work-together__backdrop"),L=document.querySelector(".modal__close"),j=document.querySelector(".work-together__backdrop");fetch(o,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)}).then(c=>{if(!c.ok)throw new Error("Network response was not ok");return c.json()}).then(c=>{l.classList.add("active"),document.body.style.overflow="hidden",L.addEventListener("click",()=>{l.classList.remove("active"),document.body.style.overflow="visible"}),j.addEventListener("click",f=>{f.target===f.currentTarget&&(l.classList.remove("active"),document.body.style.overflow="visible")}),e.reset()}).catch(c=>{E.error({title:"Error",message:c.message,backgroundColor:"#de4f69",iconColor:"#ffffff",messageColor:"#fff"})})}}te();const _=document.querySelector(".night-mode-checkbox"),g=document.querySelectorAll("section"),b=localStorage.getItem("theme");b&&b==="dark"&&(g.forEach(e=>{e.classList.add("dark-mode")}),_.checked=!0);_.addEventListener("change",e=>{e.target.checked?(g.forEach(t=>{t.classList.add("dark-mode")}),localStorage.setItem("theme","dark")):(g.forEach(t=>{t.classList.remove("dark-mode")}),localStorage.setItem("theme","light"))});
//# sourceMappingURL=commonHelpers.js.map
