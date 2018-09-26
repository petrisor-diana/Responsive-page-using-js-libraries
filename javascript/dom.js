// create a function for the burger menu which hides all content and displays the menu 
// by adding/removing an 'open-active' class on the menu and 'hide' class on the content

let animation = document.getElementById('drop-animation');
let burgerFirst = document.getElementById('burgerOne');
let burgerSecond = document.getElementById('burgerTwo');
let sectionHide = document.querySelectorAll('section');
let menuBtn = document.getElementById('btnOne');

burgerFirst.addEventListener('click', openMenu);
burgerSecond.addEventListener('click', openMenu);
menuBtn.addEventListener('click', closeMenu);

function openMenu() {
    sectionHide.forEach(el => el.classList.add('hide'));
    animation.classList.add('open-active');
}
function closeMenu() {
    sectionHide.forEach(el => el.classList.remove('hide'));
    animation.classList.remove('open-active');
}


// slider
$('.slider').slick({
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 1000,
    adaptiveHeight: true
});

// smooth scroll
var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1500,
    easing: 'easeInQuad'
});

// sticky menu
$('.menu').addClass('original').clone().insertAfter('.menu').addClass('cloned').css('position', 'fixed').css('top', '0').css('margin-top', '0').css('z-index', '500').removeClass('original').hide();
scrollIntervalID = setInterval(stickIt, 10);

function stickIt() {

    var orgElementPos = $('.original').offset();
    orgElementTop = orgElementPos.top;

    if ($(window).scrollTop() >= (orgElementTop)) {
        // scrolled past the original position; now only show the cloned, sticky element.
        // Cloned element should always have same left position and width as original element.     
        orgElement = $('.original');
        coordsOrgElement = orgElement.offset();
        leftOrgElement = coordsOrgElement.left;
        widthOrgElement = orgElement.css('width');
        $('.cloned').css('left', leftOrgElement + 'px').css('top', 0).css('width', widthOrgElement).show();
        $('.original').css('visibility', 'hidden');
    } else {
        // not scrolled past the menu; only show the original menu.
        $('.cloned').hide();
        $('.original').css('visibility', 'visible');
    }
}
