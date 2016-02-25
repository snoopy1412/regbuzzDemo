define([ 'raty', 'jRange','./js/list-controller.js'], function(raty, jRange) {

  // 星星评级  
  $('.list-grade-choose').each(function() {
    $(this).raty({
      readOnly: false,
      half: true,
      score: 0,
      precision: true,
      hints: ['bad', 'poor', 'regular', 'good', 'gorgeous'],
      path: './img/stars'
    });
  });

  // slider 
  var fixedWidth = $('.list-aside-item-fixed .panel-body').width() - 10;

  $('.list-fixed-projects .slider-input').jRange({
    from: 20,
    to: 400000,
    step: 20,
    scale: [],
    format: '%s',
    theme: 'theme-blue',
    width: fixedWidth,
    showLabels: false,
    isRange: true,
    onstatechange: function() {
      $('.list-fixed-projects .budget-min').html($('.back-bar .low').eq(1).html());
      $('.list-fixed-projects .budget-max').html($('.back-bar .high').eq(1).html());
    }
  });

  $('.list-fixed-projects .slider-input').jRange('setValue', '20,400000');


  $('.list-fixed-providers .slider-input').jRange({
    from: 20,
    to: 100,
    step: 1,
    scale: [],
    format: '%s',
    theme: 'theme-blue',
    width: fixedWidth,
    showLabels: false,
    isRange: true,
    onstatechange: function(){
      $('.list-fixed-providers .budget-min').html($('.back-bar .low').eq(1).html());
      $('.list-fixed-providers .budget-max').html($('.back-bar .high').eq(1).html());
    }
  });


  $('.list-fixed-projects .slider-input').jRange('setValue', '20,100');


  $('.list-fixed-questions .slider-input').jRange({
    from: 20,
    to: 140,
    step: 1,
    scale: [],
    format: '%s',
    theme: 'theme-blue',
    width: fixedWidth,
    showLabels: false,
    isRange: true,
    onstatechange: function() {
      $('.list-fixed-questions .budget-min').html($('.back-bar .low').eq(1).html());
      $('.list-fixed-questions .budget-max').html($('.back-bar .high').eq(1).html());
    }
  });

  $('.list-fixed-questions .slider-input').jRange('setValue', '20,140');

});