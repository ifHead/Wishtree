var isTextExist = false;
var currentWishText = "";
var isHang = false;

function setter_isHang(val){
	isHang = val;
}

function inputButton(){
	if(document.getElementById('wishtext').value == ""){
		alert('입력되지 않았어요!');
	} else {
		isTextExist = true;
		isHang = true;
		console.log(isHang)
		document.getElementById('wt_1').style.visibility = 'visible';
		document.getElementById('wt_2').style.visibility = 'visible';
		document.getElementById('wt_3').style.visibility = 'visible';
		document.getElementById('wt_4').style.visibility = 'visible';
		document.getElementById('B1_P').style.visibility = 'visible';
		currentWishText = document.getElementById('wishtext').value;
	}
}

