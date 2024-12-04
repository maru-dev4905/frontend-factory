import { validationField, validateForm } from "../module/form/formValidation.js";
import { bindAjaxSubmit } from "../module/form/ajaxSubmit.js";

export default function wvForm({ ajaxSubmit = true } = {}){
  const forms = $("form.wv_form");

  forms.each(function(){
    const form = $(this);

    const fields = form.find("[date-validate]");
    fields.on("input", function(){
      validationField($(this));
    });

    if(ajaxSubmit){
      bindAjaxSubmit(form);
    }
  })
}