import"./assets/1-gallery-80a95049.js";import"./assets/vendor-10cb7c31.js";const a="feedback-form-state",o=document.querySelector(".feedback-form");let e=JSON.parse(localStorage.getItem(a))||{};const{email:r,message:l}=o.elements;o.addEventListener("submit",m);o.addEventListener("input",n);e&&(r.value=e.email||"",l.value=e.messag||"");function m(t){if(t.preventDefault(),r.value===""||l.value===""){alert("Fill please all fields");return}localStorage.removeItem(a),t.target.reset(),console.log(e),e={}}function n(t){e[t.target.name]=t.target.value.trim(),localStorage.setItem(a,JSON.stringify(e))}
//# sourceMappingURL=commonHelpers2.js.map