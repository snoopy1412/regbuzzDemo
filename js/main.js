require.config({
  paths: {
    jquery: './vendor/jquery-1.11.2.min',
    velocity: './vendor/velocity.min',
    jRange:'../plugins/jRange/jquery.range-min',
    validate: './vendor/jquery.validate.min',
    raty: './vendor/jquery.raty.min',
    layer: '../plugins/layer/layer',
    popover: './components/popover',
    edit: './components/edit',
    hoverMask: './components/hoverMask',
    revealOnScroll: './components/revealOnScroll',
    responsiveNav: './components/responsiveNav',
    dropdown: './components/dropdown',
    bootstrap:'./vendor/bootstrap',
    Vue:'./vendor/vue',
    vueValidator:'./vendor/vue-validator.min',
    wysiwyg:'../plugins/wysiwyg/wysiwyg'
  },
  shim: {
    "velocity": {
      deps: ["jquery"]
    },
    "jRange": {
      deps: ["jquery"]
    },
    "raty": {
      deps: ["jquery"]
    },
    "validate": {
      deps: ["jquery"]
    },
    "popover": {
      deps: ["jquery"]
    },
    "edit": {
      deps: ["jquery"]
    },
    "dropdown": {
      deps: ["jquery"]
    },
    'Vue':{
      exports:'Vue'
    },
    'vueValidator':{
      deps:["Vue"],
      exports:'vueValidator'
    },
    'wysiwyg':{
      deps:['jquery']
    }
  }
});

require(['jquery','bootstrap','index', 'dashboard', 'list', 'profile', 'publish', 'register', 'blog','setting','help','project-list','top-up','wysiwyg-handle'], function($) {
  layer.config({
    path: './plugins/layer/' //layer.js所在的目录，可以是绝对目录，也可以是相对目录
  });

  $('[data-toggle="tooltip"]').tooltip();

});