require(['jquery','raty','./publish/upload','./publish/edit','./publish/controller'],function($,raty){
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


  $('.jellybean').click(function() {
    $('.jellybean .jellybean-input').focus();
  });

// star    
  $('.star-bids-user').raty({
      readOnly: true,
      half: true,
      score: 4.3,
      precision: true,
      hints: ['bad', 'poor', 'regular', 'good', 'gorgeous'],
      path: './img/stars',
      target: '.item-stats-bids-name',
      targetKeep: true
  });
});