require.config({
  paths: {
    // vendor区域
    jquery: './vendor/jquery-1.11.2.min', //经典
    velocity: './vendor/velocity.min',    //代替jquery动画的插件
    raty: './vendor/jquery.raty.min', // 星星评分
    bootstrap:'./vendor/bootstrap.min',  // bootstrap 插件

    // plugins 区域
    jRange:'../plugins/jRange/jquery.range-min', // 自定义滑竿
    wysiwyg:'../plugins/wysiwyg/wysiwyg', //第三方富文本编辑器

    // 自编写 components 区域
    popoverCustom: './components/popoverCustom', // 自制弹窗插件
    hoverMask: './components/hoverMask', // 首页遮罩
    revealOnScroll: './components/revealOnScroll',  // 滚动显示插件
    
    // MVVM框架
    Vue:'./vendor/vue', // MVVM框架
    VueStrap : './vendor/vue-strap.min', //类似bootstrap组件
    vueValidator: './vendor/vue-validator.min', //Vue 验证插件
    VueComponent : '../static/vue-component', // 自定义Vue 组件,
    VueGlobalFilter : './vue-globalfilter', //全局过滤器,
    VueMixins : './vue-mixins'
  },
  shim: {
    "bootstrap":{
      deps:["jquery"]
    },
    "velocity": {
      deps: ["jquery"]
    },
    "jRange": {
      deps: ["jquery"]
    },
    "raty": {
      deps: ["jquery"]
    },
    "popoverCustom": {
      deps: ["jquery"]
    },
    'wysiwyg':{
      deps:['jquery']
    },
    'VueComponent':{
      exports : 'VueComponent'
    }
  }
});

require(['jquery','Vue','bootstrap','index','header','dashboard', 'list', 'profile', 'publish', 'register','setting','help','project-list','top-up','wysiwyg-handle'], function($,Vue) {
 

  // 全局bootstrap 启用tootip
  $('[data-toggle="tooltip"]').tooltip();

});