var add = document.querySelectorAll('.add');

for(i=0; i<add.length; i++){
	add[i].addEventListener('click', accord)			
}
		
function accord(e) {
	var show = document.querySelectorAll('.show');

	for( i = 0 ; i<show.length; i++){
		if(e.target.id === show[i].id ){
			add[i].classList.toggle('add_active');				
			show[i].classList.toggle('show_active');				
		}
}
}
