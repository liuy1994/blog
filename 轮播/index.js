$('.container').on('click', '.controls li', function(e) {
  let $Li = jQuery(e.currentTarget);
  let index = $Li.index();
  go(index);
});

function go(index) {
  $('.container .controls > li').eq(index).addClass('active').siblings('.active').removeClass('active');
  let width = $('.container .window').width();
  $('.container .window  li').css({
    transform: 'translateX(' + (-width * index) + 'px)'
  });
  console.log(width);
  console.log(index);
}
let current = 0;
setInterval(function() {
  let nextIndex = current + 1;
  if (nextIndex === 4) {
    nextIndex = 0;
  }
  go(nextIndex);
  current = nextIndex;
}, 2000);