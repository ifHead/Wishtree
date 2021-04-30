let printer_div = document.getElementById("printer");
let blocks = document.getElementsByClassName("block");
let range = 200;

for(let i=0; i<blocks.length; i++){
	let one_block = blocks[i];
	one_block.innerHTML = one_block.offsetTop;
}

function change_scroll(){
	printer_div.innerHTML = "scrollAmount : " + document.documentElement.scrollTop;
	let screen_center = document.documentElement.scrollTop + window.innerHeight/2;
	for(let i=0; i<blocks.length; i++){
		let one_block = blocks[i];
		if(one_block.offsetTop <= screen_center+range && one_block.offsetTop >= screen_center-range){
			one_block.classList.add("blue");
		}else{
			one_block.classList.remove("blue");
		}
	}
}