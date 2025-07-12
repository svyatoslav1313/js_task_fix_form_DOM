"use strict";var inputs=document.querySelectorAll("form input");inputs.forEach(function(e){var t=document.createElement("label");t.classList.add("field-label"),t.setAttribute("for",e.id),t.textContent=e.name;var r=e.name[0].toUpperCase()+e.name.slice(1);e.setAttribute("placeholder",r),e.parentNode.prepend(t)});
//# sourceMappingURL=js_task_fix_form_DOM.4984c424.js.map
