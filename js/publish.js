define(['icheck', 'raty'],function(icheck,raty) {
  $('.iCheck').iCheck({
    checkboxClass: 'icheckbox_square-blue',
    radioClass: 'iradio_square-blue',
    increaseArea: '20%' // optional
  });

  // 星星评级      
  $('.grade-item').each(function() {
    var orginScore = $(this).data('score');

    $(this).raty({
      readOnly: true,
      half: true,
      score: orginScore,
      precision: true,
      hints: ['bad', 'poor', 'regular', 'good', 'gorgeous'],
      path: './img/stars',
      target: $(this).prev(),
      targetKeep: true
    });

  });


  $('#jellybean').click(function() {
    $('.jellybean-input').focus();
  });

  // 点击移除
  $(document).on('click', '#jellybean .remove', function() {
    $(this).parent().parent().remove();
  });

  // 按下显示
  $('.jellybean-input').on('keydown', function() {
    var _this = this;
    clearTimeout(this.timer);
    this.timer = setTimeout(function() {
      var str = $(_this).val();
      html = $('<li> <a href="" class="jellybean-result-link">' + str + '</a></li>');
      $('.jellybean-result').append(html);
      $('.jellybean-result').show();
    }, 200);
  });

  // 赋值
  $(document).on('click', '.jellybean-result-link', function(event) {
    event.preventDefault();
    event.stopPropagation();
    $('.jellybean-result').html('');
    $('.jellybean-result').hide();
    var str = $(this).text();
    var html = $(
      "<li class='jellybean-container-item'>" +
      "<span class='jellybean-suggest-show'>" +
      "<span class='value'>" + str + "</span>" +
      "<button type='button' class='remove'>×</button>" +
      "</span>" +
      "</li>");

    $('.jellybean-input').parent().parent().before(html);
    $('.jellybean-input').val('');

    // 重新计算#jellybean的高度
    var boxHeight = $('#jellybean').height();
    var innerHeight = $('.jellybean-container').height();

    if(innerHeight > boxHeight){
       $('#jellybean').css({
        height: innerHeight + 20
       });
    }
  });
});