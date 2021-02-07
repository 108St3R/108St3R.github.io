// Making Inherit 


let header = document.querySelector('.header_wrapper')
let wrapper = document.querySelector('.wrapper')

window.addEventListener('scroll', makeInherit);

function makeInherit() {
	let static = window.scrollY;
	let downed = document.documentElement.clientHeight

	if (static > 0) {
		header.classList.add('header_wrapper-show')
		// header.classList.add('wrapper:after')
	}
	else{
		wrapper:before.style.backgroundColor = 'transparent'
		header.classList.remove('header_wrapper-show')


	}
}

// Dropdown to onclick


var navbar__dropbtn = document.querySelectorAll('.navbar__dropbtn')

for(let i =0; i < navbar__dropbtn.length; i++){
	navbar__dropbtn[i].addEventListener('click', dropdown)
}

function dropdown(e){
	
	let navbar__dropcontent = document.querySelectorAll('.navbar__dropcontent')
		
	for( let i = 0; i< navbar__dropcontent.length; i++){

		if(e.target.id == navbar__dropcontent[i].id ){
			navbar__dropcontent[i].classList.toggle('open')			
		}
	}

}

(function (){
	const burger = document.querySelector('.burger');
	const navbar = document.querySelector('.navbar');
	burger.addEventListener('click', () =>{
		burger.classList.toggle('burger_active');
		navbar.classList.toggle('navbar_active');
	});
}());

