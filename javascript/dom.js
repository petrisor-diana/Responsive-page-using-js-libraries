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

