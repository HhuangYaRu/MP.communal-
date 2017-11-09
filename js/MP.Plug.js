

// 添加meta标签
;(function ($) {
  var $head = $('head');
  var meta = '<meta name="apple-mobile-web-app-bar-style" content="black">'+
    '<meta name="msapplicationt-tap-highlight" content="no">'+
    '<meta name="format-detection" content="telephone=no,email=no,address=no,date=no">'+
    '<meta name="screen-orientation" content="portrait">'+
    '<meta name="x5-orientation" content="portrait">'+
    '<meta name="renderer" content="webkit">';
  $head.prepend(meta);
}(window.jQuery));


// 自适应rem计算
(function(doc, win) {
  var $html = $('html');
  resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
    recalc = function() {
      var clientWidth = $(window).width();
      console.log(clientWidth);
      if (clientWidth > 414 && clientWidth < 768) {
        clientWidth = 414;
      }else if(clientWidth >= 768){
        clientWidth = 640;
      }
      if (!clientWidth) return;
      var remBase = clientWidth / 16;
      var fontSize = remBase;
      while(true){
        var actualSize = parseInt( $html.css('font-size') );
        $html.attr('style', 'font-size:' + fontSize + 'px');
        if (actualSize > remBase && fontSize > 10) {
          fontSize--;
          $html.attr('style', 'font-size:' + fontSize + 'px!important');
        } else {
          break;
        }
      }

    };

  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);



//自定义封装tap 轻击事件
(function ($) {
  //自定义tap
  //记录触摸开始时间，触摸结束的时间如果大于250ms 则为长按。
  var touchTime = 250,
      touchStartNow;
  $(document).on("touchstart", function(e) {
    var $target = $(e.target);
    touchStartNow = new Date();
    if(!$target.hasClass("disable")) $target.data("isMoved", 0);
  });
  $(document).on("touchmove", function(e) {
    var $target = $(e.target);
    if(!$target.hasClass("disable")) $target.data("isMoved", 1);
  });
  $(document).on("touchend", function(e) {
    var $target = $(e.target);
    if(!$target.hasClass("disable") && $target.data("isMoved") === 0 && Date.now() - touchStartNow <= touchTime){
      $target.trigger("tap");
    }
  });
//tap 的用法，如果 、元素为嵌套，并且都存在点击事件，则必须要组织事件冒泡
// 例如以下例子
// $(".ele").on("tap", function(e) {
//   e.stopPropagation();
//   alert("ele");
// });
}(window.jQuery));
