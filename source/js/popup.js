const popup = document.querySelector('.popup');
const btn = document.querySelector('.btn__js');
const closePopup = document.querySelector('.close');
const input = document.querySelector('.contact__input');
const overlay = document.querySelector('.overlay');

btn.addEventListener('click', function() {
    popup.classList.add('open');
    input.focus();
});

closePopup.addEventListener('click', () => {
    popup.classList.remove('open');
});

overlay.addEventListener('click', () => {
    popup.classList.remove('open');
});

window.addEventListener("keydown", function(e) {
    if (e.code === "Escape" && popup.classList.contains('open')) {
        popup.classList.remove('open');
        btn.focus();
    }
});