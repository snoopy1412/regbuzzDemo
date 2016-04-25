require(['jquery','Vue','vueValidator'],function($,Vue,vueValidator) {
  
// var validate = $('.reg-form').validate({
//     rules: {
//       firstname: {
//         required: true
//       },
//       lastname: {
//         required: true
//       },
//       password: {
//         required: true,
//         minlength: 7,
//         passwordFormat: true
//       },
//       email: {
//         required: true,
//         email: true
//           // remote:''
//       }
//     }
//   });

// console.log(validate.form())


//   at least one lowercase letter, one numeral
//   $.validator.addMethod("passwordFormat", function(value, element, params) {
//     var re = /^[a-z]+\d|^\d+[a-z]/g;
//     return this.optional(element) || (re.test(value));
//   }, "at least one lowercase letter, one numeral");

// $(document).on('keydown',function(){ 
//   $('.btn--register').prop({'disabled':!validate.form()});
// })


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

// 加载组件
  Vue.use(vueValidator);

//自定义email判断 
  Vue.validator('email', function (val) {
    return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(val)
  })
  Vue.validator('passwordFormat',function(val){
    return /^[a-z]+\d|^\d+[a-z]/gi.test(val)
  })

// 实例化
  new Vue({
    el:"#app",
    data:{
      firstNameShow:false,
      lastNameShow:false,
      emailShow:false,
      passwordShow:false
    },
    methods:{
      showError:function(text){
        this[text+'Show'] = true;
      }
    }
  })

});