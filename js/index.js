$(function(){
  $(window).on('scroll', function() {
    $('#header').toggleClass('fixed', $(this).scrollTop() > 10);
    });
});