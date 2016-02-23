define(['bootstrap', 'raty', 'jRange', 'Vue', './data/countries.js', './data/languages.js'], function(bootstrap, raty, jRange, Vue) {

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

  $('.list-fixed-providers .slider-input').jRange({
    from: 0,
    to: 100,
    step: 1,
    scale: [],
    format: '%s',
    width: fixedWidth,
    showLabels: false,
    isRange: true,
    ondragend: function() {
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
  })



  // select2
  new Vue({
    el: "#select2",
    data: {
      select2IsHide: true,
      select2SearchText: '',
      originData: [],
      select2SearchResult: [],
      select2List: [],
      checkedNames: [],
      arr : [
        {
           text : '1'
        }
      ],
    },
    created: function() {
      this.originData = countriesData;

    },

    ready: function() {
      var self = this;

      $(window).on('click', function(event) {
        event.stopPropagation();
        if (!self.select2IsHide) {
          self.select2IsHide = true;
        }
      });

      this.arr[0].show = false;
    },
    computed: {
      select2SearchResult: function() {
        var self = this,
            newArr = [],
            text = this.select2SearchText.trim().toLowerCase();

          this.originData.forEach(function(element, index) {

          if(!element.show){
            if (text) {
              var str = element['text'].toLowerCase();
              if (str.indexOf(text) !== -1) {
                newArr.push(element);
              }
            } else {
              newArr.push(element)
            }
          }
        });

        console.log(this.arr[0].show );
        return newArr;
      }
    },
    methods: {
      Add2Select2List: function(str) {
        var self = this,
            newArr = [];

        this.originData.forEach(function(element, index) {
          newArr.push(element.text);
        });

        var isIndex = $.inArray(str, newArr);

        if (isIndex !== -1) {
          this.checkedNames.push(self.originData[isIndex].text);
          this.select2List.push({
            text: self.originData[isIndex].text,
            short: self.originData[isIndex].short,
            index: isIndex
          });

          this.originData[isIndex].show = true;
          
        }
        
        this.select2SearchText = '';

      },
      remove2SelectList: function(index) {
        var originIndex = this.select2List[index].index;
         this.originData[originIndex].show = false;
         this.select2List.splice(index, 1);

      }
    },
    filters: {
      highlight(value, phrase) {
        return value.replace(new RegExp('('+phrase+')', 'gi'), '<strong>$1</strong>')
      }
    }
  })
});