define(['dropdown','popover','revealOnScroll', 'hoverMask'],function( dropdown,popover,revealOnScroll, hoverMask){
  // 首页滚动监听元素添加渐入效果
  new revealOnScroll.RevealOnScroll();

  // 首页二级菜单的调用
  $('.js-dropdown-toggle').dropdown();
  $('.js-dropdown-hover').popover();


  // 首页八种分类的hover效果
  new hoverMask.HoverMask('.js-HoverMask-hover');
});