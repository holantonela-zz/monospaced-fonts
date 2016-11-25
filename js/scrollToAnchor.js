$(function() {
  //Call onScroll function 
  $(document).on("scroll", onScroll);

  //On sidebar item click
  $('.js-nav-item').click(function() {
    var el = $(this).attr('el-id'),
        target = $(el);
    //Remove current class from all
    $('.js-nav-item').removeClass('nav__item--current');
    //Add current on this curent cliced
    $(this).addClass('nav__item--current');
    //Scroll to element
    $('html, body').animate({
        scrollTop: target.offset().top
    }, 2000, 'easeInOutExpo');
  });
});

function onScroll(event){
  var scrollPos = $(document).scrollTop();

  $('.js-nav-item').each(function () {
    var currLink = $(this),
        refElement = $(currLink.attr('el-id'));
    if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
        $('.js-nav-item').removeClass('nav__item--current');
        currLink.addClass('nav__item--current');
    }
    // Fix for latest item active class
   if($(window).scrollTop() + $(window).height() == $(document).height()) {
    $('.js-nav-item').removeClass('nav__item--current');
    $('.js-nav-item').last().addClass('nav__item--current');
   }
  });
}