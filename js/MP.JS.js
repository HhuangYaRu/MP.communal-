/**
 * Created by yaru.huang on 2017/7/18.
 */
// form表单模拟select 内容替换

  $('.mp-select-group').click(function () {
    $('.dropDown').css('display','block')
  })

  $('.dropDown').on('click','li',function () {
    var inputval = $(this).html();
    $('.mp-select-group > input').val(inputval);
    console.log('隐藏');
    $('.dropDown').hide()
    console.log('走到这里');
  })
  //警告框
  function warner(msg) {
    $('.mp-warning>div').html(msg);
    $('.mp-warning').css('display','block');
    setTimeout(function () {
      $('.mp-warning').css('display','none');
    },1000)
  }

  function hintFrameing(msg) {
    $('.mp-hint>div>div:first-child').html(msg)
    $('.mp-hint').css('display','block');
  }
  $('.cancel').click(function () {
    $('.mp-hint').css('display','none');
  })
  $('#send').click(function (e) {
    e.preventDefault();
    console.log('就这样吧');
    $('#send').next().css('display','block');
  })
  $('#send').next().click('li',function () {
    $('#send').next().css('display','none');
  })
