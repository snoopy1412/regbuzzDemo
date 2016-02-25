define(['Vue','VueComponent','../data/countries.js', '../data/languages.js','../data/linkage.js'],function(Vue,VueComponent){
	
  var select2 = VueComponent.select2;
  new Vue({
    el:'#vue-list',
    data : {
        originData : [],
         languagesData: [],
  		 isShowLanguages: false,
  		 toggleText: 'More'
    },
    components : {
       select2 : select2
    },
    created : function(){
        this.originData = countriesData;
        this.languagesData = languagesData;
    },
    computed: {
      toggleText: function() {
        return !this.isShowLanguages ? 'More' : 'Pack up';
      }
    },
    methods: {
      toggleLanguageNum: function() {
        this.isShowLanguages = !this.isShowLanguages;
      }
    }
  });

})