define(['jquery','raty','bootstrap','./js/publish-upload.js','./js/publish-controller.js','./js/order-controller.js'],function($,raty,bootstrap) {

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



  // order
  // +Add Deliverables
  $('#add-deliverables').on('click',function(){
      var content = $(this).prev(),
          html = $("<div class='alert alert-estimated fade in clearfix'>"+
                   "<button type='button' class='closeOut btn btn-danger-outline btn-sm' data-dismiss='alert'><span aria-hidden='true'>×</span></button>"+
                   "<p class='estimated-text'>"+
                   "<input type='text' value='' placeholder='Add your deliverable'>"+
                   "</p>"+  
                   "</div>"
                   );
     content.append(html);
  })

});