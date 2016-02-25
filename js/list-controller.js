define(['Vue','VueComponent','../data/countries.js', '../data/languages.js','../data/linkage.js'],function(Vue,VueComponent){


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
       select2 : select2,
       linkage : linkage
    },
    created : function(){
        this.originData = countriesData;
    }
  });

})