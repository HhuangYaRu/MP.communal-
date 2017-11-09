/**
 * Created by yaru.huang on 2017/7/27.
 */
var toastModal = $('.toastModal');
if(toastModal.length === 0){
  var html;
  html = "<div class='toastModal'>"+
  "<div class='toast'>"+
    "<span>这是提示的内容!!</span>"+
  "</div>"+
"</div>";
  $('body').prepend(html);
  $('.toastModal').css({
    'display':'none',
    'position': 'fixed',
    'top': 0,
    'left': 0,
    'right': 0,
    'bottom': 0,
    'width': '100%',
    'height': '100%',
    'background': 'rgba(0,0,0,0)',
    'zIndex': 50
  })
  $('.toast').css({
    'position': 'absolute',
    'top': '40%',
    'left': '50%',
    'transform': 'translate(-50%)',
    'width': '180px',
    'height': 'auto',
    'background': 'rgba(0,0,0,.8)',
    'border-radius': '5px',
    'textAlign': '-webkit-center',
    'padding': '10px 20px',
    'fontSize': '16px',
    'color': '#fff'
  })
}
function showToast(msg) {
  $('.toastModal').show();
  console.log('大咖纷纷很那看法');
  $('.toastModal').on('touchend',function (e) {
    e.preventDefault();
    $('.toastModal').hide();
  })
  $('.toast span').html(msg);
  // setTimeout(function () {
  //   $('.toastModal').css('display','none');
  // },15000);

}