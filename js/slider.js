let slider = document.getElementById('slider_wrapper')
let slide = 0

var x = window.matchMedia("(max-width: 767px)")
var y = window.matchMedia("(max-width: 560px)")
var z = window.matchMedia("(min-width: 561px)")

function move_slider(e){
	if (e === undefined & x.matches === false & y.matches === false) {
		slide += -600
	}

	else if(e === undefined & x.matches === true & y.matches === false){
		slide += -400	
	}

	else if(e === undefined & z.matches === false & y.matches === true){
		slide += -280
	}

	else if(x.matches === false & y.matches === false ){
		console.log("0")
		slide += e.target.getAttribute('data-slide1')*1
	}

	else if(x.matches === true & y.matches === false ){
		console.log("1")
		slide += e.target.getAttribute('data-slide2')*1
	}

	else if(z.matches === false & y.matches === true ){
		console.log("2")
		slide += e.target.getAttribute('data-slide3')*1
	}

	if ( slide > 0 ) slide = (slider.scrollWidth - slider.firstElementChild.scrollWidth)*-1
	console.log((slider.scrollWidth - slider.firstElementChild.scrollWidth)*-1)
	if (slide < (slider.scrollWidth - slider.firstElementChild.scrollWidth)*-1) slide = 0
	
	slider.style.left = slide + 'px'

	clearTimeout(timeout)
	timeout = setTimeout(move_slider,2500)
}

var timeout = setTimeout(move_slider,2500)