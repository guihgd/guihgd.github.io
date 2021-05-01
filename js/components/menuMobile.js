const menuOpener = document.querySelector('.menuOpener');
const spheres = document.querySelectorAll('.menuOpener .sphere');
const spheresQtd = spheres.length;
const menu = document.querySelector('.navigation');
const body = document.querySelector('body');

menuOpener.addEventListener('click', () => {
    if(menuOpener.classList.contains('-opened') == false) {
        menuOpener.classList.add('-opened');
        for(let i = 0; i < spheresQtd; i++) {
            spheres[i].classList.add('-opened');
        }
        menu.classList.add('-opened');
        body.style.overflow = 'hidden';
    } else {
        menuOpener.classList.remove('-opened');
        for(let i = 0; i < spheresQtd; i++) {
            spheres[i].classList.remove('-opened');
        }
        menu.classList.remove('-opened');
        body.style.overflow = 'visible';
    }
})