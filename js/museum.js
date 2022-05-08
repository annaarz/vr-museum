const expand = document.querySelector('.expand');
const nextImg = document.querySelector('.next-img');


const vrExcursImg = document.querySelector('.vr-excurs');
const vrExcurs = document.querySelector('.vr-excursion');

const vrWalk = document.querySelector('.vr-walk');

vrExcursImg.addEventListener('click', (event) => {
    vrExcursImg.classList.add('active');
    vrWalk.classList.add('active')
});

expand.addEventListener('click', (event) => {
    nextImg.classList.add('active');
    expand.classList.add('none')
});