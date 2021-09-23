//smooth scroll
$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top - 50
    }, 1500);
});
$(document).ready(function(){
    // hide #back-top first
    $("#go-top").hide();
    // fade in #back-top
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 200) {
                $('#go-top').fadeIn();
            } else {
                $('#go-top').fadeOut();    
            }
        });
        // scroll body to 0px on click
        $('a#go-top').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
    });
    //match-height
    $(function(){
      var window_width = $( window ).width();
      if (window_width > 768){
        var height=$('.responsive-h .card-text').height();
        $('.wordpress-h .card-text').height(height);
        $('.design-h .card-text').height(height);
        var spanHeight=$('.design-h span').height();
        $('.wordpress-h span').height(spanHeight);
        $('.responsive-h span').height(spanHeight);
        var titleHeight=$('.wordpress-h .card-title').height();
        $('.responsive-h .card-title').height(titleHeight);
        $('.design-h .card-title').height(titleHeight);
      }
    });
});
// skill bar
    var offsetTop = $('#skills').offset().top;
    $(window).scroll(function() {
        var height = $(window).height();
        if($(window).scrollTop()+height > offsetTop) {
            $('.progress-bar.html').css("animation","htmlfillbar 2s");
            $('.progress-bar.css').css("animation","cssfillbar 2s");
            $('.progress-bar.jquery').css("animation","jqueryfillbar 2s");
            $('.progress-bar.wp').css("animation","wpfillbar 2s");
            $('.progress-bar.ps').css("animation","psfillbar 2s");
            $('.progress-bar.js').css("animation","jsfillbar 2s");
        }
    });
// fixed top nav
document.addEventListener("DOMContentLoaded", function(){
    window.addEventListener('scroll', function() {
        if (window.scrollY > 400) {
            document.getElementById('navbar-top').classList.add('fixed-top');
            // add padding top to show content behind navbar
            navbar_height = document.querySelector('.navbar').offsetHeight;
            document.body.style.paddingTop = navbar_height + 'px';
        } else {
            document.getElementById('navbar-top').classList.remove('fixed-top');
            // remove padding top from body
             document.body.style.paddingTop = '0';
        } 
    });
}); 



