define(['raty','jRange'], function(raty,jRange) {

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


  // 范围
  $('.slider-input').jRange({
    from: 0,
    to: 100,
    step: 1,
    scale: [0,25,50,75,100],
    format: '%s',
    width: 200,
    showLabels: true,
    isRange : true,
    ondragend : function(){
      $('.budget-min').html($('.back-bar .low').eq(1).html());
      $('.budget-max').html($('.back-bar .high').eq(1).html());
    }
});
});