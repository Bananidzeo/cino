
$(document).ready(function(){
  $('.carousele').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true, // Відображення крапок для навігації
    arrows: true, // Відображення стрілок
  });
});

var pathame = window.location.pathame;
if (!pathame.includes('404')){
  window.location.href = './404.html';
}
