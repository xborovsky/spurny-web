$(function () {
    $('#subscribe-form').validate({
      rules : {
        fullname : 'required',
        email : {
          required : true,
          email : true
        },
        birthyear : 'required',
        phone : 'required'
      },
      messages : {
        fullName : 'Zadejte prosím Vaše jméno',
        email : {
          required : 'Zadejte prosím Váš email',
          email : 'Zadejte prosím validní emailovou adresu'
        }
      },
      submitHandler : function(form) {
        form.submit();
      }
    });
});