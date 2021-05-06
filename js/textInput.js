let btnGet = document.querySelector('#btn-get');
let btnSet = document.querySelector('#btn-set');
let inputGet = document.querySelector('#input-get');
let inputSet = document.querySelector('#input-set');
let result = document.querySelector('#result');

btnGet.addEventListener('click', () =>{
	result.innerText = inputGet.value;
})

btnSet.addEventListener('click', () =>{
	inputGet.value = inputSet.value;
})

document.documentElement.addEventListener('touchstart', function (event) {
	if (event.touches.length > 1) {
		event.preventDefault(); 
	} 
}, false);

var lastTouchEnd = 0; 

document.documentElement.addEventListener('touchend', function (event) {
	var now = (new Date()).getTime();
	if (now - lastTouchEnd <= 300) {
		event.preventDefault(); 
		} lastTouchEnd = now; 
}, false);