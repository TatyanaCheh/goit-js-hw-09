import"./assets/modulepreload-polyfill-3cfb730f.js";const a="feedback-form-state",o=document.querySelector(".feedback-form");let t=JSON.parse(localStorage.getItem(a))||{};const{email:r,message:l}=o.elements;function n(e){if(e.preventDefault(),r.value===""||l.value===""){alert("Fill please all fields");return}localStorage.removeItem(a),e.target.reset(),console.log(t),t={}}o.addEventListener("submit",n);function s(e){t[e.target.name]=e.target.value.trim(),localStorage.setItem(a,JSON.stringify(t))}o.addEventListener("input",s);
//# sourceMappingURL=commonHelpers2.js.map
