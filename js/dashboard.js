define(['popover'],function(popover){
  // popover
  // 首页二级菜单的调用
 
  $('.js-dropdown').dropdown();


  $('.js-utilities-help').popover({
    method: 'hover',
    callback: function(obj) {
      var loadSucess = obj.data('loadSucess') === undefined ? false : true;
      if (!loadSucess) {
        setTimeout(function() {
          obj.parent().find('.dropdown-loading').remove();
          var head = $('<div class="dropdown-head">Help Center </div>');
          var body = $('<div class="dropdown-body"><ul><li><a href="">A security question has been created for your account.</a></li><li><a href="">A security question has been created for your account.</a></li><li><a href="">A security question has been created for your account.</a></li></ul></div>');
          obj.parent().find('.dropdown-menu').append(head).append(body);
          obj.data('loadSucess', true);
        }, 1000);
      }
    }
  });
  $('.js-utilities-message').popover({
    method: 'hover'
  });
  $('.js-utilities-notice').popover({
    method: 'hover'
  });
  $('.js-utilities-account').popover({
    method: 'hover'
  });


  $('.js-outbox').on('click', function() {
    var thisClass = $(this).find('i').attr('class');
    var str = $(this).find('span').text();
    var parentUl = $(this).parent().parent();
    var inbox = parentUl.prev();
    var input = parentUl.parent().next();
    $('.js-outbox').each(function() {
      $(this).removeClass('active');
    });
    $(this).addClass('active');
    inbox.find('i').attr('class', '').addClass(thisClass);

    input.attr('placeholder', str);
  });
});
