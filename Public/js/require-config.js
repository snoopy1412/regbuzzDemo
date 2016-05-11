require.config({
  baseUrl: './Public/js',
  paths: {
    // vendor区域
    jquery: './vendor/jquery-1.11.2.min', //经典
    velocity: './vendor/velocity.min', //代替jquery动画的插件
    raty: './vendor/jquery.raty.min', // 星星评分
    bootstrap: './vendor/bootstrap.min', // bootstrap 插件

    // plugins 区域
    jRange: '../plugins/jRange/jquery.range-min', // 自定义滑竿
    summernote: '../plugins/summernote/summernote.min', //第三方富文本编辑器
    WebUploader: '../plugins/webuploader/webuploader', //第三方上传插件
    moment: '../plugins/datetimepicker/moment.min', // 时间选择依赖
    datetimepicker: '../plugins/datetimepicker/bootstrap-datetimepicker', //时间选择插件
    jcrop: '../plugins/jcrop/jquery.Jcrop.min', //裁剪插件
    bootstrapTable: '../plugins/bootstraptable/bootstrap-table.min', //table排序插件
    layer: '../plugins/layer/layer',

    // 自编写 components 区域
    popoverCustom: './components/popoverCustom', // 自制弹窗插件
    hoverMask: './components/hoverMask', // 首页遮罩
    revealOnScroll: './components/revealOnScroll', // 滚动显示插件
    check: './components/check', //checkbox复选框全选
    ellipsis: './components/ellipsis',
    popupConfirm: './components/popupConfirm',
    message: './components/message',

    // 常用工具
    tools: './utilities/tools',
    emoji:'./utilities/emoji',

    // MVVM框架
    Vue: './vendor/vue', // MVVM框架
    VueStrap: './vendor/vue-strap.min', //类似bootstrap组件
    vueValidator: './vendor/vue-validator.min', //Vue 验证插件,
    VueComponent: '../static/vue-component', // 自定义Vue 组件,
    VueGlobalFilter: './vue-globalfilter', //全局过滤器,

    // layerInit
    layerInit: './layerInit',

    // page
    library: 'page/project/project-action/library',
  },
  // waitSeconds: 0,
  shim: {
    "bootstrap": {
      deps: ["jquery"]
    },
    'layer': {
      deps: ['jquery']
    },
    "bootstrapTable": {
      deps: ['jquery']
    },
    "check": {
      deps: ['jquery']
    },
    "ellipsis": {
      deps: ['jquery']
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
    'popupConfirm': {
      deps: ["jquery", 'layer']
    },
    'message': {
      deps: ['jquery']
    },
    'wysiwyg': {
      deps: ['jquery']
    },
    'VueComponent': {
      exports: 'VueComponent'
    }
  }
});

require(['./page/header/main']);
// require(['./layerInit']);