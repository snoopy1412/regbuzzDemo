define(['validate'],function(validate) {
  
  $('.reg-form').validate({
    rules: {
      firstname: {
        required: true
      },
      lastname: {
        required: true
      },
      password: {
        required: true,
        minlength: 7,
        passwordFormat: true
      },
      email: {
        required: true,
        email: true
          // remote:''
      }
    }
  });

  // at least one lowercase letter, one numeral
  $.validator.addMethod("passwordFormat", function(value, element, params) {
    var re = /^[a-z]+\d|^\d+[a-z]/g;
    return this.optional(element) || (re.test(value));
  }, "at least one lowercase letter, one numeral");



  // 点击切换step,仅作为模拟使用
  $('.m-steps li').each(function(index,item){
    $(this).click(function(){
      $('.m-steps li').each(function(){
         $(this).removeClass('current');
      });
        $(this).addClass('current');
        $('.reg-main').hide();
        var currentTarget = $('.reg-main-'+(index+1));
        currentTarget.show();
    });
  });

});