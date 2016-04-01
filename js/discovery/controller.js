define(['Vue', 'VueComponent','VueGlobalFilter', '../data/countries.js', '../data/languages.js', '../data/linkage.js'], function(Vue, VueComponent, VueGlobalFilter) {
  // 语言
  var vmLanguage = new Vue({
    el: "#vue-list-languages",
    data: {
      languagesData: [],
      isShowLanguages: false,
      toggleText: 'More',
      maxSize : 5
    },
    ready: function() {
      this.languagesData = languagesData;
    },
    computed: {
      toggleText: function() {
        return !this.isShowLanguages ? 'More' : 'Pack up';
      },
      maxSize : function(){
        return !this.isShowLanguages ? 5 : this.languagesData.length;
      }
    },
  });

  var select2 = VueComponent.select2;
  new Vue({
    el: '#vue-list',
    data: {
      originData: []
    },
    components: {
      select2: select2
    },
    created: function() {
      this.originData = countriesData;
    }
  });
})