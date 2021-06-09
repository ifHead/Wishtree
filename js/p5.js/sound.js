var mySound;
function preload(){
  soundFormats('ogg');
  mySound = loadSound('../../assets/le_festin.ogg');
}

function setup(){
	noCanvas();
  mySound.setVolume(0);
	mySound.play();
}

function draw(){
	var scrollValue = $(document).scrollTop();
    if(scrollValue > 1000 && scrollValue < 5000){
      mySound.setVolume(map(scrollValue, 1000, 5000, 0, 1));
    } 
    else if(scrollValue > 5000 && scrollValue < 9000) {
      mySound.setVolume(map(scrollValue, 5000, 9000, 1, 0));
    }
    else {
      mySound.setVolume(0);
    }
}