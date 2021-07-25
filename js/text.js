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
		$("#wishtext_copied").val(document.getElementById('wishtext').value);
		document.getElementById('wt_0').style.visibility = 'visible';
		document.getElementById('wt_1').style.visibility = 'visible';
		document.getElementById('wt_2').style.visibility = 'visible';
		document.getElementById('wt_3').style.visibility = 'visible';
		document.getElementById('wt_4').style.visibility = 'visible';
		document.getElementById('B1_P').style.visibility = 'visible';
		let guideClass = document.getElementsByClassName('wt_scroll_guide');
		for(let i = 0; i < guideClass.length; i++){
			document.getElementsByClassName('wt_scroll_guide')[i].style.visibility = 'visible';
		}
		currentWishText = document.getElementById('wishtext').value;
	}
	let d = new Date();
	d = d.getFullYear() + ' / ' + (d.getMonth()+1) + ' / ' + d.getDate()  + ' & ' + d.getHours()  + ':' + d.getMinutes() + ':' + d.getSeconds();
	var wishdata = {
		time: d,
		input: currentWishText
	}
	var database = firebase.database();
	var ref = database.ref('EXIBITION');
	ref.push(wishdata);

	// firebase.database().ref('EXIBITION').set({
	// 		time: d,
	// 		wish: currentWishText                    
	// });
	// console.log(firebase);
	// saveAsFile(document.getElementById('wishtext').value, )
}

// function saveAsFile(str, filename) {
// 	var hiddenElement = document.createElement('a');
// 	hiddenElement.href = 'data:attachment/text,' + encodeURI(str);
// 	hiddenElement.target = '_blank';
// 	hiddenElement.download = filename;
// 	hiddenElement.click();
// }

// var strdata = "Hello, world!";
// saveAsFile(strdata, "output.txt");

