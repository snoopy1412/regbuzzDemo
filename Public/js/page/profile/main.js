require(['raty','./page/profile/crop','./page/profile/controller'],function(raty){

   // 星星评级
    $('.totalScore').raty({
        readOnly: true,
        half: true,
        score: 4.3,
        precision: true,
        hints: ['bad', 'poor', 'regular', 'good', 'gorgeous'],
        path: './Public/img/stars',
        target: '.item-stats-totalScore-name',
        targetKeep: true
    });
    $('.star-quality').raty({
        readOnly: true,
        half: true,
        score: 0.76,
        precision: true,
        hints: ['bad', 'poor', 'regular', 'good', 'gorgeous'],
        path: './Public/img/stars',
        target: '.item-stats-quality-name',
        targetKeep: true
    });
    $('.star-speed').raty({
        readOnly: true,
        half: true,
        score: 3.6,
        precision: true,
        hints: ['bad', 'poor', 'regular', 'good', 'gorgeous'],
        path: './Public/img/stars',
        target: '.item-stats-speed-name',
        targetKeep: true
    });
    $('.star-attitude').raty({
        readOnly: true,
        half: true,
        score: 3.26,
        precision: true,
        hints: ['bad', 'poor', 'regular', 'good', 'gorgeous'],
        path: './Public/img/stars',
        target: '.item-stats-attitude-name',
        targetKeep: true
    });



// 头部编辑区域hover高亮处理
$('.edit-start').hover(function(){
     $(this).find('.edit-text').css('background-color','#dcf2fc');
     $(this).find('.edit-handle').css('background-color','#dcf2fc');
},function(){
     $(this).find('.edit-text').css('background-color','transparent');
     $(this).find('.edit-handle').css('background-color','transparent');
})



// 头部头像区域hover出现
$('.profile-avatar').hover(function(){
    $('.profile-avatar-upload').show();
},function(){
    $('.profile-avatar-upload').hide();
});

// 内容区域hover显示编辑按钮? 
// 移动端没有hover事件
$('.profile-info-item').hover(function(){
    $(this).find('.handle').show();
},function(){
    $(this).find('.handle').hide();
});
});