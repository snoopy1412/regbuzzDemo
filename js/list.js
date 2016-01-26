define(['bootstrap','raty','jRange','Vue','./data/countries.js','./data/languages.js'], function(bootstrap,raty,jRange,Vue) {

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
var fixedWidth = $('.list-aside-item-fixed .panel-body').width() -10;

  $('.list-fixed-providers .slider-input').jRange({
      from: 0,
      to: 100,
      step: 1,
      scale: [],
      format: '%s',
      width: fixedWidth,
      showLabels: false,
      isRange : true,
      ondragend : function(){
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
      isRange : true,
      ondragend : function(){

        $('.list-fixed-questions .budget-min').html($('.back-bar .low').eq(1).html());
        $('.list-fixed-questions .budget-max').html($('.back-bar .high').eq(1).html());
      }
  });
    $('.list-fixed-questions .slider-input').jRange('setValue', '20,140');


// 国家
var newCountries = getShow(countriesData,10);
var vm = new Vue({
  el:'#vue-countries',
  data:{
    countryMsg : '',
    countries :newCountries
  },
  methods : {
    selectCountry : function(){
      var text = this.countryMsg.trim();
      console.log(text);
      var reg = new RegExp("^"+text+"\S*",'gim');
     
      var that = this;
      // console.log(reg);
      if(text){
        for (var i = 0; i < this.countries.length; i++) {
          var todoText = this.countries[i].text.trim(); 
          console.log(todoText)
          if(reg.test(todoText)){
            console.log(todoText)
            this.countries[i].show = true;
          }else{
            this.countries[i].show = false;
          }
        };
      }else{
        this.countries = getShow(countries,10);
      }
      
    }
  }
})

function getShow(array,num){
  var newArray = array;
  for (var i = 0; i < newArray.length; i++) {
    newArray[i].show = false;
  };
  for (var i = 0; i < num; i++) {
    newArray[i].show = true;
  };

  return newArray;
}


// 语言
var data = {
  languages : languagesData
}
var vmLanguage = new Vue({
  el:"#vue-list-languages",
  data : data
})
});