define(['jquery', 'Vue', 'VueComponent', 'VueGlobalFilter'], function($, Vue, VueComponent, VueGlobalFilter) {

  var select2 = VueComponent.select2;
  new Vue({
    el: '#vue-list',
    data: {
      CountriesDataUrl: '../../../Public/data/discovery/countries.json', //select2 需要的数据
      hiddenName : 'choiceCountriesIds',

      // language的数据
      languagesData: [],
      isShowLanguages: false,
      toggleText: 'More',
      maxSize: 5,
      checkedLanguages: []
    },
    components: {
      select2: select2
    },
    ready: function() {
      var self = this;
      $.ajax({
        type: 'GET',
        url: '../../../Public/data/discovery/languages.json',
        success: function(data) {

          var data = data.data;
          self.languagesData = data;
          console.log(self.data)
        },
        error: function(state) {
          console.log('数据加载失败', state);
        }
      })
    },
    computed: {
      toggleText: function() {
        return !this.isShowLanguages ? 'More' : 'Pack up';
      },
      maxSize: function() {
        return !this.isShowLanguages ? 5 : this.languagesData.length;
      }
    },
    methods: {
      ajaxLanguage: function() { // ajax回调的预留方案
        // 如果是用ajax的方式回调数据的话
        // 每次点击的时候，可以上传checkedLanguages 的值，
        // 说白了就是获得了一个已选定的语言的列表。
        // 那么就可以根据已选定的语言列表，
        // 进行右侧数据的筛选
        // var self = this,
        //   submitData = this.checkedLanguages;
        // $.ajax({
        //   type: 'get',
        //   data: submitData,
        //   success: function() {
        //     console.log('右侧数据变化')
        //   }
        // })

      }
    }
  });
})