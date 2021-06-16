

var modal_state = false;
var sidebar_bool = false;

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
    p.cnv.position(window.innerWidth/2 - 220,1150);
    p.receivedText = currentWishText;
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

let ticker_sketch = function(p){
  p.setup = function() {
  }

  p.draw = function(){
  }
}

let sound_sketch_N_blockingGUI = function(p){
  var sound = new Array(4);
  
  p.preload = function(){
    p.soundFormats('ogg');
    for(let i = 0; i < sound.length; i++){
      sound[i] = p.loadSound('../../assets/audio/챕터 '+(i+1)+'.ogg');
      sound[i].play();
      sound[i].stop();
    }
  }

  let fullpageCanvas;
  p.setup = function() {
    // p.elem = createElement
    p.cnv = p.createCanvas(window.innerWidth, window.innerHeight);
    fullpageCanvas = p.createDiv('');
    fullpageCanvas.elt.style.position = 'fixed';
    fullpageCanvas.style('top', '0');
    fullpageCanvas.style('left','0');
    fullpageCanvas.style('width','100%');
    fullpageCanvas.style('height','100%');
    fullpageCanvas.style('z-index','120');
    fullpageCanvas.style("pointer-events", "none");
    p.cnv.parent(fullpageCanvas);
    p.cnv.position(0,0);
    
    p.bgm_1 = new BGM(1, 300, 2300);
    //-------------------------sound ready
  }

  var scrollValue;

  class BGM {
    constructor(_idx, _start, _end){
      this.start = _start;
      this.end = _end;
      this.idx = _idx - 1;
      this.volume = 0;
      this.volume_target;
      this.d_volume;
      this.volume_easing = 0.01;
    }

    player(){
      console.log(this.volume);
      if(scrollValue > this.start && scrollValue < this.end){
        if(this.volume == 0 && !(sound[this.idx].isPlaying())){
          sound[this.idx].play();
        }

        if (this.volume < 0.02) {
          this.volume = p.lerp(this.volume, 1, 0.0006);
        } 
        else if (this.volume < 0.06) {
          this.volume = p.lerp(this.volume, 1, 0.001);
        }
        else
        {
          this.volume = p.lerp(this.volume, 1, 0.005);
          if(this.volume > 0.97){ this.volume = 1; }
        }
        sound[this.idx].setVolume(this.volume);
      } else {
          this.volume_target = 0;
          this.d_volume = this.volume_target - this.volume;
          this.volume += this.d_volume * 0.05;
          if(sound[this.idx].isPlaying()){
            if(this.volume < 0.001 ) {
              this.volume = 0; 
              sound[this.idx].stop();
            }
            sound[this.idx].setVolume(this.volume);
          }
      }
    }
  }

  p.draw = function() {
    // p.scrollTo();
    scrollValue = $(document).scrollTop();
    p.bgm_1.player();

    // if(scrollValue > 1000 && scrollValue < 5000){
    //   chap_1_sound.setVolume(p.map(scrollValue, 1000, 5000, 0, 1));
    // }
    // else if(scrollValue > 5000 && scrollValue < 9000) {
    //   chap_1_sound.setVolume(p.map(scrollValue, 5000, 9000, 1, 0));
    // }
    // else {chap_1_sound.setVolume(0);}

    p.drawingContext.shadowOffsetX = 2;
    p.drawingContext.shadowOffsetY = 2;
    p.drawingContext.shadowBlur = 24;
    p.drawingContext.shadowColor = p.color(0,0,0,p.modal_alpha/2);
    p.clear();
    p.background(0, p.bgalpha);
    p.noStroke();

    p.fill(255, p.modal_alpha);
    p.rect(window.innerWidth/2-175, window.innerHeight/2-90, p.modal_w, p.modal_h, 10,10,10,10);
    
    p.stroke(0,255);
    p.strokeWeight(5);
    p.fill(0);
    p.textSize(20);
    p.text(window.innerWidth/2, window.innerHeight/2, "asdfasdf소망을 입력해주셔야 해요!");

    if(modal_state == true){
        fullpageCanvas.style("pointer-events", "auto");

        p.modal_w_target = 350;
        p.d_modal_w = p.modal_w_target - p.modal_w;
        p.modal_w += p.d_modal_w * p.easing;
        p.bgalpha_target = 100;
        p.d_bgalpha = p.bgalpha_target - p.bgalpha;
        p.bgalpha += p.d_bgalpha * 0.03;
        
        p.modal_alpha_target = 255;
        p.d_modal_alpha = p.modal_alpha_target - p.modal_alpha;
        p.modal_alpha += p.d_modal_alpha * 0.35;
      if(p.modal_w > 340){
        p.modal_h_target = 220;
        p.d_modal_h = p.modal_h_target - p.modal_h;
        p.modal_h += p.d_modal_h * p.easing;

        if(p.modal_h > 200) {
          p.closebuttonAlpha = p.lerp(p.closebuttonAlpha, 255, 0.05);
        }
      }  
      p.button();
      p.fill(0);
    }
    else
    {
      fullpageCanvas.style('pointer-events', 'none');

      p.bgalpha_target = 0;
      p.d_bgalpha = p.bgalpha_target - p.bgalpha;
      p.bgalpha += p.d_bgalpha * 0.03;

      p.modal_h_target = 20;
      p.d_modal_h = p.modal_h_target - p.modal_h;
      p.modal_h += p.d_modal_h * p.easing;

      if(p.modal_h < 23){
        p.modal_w_target = 20;
        p.d_modal_w = p.modal_w_target - p.modal_w;
        p.modal_w += p.d_modal_w * p.easing;

        p.modal_alpha_target = 0;
        p.d_modal_alpha = p.modal_alpha_target - p.modal_alpha;
        p.modal_alpha += p.d_modal_alpha * 0.05;

        p.closebuttonToggle *= -1;
      }
      p.closebuttonAlpha = p.lerp(p.closebuttonAlpha, 0, 0.27);
      
      p.button();
    }

    p.button_hover();
    p.disableScroll();
  }



  p.button = function(){
      p.drawingContext.shadowOffsetX = 0;
      p.drawingContext.shadowOffsetY = 0;
      p.drawingContext.shadowBlur = 5;
      p.drawingContext.shadowColor = p.color(0,0);
      p.fill(p.button_color);
      p.stroke(p.button_color);
      if(p.hover_bool == true){ 
        p.close_button_border_thickness = p.lerp(p.close_button_border_thickness, 4, 0.15);
      } else {
        p.close_button_border_thickness = p.lerp(p.close_button_border_thickness, 0, 0.15);
      }
      p.strokeWeight(p.close_button_border_thickness);
      p.rect(window.innerWidth/2+134, window.innerHeight/2-77, 30, 30, 7,7,7,7);
      p.drawX(window.innerWidth/2+143, window.innerHeight/2-68, 12);
  }

  p.drawX = function(x, y, size){
      p.stroke(255, p.closebuttonAlpha);
      p.strokeWeight(2);
      p.line(x, y, x+size, y+size);
      p.line(x+size, y, x, y+size);
  }

  p.close_button_border_thickness = 0;
  p.closebuttonAlpha = 0;
  p.closebuttonToggle = -1;
  p.modal_alpha = 0;
  p.easing = 0.15;
  p.modal_w = 20;
  p.modal_h = 20;
  p.bgalpha = 0;
  p.hover_bool = false;

  p.buttonRegion_x = window.innerWidth/2+134;
  p.buttonRegion_y = window.innerHeight/2-77;
  p.modalRegion_x = window.innerWidth/2-175;
  p.modalRegion_y = window.innerHeight/2-90;
  p.button_color = p.color(182,80,44,0);
  
  p.mouseClicked = function(){  
    if((p.buttonRegion_x < p.mouseX && p.buttonRegion_x+30 > p.mouseX)
      && (p.buttonRegion_y < p.mouseY && p.buttonRegion_y+30 > p.mouseY)
      || p.modalRegion_x > p.mouseX || p.modalRegion_x + 350 < p.mouseX
      || p.modalRegion_y > p.mouseY || p.modalRegion_y + 220 < p.mouseY)
      {
        modal_state = false;
        p.close_button_border_thickness = 0;
      }
  }

  p.button_hover = function(){
    if((p.buttonRegion_x < p.mouseX && p.buttonRegion_x+30 > p.mouseX)
    && (p.buttonRegion_y < p.mouseY && p.buttonRegion_y+30 > p.mouseY))
    {
      p.button_color = p.lerpColor(p.button_color,p.color(232,130,104,p.closebuttonAlpha),0.23);
      p.hover_bool = true;
    }
    else
    {
      p.button_color = p.lerpColor(p.button_color,p.color(182,80,44,p.closebuttonAlpha),0.23);
      p.hover_bool = false;
    }
  }
  
  window.onresize = function() {
    // assigns new values for width and height variables
    p.w = window.innerWidth;
    p.h = window.innerHeight;  
    p.cnv.size(p.w,p.h);
  }

  p.scrollTo = function(){
    var scrollValue = $(document).scrollTop();     
    if(isTextExist == false){
      if(scrollValue > 7300){
        modal_state = true;
          window.scrollTo({
            left: 0, 
            top: 6850
          });
        }
    } else {
      modal_state = false;
    }
  }

  p.disableScroll = function(){
    sidebar_bool = $("#menuicon").is(":checked");
    if(sidebar_bool || modal_state || loading){
      $('html, body').css({
          overflow: 'hidden',
          height: 'auto'
      });
    }
    else
    {
      $('html, body').css(
          'overflow-x', 'hidden'
      ).css('overflow-y', 'auto');
    }
  }

  p.now = -10000;
  loading = false;
  p.loadingToggle = function(){
    if(loading){
      p.now = p.millis();
      loading = false;
    }
    if(p.now + 8600 > p.millis()){
      
    }
  }
}

let superP5_1 = new p5(ticker_sketch);
let superP5_2 = new p5(ink_sketch); // 스케치의 레이어를 결정함, 선입선출
let superP5_3 = new p5(sound_sketch_N_blockingGUI);


