var modal = document.getElementById('id01');

var header__button = document.querySelector('.header__button')
header__button.addEventListener('click', openModal)

var close = document.querySelector('.close')
close.addEventListener('click', closeModal)

var cancel = document.querySelector('.cancel')
cancel.addEventListener('click', closeModal)

function openModal(){
	modal.style.display = "block";	
}

function closeModal(){
	modal.style.display = "none";	
}

