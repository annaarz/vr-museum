let art_5_6 = document.querySelector('.art-5-6');
let arts = document.querySelector('.arts');
let btn = document.querySelector('.btn');
let button = document.querySelector('.button');
btn.addEventListener('click', () => {
    art_5_6.classList.add('opened');
    art_5_6.style.position = 'relative';
    btn.style.display = 'none';
})
