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
