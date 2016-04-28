define(['raty'],function(){

	// 星星评级
    $('.work-reviews-score-container').raty({
        half: true,
        score: 'bad',
        precision: false, 
        hints: ['Poor!', 'Fair!', 'Average!', 'Good!', 'Excellent!'],
        path: './Public/img/stars',
        target: '.work-reviews-score',
        targetKeep: true,
    });
})