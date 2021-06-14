var isTextExist = false;
var currentWishText = "";

function inputButton(){
	if(document.getElementById('wishtext').value == ""){
		alert('입력되지 않았어요!');
	} else {
		alert('소망을 걸었어요!');
		isTextExist = true;
		document.getElementById('wt_1').style.visibility = 'hidden';
		currentWishText = document.getElementById('wishtext').value;
	}
}

