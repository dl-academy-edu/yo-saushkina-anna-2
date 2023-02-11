const popup = document.querySelector('.popup');
const btn = document.querySelector('.btn__js');
const closePopup = document.querySelector('.popup__close');
const input = document.querySelector('.modal-window__input');
const overlay = document.querySelector('.popup__overlay');

const btnOff = document.querySelector('.btn__js');
const btnOn = document.querySelector('.popup');


btn.addEventListener('click', function() {
    popup.classList.add('popup__open');
    input.focus();
});

closePopup.addEventListener('click', () => {
    popup.classList.remove('popup__open'); 
});

overlay.addEventListener('click', () => {
    popup.classList.remove('popup__open');
});

window.addEventListener("keydown", function(e) {
    if (e.code === "Escape" && popup.classList.contains('popup__open')) {
        popup.classList.remove('popup__open');
        btn.focus();
    }
});




let disableScroll = function () {
	let pagePosition = window.scrollY;
	document.body.classList.add('disable-scroll');
	document.body.dataset.position = pagePosition;

}

let enableScroll = function () {
	let pagePosition = parseInt(document.body.dataset.position, 10);
	document.body.style.top = 'auto';
	document.body.classList.remove('disable-scroll');
	window.scroll({ top: pagePosition, left: 0 });
}

btnOff.addEventListener('click', (e) => {
	disableScroll();
	e.currentTarget.style.pointerEvents = 'none';
	btnOn.style.pointerEvents = 'auto';

});

btnOn.addEventListener('click', (e) => {
	enableScroll();
	e.currentTarget.style.pointerEvents = 'none';
	btnOff.style.pointerEvents = 'auto';
});


	