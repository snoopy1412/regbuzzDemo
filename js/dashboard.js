define(['./js/dashboard-controller.js'],function(){

  // 角色转换
  $('#change-role input[type=radio]').on('change',function(){

    var employerInput = $('#employerView_option').prop('checked'),
        providerInput = $('#providerView_option').prop('checked');  
    console.log(employerInput,providerInput);
    if(employerInput && !providerInput){
      $('.history-content .employer-view').addClass('active');
      $('.history-content .provider-view').removeClass('active');
    }
    if(providerInput && !employerInput){
      $('.history-content .employer-view').removeClass('active');
      $('.history-content .provider-view').addClass('active');
    }
  })
});
