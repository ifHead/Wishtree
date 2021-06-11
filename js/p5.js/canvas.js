let ink_sketch = function(p){ // 잉크 스케치
  const cosX = new Float32Array([
      0.500,  0.492,  0.470,  0.433,  0.383,  
      0.321,  0.250,  0.171,  0.087,  0.000,  
      -0.087,  -0.171,  -0.250,  -0.321,  -0.383,  
      -0.433,  -0.470,  -0.492,  -0.500,  -0.492, 
      -0.470,  -0.433,  -0.383,  -0.321,  -0.250, 
      -0.171,  -0.087,  -0.000,  0.087,  0.171,  
      0.250,  0.321,  0.383,  0.433,  0.470,  
      0.492
  ]);

  const sinY = new Float32Array([
      0.000,  0.087,  0.171,  0.250,  0.321,  
      0.383,  0.433,  0.470,  0.492,  0.500,  
      0.492,  0.470,  0.433,  0.383,  0.321,  
      0.250,  0.171,  0.087,  0.000,  -0.087,  
      -0.171,  -0.250,  -0.321,  -0.383,  -0.433,  
      -0.470,  -0.492,  -0.500,  -0.492,  -0.470,  
      -0.433,  -0.383,  -0.321,  -0.250,  -0.171,  
      -0.087
  ]);

  p.ink = new Array(300);
  p.init = 0;

  // p.get_currentWishText = function(){
  //     console.log(currentWishText);
  // }

  p.setup = function() {
    p.cnv = p.createCanvas(300, 300);
    p.cnv.parent('B4_S');
    p.frameRate(30);
    for(let i = 0; i < 300; i++){
      p.ink[i] = new Ink(100,100);
    }
  }
  p.draw = function() {
    p.cnv.position(window.innerWidth/2 - 250,1150);
    p.receivedText = currentWishText;
    console.log(p.receivedText);
    p.textAlign(p.CENTER, p.CENTER);
    p.textSize(32);
    p.fill(0);
    p.noStroke();
    p.text(p.receivedText, 120, 150);
    for(let i = 0; i < 50; i++){
      p.ink[i].drop();  
    }
    p.stroke(0);
    p.noFill();
    p.rect(0,0,p.width,p.height);
  }


  class Ink{
    constructor(_x, _y){
      this.ten_track = new Int8Array(10);
      this.x = _x;
      this.y = _y;
      this.alpha = 10;
      this.ink_amount = 5;
      this.choice = p.floor(p.random(0,37));
      for(let i = 0; i < 10; i++){
          this.ten_track[i] = this.choice + i;
          if(this.ten_track[i] > 35) { this.ten_track[i] += -36; }
      }
      
      this.seq_crossroad = {
        first : p.random(10, 20),
        second : p.random(35, 45),
        third : p.random(60, 70)
      }
    }
    drop(){
      this.proceed = this.ten_track[p.floor(p.random(0,10))];
      let r = p.random(-0.3,0.3);
      let r2 = p.random(-0.3,0.3);
      this.x += cosX[this.proceed] + r;
      this.y += sinY[this.proceed] + r2;
      this.alpha = p.lerp(this.alpha, 0, 0.03);
      this.ink_amount = p.lerp(this.ink_amount, 0, 0.03);
      p.strokeWeight(this.ink_amount);
      p.stroke(0, this.alpha);
      p.point(this.x,this.y);
    }
  }
}

let test_sketch = function(p){
  p.setup = function() {
    p.cnv = p.createCanvas(500, 500);
    p.cnv.position(30, 30);
  }
  p.draw = function() {
    // p.noFill();
    // p.rect(0,0,500,500);
  }
}

let sound_sketch = function(p){
  var mySound;
  p.preload = function(){
    p.soundFormats('ogg');
    mySound = p.loadSound('../../assets/le_festin.ogg')
  }
  p.setup = function() {
    p.cnv = p.createCanvas(500, 500);
    p.cnv.position(90, 90);
    mySound.setVolume(0);
    mySound.play();
  }
  p.draw = function() {
    // p.rect(0,0,500,500);
    var scrollValue = $(document).scrollTop();
    if(scrollValue > 1000 && scrollValue < 5000){
      mySound.setVolume(p.map(scrollValue, 1000, 5000, 0, 1));
    }
    else if(scrollValue > 5000 && scrollValue < 9000) {
      mySound.setVolume(p.map(scrollValue, 5000, 9000, 1, 0));
    }
    else {
      mySound.setVolume(0);
    }
  } 
}


let superP5_3 = new p5(sound_sketch);
let superP5_2 = new p5(ink_sketch); // 스케치의 레이어를 결정함, 선입선출
let superP5_1 = new p5(test_sketch);
