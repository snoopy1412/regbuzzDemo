define(['bootstrap', 'raty', 'jRange', 'Vue','VueComponent','./data/countries.js', './data/languages.js'], function(bootstrap, raty, jRange, Vue,VueComponent) {

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
    step: 1,
    scale: [],
    format: '%s',
    width: fixedWidth,
    showLabels: false,
    isRange: true,
    ondragend: function() {
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
    width: fixedWidth,
    showLabels: false,
    isRange: true,
    ondragend: function(){
      $('.list-fixed-providers .budget-min').html($('.back-bar .low').eq(1).html());
      $('.list-fixed-providers .budget-max').html($('.back-bar .high').eq(1).html());
    }
  });


  $('.list-fixed-questions .slider-input').jRange({
    from: 20,
    to: 140,
    step: 1,
    scale: [],
    format: '%s',
    width: fixedWidth,
    showLabels: false,
    isRange: true,
    ondragend: function() {
      $('.list-fixed-questions .budget-min').html($('.back-bar .low').eq(1).html());
      $('.list-fixed-questions .budget-max').html($('.back-bar .high').eq(1).html());
    }
  });

  $('.list-fixed-questions .slider-input').jRange('setValue', '20,140');



  // 语言
  var vmLanguage = new Vue({
    el: "#vue-list-languages",
    data: {
      languagesData: [],
      isShowLanguages: false,
      toggleText: 'More'
    },
    ready: function() {
      this.languagesData = languagesData;
    },
    computed: {
      toggleText: function() {
        return !this.isShowLanguages ? 'More' : 'Pack up';
      },
      isDown: function() {
        return !this.isShowLanguages ? true : false;
      },
      isUp: function() {
        return !this.isShowLanguages ? false : true;
      }
    },
    methods: {
      toggleLanguageNum: function() {
        this.isShowLanguages = !this.isShowLanguages;
      }
    }
  });

  var select2 = VueComponent.select2;
  new Vue({
    el:'#vue-list',
    data : {
        originData : []
    },
    components : {
       select2 : select2
    },
    created : function(){
        this.originData = countriesData;
    }
  });

});