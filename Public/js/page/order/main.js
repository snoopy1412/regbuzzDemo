require(['jquery','./page/order/controller'],function($){
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