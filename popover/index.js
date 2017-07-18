$('.container').on('click',function(e){
  let $container = $(e.target);
  $container.children().removeClass('active')
})
$('.wrapper').on('click',function(e){
  let $wrapper = $(e.target);
  $wrapper.parent().toggleClass('active')
  $wrapper.parent().siblings().removeClass('active')
})

