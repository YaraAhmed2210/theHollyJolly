$(function(){
'use strict';
//Adjust slider height
var windowHeight     =$(window).height(),
    upperBar_height  =$('.upper-bar').innerHeight(),
    navBar_height    =$('.navbar').innerHeight();
    $('.slider, .carousel-inner, .carousel-item').height(windowHeight - (upperBar_height + navBar_height)  );

//imgs-shuffle
$('.extra-buttons ul li').on('click',function(){
  $(this).addClass('active').siblings().removeClass('active');
  
  if($(this).data('class')==='all'){
    $('.shuffle-images .item').css('opacity', 1);
}else{
      $('.shuffle-images .item').css('opacity', '.08');
      $($(this).data('class')).parent().css('opacity', 1);
}
  
});




});

