define(['icheck', 'raty'], function(icheck, raty) {

  $('input').iCheck({
    checkboxClass: 'icheckbox_square-blue',
    radioClass: 'iradio_square-blue',
    increaseArea: '20%'
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
});