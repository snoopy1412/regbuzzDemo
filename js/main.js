require.config({
  paths: {
    jquery: './vendor/jquery-1.11.2.min',
    velocity: './vendor/velocity.min',
    jRange:'../plugins/jRange/jquery.range-min',
    raty: './vendor/jquery.raty.min',
    popoverCustom: './components/popoverCustom',
    edit: './components/edit',
    hoverMask: './components/hoverMask',
    revealOnScroll: './components/revealOnScroll',
    bootstrap:'./bootstrap.min',
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
    "popoverCustom": {
      deps: ["jquery"]
    },
    "edit": {
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

require(['jquery','bootstrap','index','header','dashboard', 'list', 'profile', 'publish', 'register', 'blog','setting','help','project-list','top-up','wysiwyg-handle'], function($) {

  $('[data-toggle="tooltip"]').tooltip();

});