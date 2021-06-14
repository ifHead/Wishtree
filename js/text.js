var isTextExist = false;
var currentWishText = "";

function inputButton(){
	if(document.getElementById('wishtext').value == ""){
		alert('입력되지 않았어요!');
	} else {
		alert('소망을 걸었어요!');
		isTextExist = true;
		document.getElementById('wt_1').style.visibility = 'visible';
		document.getElementById('wt_2').style.visibility = 'visible';
		document.getElementById('wt_3').style.visibility = 'visible';
		document.getElementById('wt_4').style.visibility = 'visible';
		document.getElementById('B1_P').style.visibility = 'visible';
		currentWishText = document.getElementById('wishtext').value;
	}
}

