// setting dinamacally the (screen height - meniu height) as image height with JS

var imgHeight = document.querySelectorAll('.slider-img');
imgHeight.forEach(img => img.style.height = `${screen.height - 52}px`);

// create a function for the burger menu which hides all content and displays the menu 
// by adding/removing an 'open-active' class on the menu and 'hide' class on the content

var animation = document.getElementById('drop-animation');
var burgerFirst = document.getElementById('burgerOne');
var burgerSecond = document.getElementById('burgerTwo');
var sectionHide = document.querySelectorAll('section');
var menuBtn = document.getElementById('btnOne');

burgerFirst.addEventListener('click', onclick);
burgerSecond.addEventListener('click', onclick);
menuBtn.addEventListener('click', onBtnclick);

function onclick() {
    sectionHide.forEach(el => el.classList.add('hide'));
    animation.classList.add('open-active');
}

function onBtnclick() {
    sectionHide.forEach(el => el.classList.remove('hide'));
    animation.classList.remove('open-active');
}

