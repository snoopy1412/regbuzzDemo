define(['raty','edit','layer'],function(raty,edit,layer) {

    // 星星评级
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

    layer.config({
        path: './plugins/layer/' //layer.js所在的目录，可以是绝对目录，也可以是相对目录
    });


    $('.js-profile-server-add').on('click', function(event) {
        event.preventDefault();
        layer.open({
            type: 1,
            title: 'Add your Service',
            area: '500px',
            shadeClose: true, //点击遮罩关闭
            content: $('#js-profile-server')
        });
    });
    $('.js-profile-skills-add').on('click', function(event) {
        event.preventDefault();
        layer.open({
            type: 1,
            title: 'Add your Service',
            area: '500px',
            shadeClose: true, //点击遮罩关闭
            content: $('#js-profile-skills')
        });
    });
    $('.js-profile-experience-add').on('click', function(event) {
        event.preventDefault();
        layer.open({
            type: 1,
            title: 'Add your Service',
            area: '500px',
            shadeClose: true, //点击遮罩关闭
            content: $('#js-profile-experience')
        });
    });
    $('.js-profile-educations-add').on('click', function(event) {
        event.preventDefault();
        layer.open({
            type: 1,
            title: 'Add your Service',
            area: '500px',
            shadeClose: true, //点击遮罩关闭
            content: $('#js-profile-educations')
        });
    });
    $('.js-profile-certificate-add').on('click', function(event) {
        event.preventDefault();
        layer.open({
            type: 1,
            title: 'Add your Service',
            area: '500px',
            shadeClose: true, //点击遮罩关闭
            content: $('#js-profile-certificate')
        });
    });

$('.profile-info-item').each(function(){
    $(this).hover(function(){
        $(this).find('.profile-info-item-mask').show();
    },function(){
        $(this).find('.profile-info-item-mask').hide();
    });
});

});