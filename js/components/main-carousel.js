const buttonLeft = document.querySelector('.main-carousel .button-arrow.-left');
const buttonRight = document.querySelector('.main-carousel .button-arrow.-right');
const carousel = document.querySelector('.main-carousel .container-wrapper .elements');
let movePixels = 0;

console.log(movePixels);

buttonLeft.addEventListener('click', () => {
    if(movePixels == 0) {
        console.log('Nada acontece feijoada.');
    } else {
        movePixels = movePixels + 181.5;
        carousel.style = `transform: translateX(${movePixels}px)`;
    }
});

buttonRight.addEventListener('click', () => {
    if(movePixels == -363) {
        console.log('Nada acontece feijoada.');
    } else {
        movePixels = movePixels - 181.5;
        carousel.style = `transform: translateX(${movePixels}px)`;
    }
})