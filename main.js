
/*===== MENU SHOW Y HIDDEN=====*/

const navMenu = document.getElementById('nav-menu'),
    toggleMenu = document.getElementById('nav-toggle')
closeMenu = document.getElementById('nav-close')



/*=====SHOW =====*/

toggleMenu.addEventListener('click', () => {
    navMenu.classList.toggle('show')
})



/*=====HIDDEN =====*/

closeMenu.addEventListener('click', () => {
    navMenu.classList.remove('show')
})



/*===== REMOVE MENU=====*/

const navLink = document.querySelectorAll('.nav_link')
function linkAction() {
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))



/*===== Showing Active Link =====*/
const navLinkEls = document.querySelectorAll('.nav_link');

navLinkEls.forEach(navLinkEl => {
    navLinkEl.addEventListener('click', () => {
        document.querySelector('.active')?.classList.remove('active');
    navLinkEl.classList.add('active');
});
});

