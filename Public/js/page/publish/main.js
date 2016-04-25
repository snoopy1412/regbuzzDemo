require(['jquery','raty','./page/publish/upload','./page/publish/edit','./page/publish/controller'],function($,raty){
 // 星星评级      
  $('.grade-item').each(function() {
    var orginScore = $(this).data('score');

    $(this).raty({
      readOnly: true,
      half: true,
      score: orginScore,
      precision: true,
      hints: ['bad', 'poor', 'regular', 'good', 'gorgeous'],
      path: './Public/img/stars',
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
      path: './Public/img/stars',
      target: '.item-stats-bids-name',
      targetKeep: true
  });

// 为列表页补充的
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