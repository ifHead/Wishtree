var isTextExist = false;
var currentWishText = "";
var isHang = false;
var isBlankInput = false;

function inputButton(){
	if(document.getElementById('wishtext').value == ""){
		isBlankInput = true;
	} else {
		isTextExist = true;
		isHang = true;
		document.getElementById('wt_1').style.visibility = 'visible';
		document.getElementById('wt_2').style.visibility = 'visible';
		document.getElementById('wt_3').style.visibility = 'visible';
		document.getElementById('wt_4').style.visibility = 'visible';
		document.getElementById('B1_P').style.visibility = 'visible';
		currentWishText = document.getElementById('wishtext').value;
	}
}

