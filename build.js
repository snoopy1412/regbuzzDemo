({
  appDir: './', //项目根目录
  dir: './vajoy', //输出目录，全部文件打包后要放入的文件夹（如果没有会自动新建的）

  baseUrl: './Public/js', //相对于appDir，代表要查找js文件的起始文件夹，下文所有文件路径的定义都是基于这个baseUrl的
  mainConfigFile: './Public/js/require-config.js',
  modules: [ //要优化的模块
    {
      name: './page/account/main'
    }, {
      name: './page/connection/main'
    }, {
      name: './page/dashboard/main'
    }, {
      name: './page/discovery/main'
    }, {
      name: './page/header/main'
    }, {
      name: './page/help/main'
    }, {
      name: './page/index/main'
    }, {
      name: './page/membership/main'
    }, {
      name: './page/message/main'
    }, {
      name: './page/order/main'
    }, {
      name: './page/profile/main'
    }, {
      name: './page/project/main'
    }, {
      name: './page/register/main'
    }, {
      name: './page/setting/main'
    }, {
      name: './page/top-up/main'
    } //说白了就是各页面的入口文件，相对baseUrl的路径，也是省略后缀“.js”
  ],

  fileExclusionRegExp: /^node_modules|^(r|build)\.js|.*\.scss$/, //过滤，匹配到的文件将不会被输出到输出目录去

  optimizeCss: 'standard',

  removeCombined: false, //如果为true，将从输出目录中删除已合并的文件
})