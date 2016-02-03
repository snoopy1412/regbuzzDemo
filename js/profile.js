define(['raty','edit','layer','./js/profile-controller.js'],function(raty,edit,layer) {

    // 星星评级
    $('.totalScore').raty({
        readOnly: true,
        half: true,
        score: 4.3,
        precision: true,
        hints: ['bad', 'poor', 'regular', 'good', 'gorgeous'],
        path: './img/stars',
        target: '.item-stats-totalScore-name',
        targetKeep: true
    });
    $('.star-quality').raty({
        readOnly: true,
        half: true,
        score: 0.76,
        precision: true,
        hints: ['bad', 'poor', 'regular', 'good', 'gorgeous'],
        path: './img/stars',
        target: '.item-stats-quality-name',
        targetKeep: true
    });
    $('.star-speed').raty({
        readOnly: true,
        half: true,
        score: 3.6,
        precision: true,
        hints: ['bad', 'poor', 'regular', 'good', 'gorgeous'],
        path: './img/stars',
        target: '.item-stats-speed-name',
        targetKeep: true
    });
    $('.star-attitude').raty({
        readOnly: true,
        half: true,
        score: 3.26,
        precision: true,
        hints: ['bad', 'poor', 'regular', 'good', 'gorgeous'],
        path: './img/stars',
        target: '.item-stats-attitude-name',
        targetKeep: true
    });


    // 编辑
    $('.js-edit-start').edit({
        hoverColor:'#dcf2fc',
        isDelete:true
    });

  

$('.profile-info-item').each(function(){
    $(this).hover(function(){
        $(this).find('.profile-info-item-mask').show();
    },function(){
        $(this).find('.profile-info-item-mask').hide();
    });
});




$('#profile-location').hover(function(){
     $(this).find('.location-text').css('background-color','#dcf2fc');
      $(this).find('.edit').css('background-color','#dcf2fc');
},function(){
        $(this).find('.location-text').css('background-color','transparent');
      $(this).find('.edit').css('background-color','transparent');
})


$('.profile-info--person-register .edit').on('click',function(){
    $('body').popover({
        selector:'.aaa'
    })
})

});