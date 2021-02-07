let backToTop = document.querySelector('.back_to_top')

window.addEventListener('scroll', checkScroll);
backToTop.addEventListener('click', goToTop)

function checkScroll(){
	let scrolled = window.pageYOffset;
	let downed = document.documentElement.clientHeight

	if (scrolled > downed) {
		backToTop.classList.add('back_to_top-show')
	}

	if (scrolled < downed) {
		backToTop.classList.remove('back_to_top-show')
	}

}

function goToTop(){
	if (window.pageYOffset > 0) {
		window.scrollBy(0, -80)
		setTimeout(goToTop, 0)
	}
}