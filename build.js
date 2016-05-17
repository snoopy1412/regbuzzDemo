({
  appDir: './', //项目根目录
  dir: './vajoy', //输出目录，全部文件打包后要放入的文件夹（如果没有会自动新建的）

  baseUrl: './Public/js', //相对于appDir，代表要查找js文件的起始文件夹，下文所有文件路径的定义都是基于这个baseUrl的
  mainConfigFile: './Public/js/require-config.js',
  modules: [ //要优化的模块
    //First set up the common build layer.
    {
      //module names are relative to baseUrl
      name: '../js/require-config',
      include:['jquery','bootstrap','Vue']
    }, {
      name: './page/account',
      include: ['./page/account/main'],
      exclude: ['../js/require-config']
    }, {
      name: './page/connection',
      include: ['./page/connection/main'],
      exclude: ['../js/require-config']
    }, {
      name: './page/dashboard',
      include: ['./page/dashboard/main'],
      exclude: ['../js/require-config']
    }, {
      name: './page/discovery',
      include: ['./page/discovery/main'],
      exclude: ['../js/require-config']
    }, {
      name: './page/help',
      include: ['./page/help/main'],
      exclude: ['../js/require-config']
    }, {
      name: './page/index',
      include: ['./page/index/main'],
      exclude: ['../js/require-config']
    }, {
      name: './page/membership',
      include: ['./page/membership/main'],
      exclude: ['../js/require-config']
    }, {
      name: './page/message',
      include: ['./page/message/main'],
      exclude: ['../js/require-config']
    }, {
      name: './page/order',
      include: ['./page/order/main'],
      exclude: ['../js/require-config']
    }, {
      name: './page/profile',
      include: ['./page/profile/main'],
      exclude: ['../js/require-config']
    }, {
      name: './page/project',
      include: ['./page/project/main'],
      exclude: ['../js/require-config']
    }, {
      name: './page/publish',
      include: ['./page/publish/main'],
      exclude: ['../js/require-config']
    }, {
      name: './page/register',
      include: ['./page/register/main'],
      exclude: ['../js/require-config']
    }, {
      name: './page/setting',
      include: ['./page/setting/main'],
      exclude: ['../js/require-config']
    }, {
      name: './page/top-up',
      include: ['./page/top-up/main'],
      exclude: ['../js/require-config']
    } //说白了就是各页面的入口文件，相对baseUrl的路径，也是省略后缀“.js”
  ],

  fileExclusionRegExp: /^node_modules|^(r|build)\.js|.*\.scss$/, //过滤，匹配到的文件将不会被输出到输出目录去

  optimizeCss: 'standard',

  removeCombined: false, //如果为true，将从输出目录中删除已合并的文件
})