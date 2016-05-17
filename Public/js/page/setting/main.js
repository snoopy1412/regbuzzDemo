define(['jquery'],function($){
  // 点击切换step,仅作为模拟使用
  $('.setting-menu a').each(function(index,item){
    $(this).click(function(){
      $('.setting-menu a').each(function(){
         $(this).removeClass('active');
      });
        $(this).addClass('active');
        $('.setting-section').hide();
        $('.setting-section').eq(index).show()
    });
  });

});