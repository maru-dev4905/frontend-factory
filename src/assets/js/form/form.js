import REG from "./REG";
import EmailIpt from "./input/email";

window.onload = function() {
  const components= {
    text: $("input[data-ipt='text']"),
    email: $("input[data-ipt='email']"),
    tel: $("input[data-ipt='tel']"),
    phone: $("input[data-ipt='phone']"),
    pw: $("input[data-ipt='pw']"),
    pwChk: $("input[data-ipt='pwChk']"),
    textarea: $("textarea[data-ipt='textarea']"),
    select: $(".wv_select"),
    radio: $("input[data-ipt='radio']"),
    checkbox: $("input[data-ipt='checkbox']"),
    file: $("input[data-ipt='file']"),
  }
  const init = () => {
    components.email.length !== 0 && components.email.on("change", function(){EmailIpt($(this), REG.EMAIL)});
  }
  init();
}