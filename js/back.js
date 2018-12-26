/*选项卡JS*/
$(document).ready(function () {
  $('.proCon:gt(0)').hide();
  var hdw = $('.pro-hd li');
  //hdw.hover(function() {
  //    $(this).addClass('current').siblings().removeClass('current');
  //});
  hdw.click(function () {
    $(this).addClass('cur').siblings().removeClass();
    var hdw_index = hdw.index(this);
    $('.proCon').eq(hdw.index(this)).show().siblings().hide();
  });
});
$(document).ready(function () {
  $('.anliCon:gt(0)').hide();
  var hdw = $('.anli-hd li');
  //hdw.hover(function() {
  //    $(this).addClass('current').siblings().removeClass('current');
  //});
  hdw.click(function () {
    $(this).addClass('cur').siblings().removeClass();
    var hdw_index = hdw.index(this);
    $('.anliCon').eq(hdw.index(this)).show().siblings().hide();
  });
});

/*轮播图*/
var swiper = new Swiper('.banner-swiper', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

var swiper = new Swiper('.hnews-swiper', {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
});

/*在线客服*/
function b() {
  //h = $(window).height();
  t = $(document).scrollTop();
  if (t > 200) {
    $('.btn_top').fadeIn('slow');
  } else {
    $('.btn_top').fadeOut('slow');
  }
}
$(document).ready(function (e) {
  b();
  $('.btn_top').click(function () {
    $('html,body').animate({
      'scrollTop': 0
    }, 1000); //滚回顶部的时间，越小滚的速度越快~
  })
});

$(window).scroll(function (e) {
  b();
});