
var modal_state = false;
var sidebar_bool = false;

// let ink_sketch = function(p){ // 잉크 스케치
//   const cosX = new Float32Array([
//       0.500,  0.492,  0.470,  0.433,  0.383,  
//       0.321,  0.250,  0.171,  0.087,  0.000,  
//       -0.087,  -0.171,  -0.250,  -0.321,  -0.383,  
//       -0.433,  -0.470,  -0.492,  -0.500,  -0.492, 
//       -0.470,  -0.433,  -0.383,  -0.321,  -0.250, 
//       -0.171,  -0.087,  -0.000,  0.087,  0.171,  
//       0.250,  0.321,  0.383,  0.433,  0.470,  
//       0.492
//   ]);

//   const sinY = new Float32Array([
//       0.000,  0.087,  0.171,  0.250,  0.321,  
//       0.383,  0.433,  0.470,  0.492,  0.500,  
//       0.492,  0.470,  0.433,  0.383,  0.321,  
//       0.250,  0.171,  0.087,  0.000,  -0.087,  
//       -0.171,  -0.250,  -0.321,  -0.383,  -0.433,  
//       -0.470,  -0.492,  -0.500,  -0.492,  -0.470,  
//       -0.433,  -0.383,  -0.321,  -0.250,  -0.171,  
//       -0.087
//   ]);

//   p.ink = new Array(300);
//   p.init = 0;

//   // p.get_currentWishText = function(){
//   //     console.log(currentWishText);
//   // }

//   p.mFont;
//   p.setup = function() {
//     p.cnv = p.createCanvas(300, 300);
//     p.cnv.parent('B4_S');
//     p.frameRate(30);
//     // for(let i = 0; i < 300; i++){
//     //   p.ink[i] = new Ink(p.random(30,270),p.random(30,270));
//     // }
//     p.cnv.position(window.innerWidth/2 - 250,1150);
//     // p.mFont = p.loadFont('Noto Sans KR');
//   }

//   p.draw = function() {

//     // document.getElementById('wishtext').value
//     // p.receivedText = currentWishText;
//     // p.receivedText = ";asldfkj;saldkjf;";
//     // p.textAlign(p.CENTER, p.CENTER);
//     // p.textFont(mFont, 20);

//     p.fill(0);
//     p.noStroke();
//     // p.text(p.receivedText, 150, 140);
//     for(let i = 0; i < 50; i++){
//       p.ink[i].drop();
//     }
//   }

//   class Ink{
//     constructor(_x, _y){
//       this.ten_track = new Int8Array(10);
//       this.x = _x;
//       this.y = _y;
//       this.alpha = 10;
//       this.ink_amount = 5;
//       this.choice = p.floor(p.random(0,37));
//       for(let i = 0; i < 10; i++){
//           this.ten_track[i] = this.choice + i;
//           if(this.ten_track[i] > 35) { this.ten_track[i] += -36; }
//       }
      
//       this.seq_crossroad = {
//         first : p.random(10, 20),
//         second : p.random(35, 45),
//         third : p.random(60, 70)
//       }
//     }
//     drop(){
//       this.proceed = this.ten_track[p.floor(p.random(0,10))];
//       let r = p.random(-0.3,0.3);
//       let r2 = p.random(-0.3,0.3);
//       this.x += cosX[this.proceed] + r;
//       this.y += sinY[this.proceed] + r2;
//       this.alpha = p.lerp(this.alpha, 0, 0.03);
//       this.ink_amount = p.lerp(this.ink_amount, 0, 0.03);
//       p.strokeWeight(this.ink_amount);
//       p.stroke(0, this.alpha);
//       p.point(this.x,this.y);
//     }
//   }
// }

// let sound_sketch_N_blockingGUI = function(p){
//   p.preload = function(){
//     p.soundFormats('ogg');
//     for(let i = 0; i < 4; i++){
//       p.sound[i] = p.loadSound('../../assets/audio/챕터 '+(i+1)+'.ogg');
//     }
//   }
  
//   p.sound = new Array(4);
//   let fullpageCanvas;
//   p.setup = function() {
//     // p.elem = createElement
//     p.cnv = p.createCanvas(window.innerWidth, window.innerHeight);
//     fullpageCanvas = p.createDiv('');
//     fullpageCanvas.elt.style.position = 'fixed';
//     fullpageCanvas.style('top', '0');
//     fullpageCanvas.style('left','0');
//     fullpageCanvas.style('width','100%');
//     fullpageCanvas.style('height','100%');
//     fullpageCanvas.style('z-index','120');
//     fullpageCanvas.style("pointer-events", "none");
//     p.cnv.parent(fullpageCanvas);
//     p.cnv.position(0,0);
    
//     p.bgm_1 = new BGM(1, 2300, 9200);
//     p.bgm_2 = new BGM(2, 9500, 20100);
//     p.bgm_3 = new BGM(3, 20300, 25500);
//     p.bgm_4 = new BGM(4, 25700, 40200);
//     for(let i = 0; i < 4; i++){
//       p.sound[i].play();
//       p.sound[i].stop();
//     }
//     //-------------------------sound ready
//   }

//   p.scrollValue;

//   class BGM {
//     constructor(_idx, _start, _end){
//       this.start = _start;
//       this.end = _end;
//       this.idx = _idx - 1;
//       this.volume = 0;
//       this.volume_target;
//       this.d_volume;
//       this.volume_easing = 0.01;
//       this.isFirstPlay = true;
//     }

//     player(){
//       if(p.scrollValue > this.start && p.scrollValue < this.end){
//         if(!(p.sound[this.idx].isPlaying())){
//           p.sound[this.idx].play();
//         }


//         if (this.volume < 0.02) {
//           this.volume = p.lerp(this.volume, 1, 0.0006);
//         } 
//         else if (this.volume < 0.06) {
//           this.volume = p.lerp(this.volume, 1, 0.001);
//         }
//         else
//         {
//           this.volume = p.lerp(this.volume, 1, 0.001);
//           if(this.volume > 0.97){ this.volume = 1; }
//         }

//         if(this.isFirstPlay == true){
//           this.volume = 1;
//           this.isFirstPlay = false;  
//         }
//         p.sound[this.idx].setVolume(this.volume);
//       } else {
//           this.volume_target = 0;
//           this.d_volume = this.volume_target - this.volume;
//           this.volume += this.d_volume * 0.05;
//           if(p.sound[this.idx].isPlaying()){
//             if(this.volume < 0.001 ) {
//               this.volume = 0; 
//               p.sound[this.idx].stop();
//             }
//             p.sound[this.idx].setVolume(this.volume);
//           }
//       }
//     }
//   }
  
//   p.draw = function() {
    
//     // if(waitLoad){
//     //   window.scrollTo({
//     //     left: 0,
//     //     top: 0
//     //   });
//     //   $('html, body').css({
//     //     overflow: 'hidden',
//     //     height: 'auto'
//     //   });
//     // } else {
//     //   $('html, body').css(
//     //     'overflow-x', 'hidden'
//     //   ).css('overflow-y', 'auto');
//     // }
//     // console.log();
//     p.scrollValue = $(document).scrollTop();
//     p.scrollTo();
//     p.bgm_1.player();
//     p.bgm_2.player();
//     p.bgm_3.player();
//     p.bgm_4.player();

//     p.drawingContext.shadowOffsetX = 2;
//     p.drawingContext.shadowOffsetY = 2;
//     p.drawingContext.shadowBlur = 24;
//     p.drawingContext.shadowColor = p.color(0,0,0,p.modal_alpha/2);
//     p.clear();
//     p.background(0, p.bgalpha);
//     p.noStroke();

//     p.fill(255, p.modal_alpha);
//     p.rect(window.innerWidth/2-175, window.innerHeight/2-30, p.modal_w, p.modal_h, 10,10,10,10);
    
//     p.stroke(0,255);
//     p.strokeWeight(5);
//     p.fill(0);
//     p.textSize(20);
//     p.text(window.innerWidth/2, window.innerHeight/2, "소망을 입력해주셔야 해요!");

//     if(modal_state || isHang || isBlankInput){
//         fullpageCanvas.style("pointer-events", "auto");

//         p.modal_w_target = 350;
//         p.d_modal_w = p.modal_w_target - p.modal_w;
//         p.modal_w += p.d_modal_w * p.easing;
//         p.bgalpha_target = 100;
//         p.d_bgalpha = p.bgalpha_target - p.bgalpha;
//         p.bgalpha += p.d_bgalpha * 0.03;
        
//         p.modal_alpha_target = 255;
//         p.d_modal_alpha = p.modal_alpha_target - p.modal_alpha;
//         p.modal_alpha += p.d_modal_alpha * 0.35;
//       if(p.modal_w > 340){
//         p.modal_h_target = 85;
//         p.d_modal_h = p.modal_h_target - p.modal_h;
//         p.modal_h += p.d_modal_h * p.easing;

//         if(p.modal_h > 200) {
//           p.closebuttonAlpha = p.lerp(p.closebuttonAlpha, 255, 0.05);
//         }
//       }  
//       p.button();
//       p.fill(0);
//     }
//     else if(!modal_state || !isHang || !isBlankInput)
//     {
//       fullpageCanvas.style('pointer-events', 'none');

//       p.bgalpha_target = 0;
//       p.d_bgalpha = p.bgalpha_target - p.bgalpha;
//       p.bgalpha += p.d_bgalpha * 0.03;

//       p.modal_h_target = 20;
//       p.d_modal_h = p.modal_h_target - p.modal_h;
//       p.modal_h += p.d_modal_h * p.easing;

//       if(p.modal_h < 23){
//         p.modal_w_target = 20;
//         p.d_modal_w = p.modal_w_target - p.modal_w;
//         p.modal_w += p.d_modal_w * p.easing;

//         p.modal_alpha_target = 0;
//         p.d_modal_alpha = p.modal_alpha_target - p.modal_alpha;
//         p.modal_alpha += p.d_modal_alpha * 0.05;

//         p.closebuttonToggle *= -1;
//       }
//       p.closebuttonAlpha = p.lerp(p.closebuttonAlpha, 0, 0.27);
      
//       p.button();
//     }

//     p.button_hover();
//     p.disableScroll();
//   } // ---------------------------- DRAW END ----------------------------

//   p.modal_alpha = 0;
//   p.modal_color = p.color(255,255,255,0);
    
//   p.textAlpha = 0;
//   p.button = function(){
//       p.drawingContext.shadowOffsetX = 0;
//       p.drawingContext.shadowOffsetY = 0;
//       p.drawingContext.shadowBlur = 5;
//       p.drawingContext.shadowColor = p.color(0,0);
//       p.fill(p.button_color);
//       p.stroke(p.button_color);
      
//       if(p.hover_bool == true){ 
//         p.close_button_border_thickness = p.lerp(p.close_button_border_thickness, 4, 0.15);
//       } else {
//         p.close_button_border_thickness = p.lerp(p.close_button_border_thickness, 0, 0.15);
//       }
//       p.strokeWeight(p.close_button_border_thickness);
//       p.rect(window.innerWidth/2+134, window.innerHeight/2-77, 30, 30, 7,7,7,7);
//       p.drawX(window.innerWidth/2+143, window.innerHeight/2-68, 12);
//       if(p.modal_h > 82){
//         p.textAlpha = p.lerp(p.textAlpha, 255, 0.1);
//       } else {
//         p.textAlpha = p.lerp(p.textAlpha, 0, 0.4);
//       }
//       // p.stroke(30,30,30,p.textAlpha);
//       p.fill(40,40,50,p.textAlpha);
//       p.textSize(19);
//       p.strokeWeight(1);
//       if(modal_state){
//         p.text('당신의 소망이 궁금해요!', window.innerWidth/2 - 135, window.innerHeight/2+20);
//       }
      
//       if(isBlankInput){
//         p.text('여백의 미...!', window.innerWidth/2 - 135, window.innerHeight/2+20);
//       }

//       if(isHang){
//         p.text('멋진 소망을 나무에 걸었어요!', window.innerWidth/2 - 135, window.innerHeight/2+20);
//       }
//       // console.log(getter_isHang());
//       // if(getter_isHang()){
//       //   // p.text('멋진 소망을 나무에 걸었어요!', window.innerWidth/2 - 135, window.innerHeight/2+20);
//       // }
//   }

//   p.drawX = function(x, y, size){
//       p.stroke(255, p.closebuttonAlpha);
//       p.strokeWeight(2);
//       p.line(x, y, x+size, y+size);
//       p.line(x+size, y, x, y+size);
//   }

//   p.close_button_border_thickness = 0;
//   p.closebuttonAlpha = 0;
//   p.closebuttonToggle = -1;
//   p.modal_alpha = 0;
//   p.easing = 0.15;
//   p.modal_w = 20;
//   p.modal_h = 20;
//   p.bgalpha = 0;
//   p.hover_bool = false;

//   p.buttonRegion_x = window.innerWidth/2+134;
//   p.buttonRegion_y = window.innerHeight/2-77;
//   p.modalRegion_x = window.innerWidth/2-175;
//   p.modalRegion_y = window.innerHeight/2-90;
//   p.button_color = p.color(182,80,44,0);
  
  
//   p.button_hover = function(){
//     p.buttonRegion_x = window.innerWidth/2+134;
//     p.buttonRegion_y = window.innerHeight/2-77;
//     p.modalRegion_x = window.innerWidth/2-175;
//     p.modalRegion_y = window.innerHeight/2-90;
//     if((p.buttonRegion_x < p.mouseX && p.buttonRegion_x+30 > p.mouseX)
//     && (p.buttonRegion_y < p.mouseY && p.buttonRegion_y+30 > p.mouseY))
//     {
//       p.button_color = p.lerpColor(p.button_color,p.color(232,130,104,p.closebuttonAlpha),0.23);
//       p.hover_bool = true;
//     }
//     else
//     {
//       p.button_color = p.lerpColor(p.button_color,p.color(182,80,44,p.closebuttonAlpha),0.23);
//       p.hover_bool = false;
//     }
//   }
  
//   window.onresize = function() {
//     // assigns new values for width and height variables
//     p.w = window.innerWidth;
//     p.h = window.innerHeight;  
//     p.cnv.size(p.w,p.h);
//   }

//   p.scrollTo = function(){
//     if( !isTextExist ){
//       if(p.scrollValue > 8500){
//         modal_state = true;
//       }
//     }
//   }
  
//   p.disableScroll = function(){
//     sidebar_bool = $("#menuicon").is(":checked");
//     if(sidebar_bool || modal_state/* || loading*/){
//       if(modal_state){
//         window.scrollTo({
//           left: 0,
//           top: 7980
//         });
//       }
//         $('html, body').css({
//             overflow: 'hidden',
//             height: 'auto'
//         });
//       }
//       else
//       {
//         $('html, body').css(
//           'overflow-x', 'hidden'
//           ).css('overflow-y', 'auto');
//         }
//       }


//       p.mouseClicked = function(){  
//         p.buttonRegion_x = window.innerWidth/2+134;
//         p.buttonRegion_y = window.innerHeight/2-77;
//         p.modalRegion_x = window.innerWidth/2-175;
//         p.modalRegion_y = window.innerHeight/2-90;
//         // if(
//           // (p.buttonRegion_x < p.mouseX && p.buttonRegion_x+30 > p.mouseX)
//           // && (p.buttonRegion_y < p.mouseY && p.buttonRegion_y+30 > p.mouseY)
//           // || p.modalRegion_x > p.mouseX || p.modalRegion_x + 350 < p.mouseX
//           // || p.modalRegion_y > p.mouseY || p.modalRegion_y + 220 < p.mouseY)
//         // {}
//         // if(isHang){
//         //   isHang = false;
//         // }
//         if(p.modal_h > 83){
//           isHang = false;
//           isBlankInput = false;
//         }
//         modal_state = false;
//         p.close_button_border_thickness = 0;  
//       }
//       p.now = -10000;
//       // p.loading = false;
//   // p.loadingToggle = function(){
//   //   if(p.loading){
//     //     p.now = p.millis();
//     //     p.loading = false;
//     //   }
//     //   if(p.now + 8600 > p.millis()){
  
  //   //   }
  //   // }
  // }
  
  // let superP5_2 = new p5(ink_sketch); // 스케치의 레이어를 결정함, 선입선출
  // let superP5_3 = new p5(sound_sketch_N_blockingGUI);
  
  
  
  //--------------------------single sketch code below-------------------------------
let sound = new Array(4);
let close_button_border_thickness = 0;
let closebuttonAlpha = 0;
let closebuttonToggle = -1;
let modal_alpha = 0;
let easing = 0.15;
let modal_w = 20;
let modal_h = 20;
let bgalpha = 0;
let hover_bool = false;
let modal_color;
let textAlpha = 0;

let buttonRegion_x = window.innerWidth/2+134;
let buttonRegion_y = window.innerHeight/2-77;
let modalRegion_x = window.innerWidth/2-175;
let modalRegion_y = window.innerHeight/2-90;
var button_color;

var cnv;
var fullpageCanvas;
var scrollValue;

let bgm_1;
let bgm_2;
let bgm_3;
let bgm_4;

class BGM {
  constructor(_idx, _start, _end){
    this.start = _start;
    this.end = _end;
    this.idx = _idx - 1;
    this.volume = 0;
    this.volume_target;
    this.d_volume;
    this.volume_easing = 0.01;
    this.isFirstPlay = true;
  }

  player(){
    if(scrollValue > this.start && scrollValue < this.end){
      if(!(sound[this.idx].isPlaying())){
        sound[this.idx].play();
      }


      if (this.volume < 0.02) {
        this.volume = lerp(this.volume, 1, 0.0006);
      } 
      else if (this.volume < 0.06) {
        this.volume = lerp(this.volume, 1, 0.001);
      }
      else
      {
        this.volume = lerp(this.volume, 1, 0.001);
        if(this.volume > 0.97){ this.volume = 1; }
      }

      if(this.isFirstPlay == true){
        this.volume = 1;
        this.isFirstPlay = false;  
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

function preload(){
  soundFormats('ogg');
  for(let i = 0; i < 4; i++){
    sound[i] = loadSound('../../assets/audio/챕터 '+(i+1)+'.ogg');
  }
}

function setup() {
  // elem = createElement
    cnv = createCanvas(window.innerWidth, window.innerHeight);
    fullpageCanvas = createDiv('');
    fullpageCanvas.elt.style.position = 'fixed';
    fullpageCanvas.style('top', '0');
    fullpageCanvas.style('left','0');
    fullpageCanvas.style('width','100%');
    fullpageCanvas.style('height','100%');
    fullpageCanvas.style('z-index','120');
    fullpageCanvas.style("pointer-events", "none");
    cnv.parent(fullpageCanvas);
    cnv.position(0,0);
    button_color = color(182,80,44,0);
    modal_color =  color(255,255,255,0);

    bgm_1 = new BGM(1, 2300, 9200);
    bgm_2 = new BGM(2, 9500, 20100);
    bgm_3 = new BGM(3, 20300, 25500);
    bgm_4 = new BGM(4, 25700, 40200);

    for(let i = 0; i < 4; i++){
      sound[i].play();
      sound[i].stop();
    }
    //-------------------------sound ready
}


function draw() {
  scrollValue = $(document).scrollTop();
  scrollgo();
  bgm_1.player();
  bgm_2.player();
  bgm_3.player();
  bgm_4.player();

  drawingContext.shadowOffsetX = 2;
  drawingContext.shadowOffsetY = 2;
  drawingContext.shadowBlur = 24;
  drawingContext.shadowColor = color(0,0,0,modal_alpha/2);
  clear();
  background(0, bgalpha);
  noStroke();

  fill(255, modal_alpha);
  rect(window.innerWidth/2-175, window.innerHeight/2-30, modal_w, modal_h, 10,10,10,10);
  
  stroke(0,255);
  strokeWeight(5);
  fill(0);
  textSize(20);
  text(window.innerWidth/2, window.innerHeight/2, "소망을 입력해주셔야 해요!");

  if(modal_state || isHang || isBlankInput){
      fullpageCanvas.style("pointer-events", "auto");

      let modal_w_target = 350;
      let d_modal_w = modal_w_target - modal_w;
      modal_w += d_modal_w * easing;
      let bgalpha_target = 100;
      let d_bgalpha = bgalpha_target - bgalpha;
      bgalpha += d_bgalpha * 0.03;
      
      let modal_alpha_target = 255;
      let d_modal_alpha = modal_alpha_target - modal_alpha;
      modal_alpha += d_modal_alpha * 0.35;
    if(modal_w > 340){
      let modal_h_target = 85;
      let d_modal_h = modal_h_target - modal_h;
      modal_h += d_modal_h * easing;

      if(modal_h > 200) {
        closebuttonAlpha = lerp(closebuttonAlpha, 255, 0.05);
      }
    }  
    button();
    fill(0);
  }
  else if(!modal_state || !isHang || !isBlankInput)
  {
    fullpageCanvas.style('pointer-events', 'none');

    let bgalpha_target = 0;
    let d_bgalpha = bgalpha_target - bgalpha;
    bgalpha += d_bgalpha * 0.03;

    let modal_h_target = 20;
    let d_modal_h = modal_h_target - modal_h;
    modal_h += d_modal_h * easing;

    if(modal_h < 23){
      let modal_w_target = 20;
      let d_modal_w = modal_w_target - modal_w;
      modal_w += d_modal_w * easing;

      let modal_alpha_target = 0;
      let d_modal_alpha = modal_alpha_target - modal_alpha;
      modal_alpha += d_modal_alpha * 0.05;

      closebuttonToggle *= -1;
    }
    closebuttonAlpha = lerp(closebuttonAlpha, 0, 0.27);
    
    button();
  }

  button_hover();
  disableScroll();
} // ---------------------------- DRAW END ----------------------------


function button(){
    drawingContext.shadowOffsetX = 0;
    drawingContext.shadowOffsetY = 0;
    drawingContext.shadowBlur = 5;
    drawingContext.shadowColor = color(0,0);
    fill(button_color);
    stroke(button_color);
    
    if(hover_bool == true){ 
      close_button_border_thickness = lerp(close_button_border_thickness, 4, 0.15);
    } else {
      close_button_border_thickness = lerp(close_button_border_thickness, 0, 0.15);
    }
    strokeWeight(close_button_border_thickness);
    rect(window.innerWidth/2+134, window.innerHeight/2-77, 30, 30, 7,7,7,7);
    drawX(window.innerWidth/2+143, window.innerHeight/2-68, 12);
    if(modal_h > 82){
      textAlpha = lerp(textAlpha, 255, 0.1);
    } else {
      textAlpha = lerp(textAlpha, 0, 0.4);
    }
    // stroke(30,30,30,textAlpha);
    fill(40,40,50,textAlpha);
    textSize(19);
    strokeWeight(1);
    if(modal_state){
      text('당신의 소망이 궁금해요!', window.innerWidth/2 - 102, window.innerHeight/2+20);
    }
    
    if(isBlankInput){
      text('여백의 미...!', window.innerWidth/2 - 135, window.innerHeight/2+20);
    }

    if(isHang){
      text('멋진 소망을 나무에 걸었어요!', window.innerWidth/2 - 135, window.innerHeight/2+20);
    }
    // console.log(getter_isHang());
    // if(getter_isHang()){
    //   // text('멋진 소망을 나무에 걸었어요!', window.innerWidth/2 - 135, window.innerHeight/2+20);
    // }
}

function drawX(x, y, size){
    stroke(255, closebuttonAlpha);
    strokeWeight(2);
    line(x, y, x+size, y+size);
    line(x+size, y, x, y+size);
}

  
  
function button_hover(){
  buttonRegion_x = window.innerWidth/2+134;
  buttonRegion_y = window.innerHeight/2-77;
  modalRegion_x = window.innerWidth/2-175;
  modalRegion_y = window.innerHeight/2-90;
  if((buttonRegion_x < mouseX && buttonRegion_x+30 > mouseX)
  && (buttonRegion_y < mouseY && buttonRegion_y+30 > mouseY))
  {
    button_color = lerpColor(button_color,color(232,130,104,closebuttonAlpha),0.23);
    hover_bool = true;
  }
  else
  {
    button_color = lerpColor(button_color,color(182,80,44,closebuttonAlpha),0.23);
    hover_bool = false;
  }
}
  
window.onresize = function() {
  // assigns new values for width and height variables
  let w = window.innerWidth;
  let h = window.innerHeight;  
  cnv.size(w,h);
}

function scrollgo(){
  if( !isTextExist ){
    if(scrollValue > 8500){
      modal_state = true;
      window.scrollTo({
        left: 0,
        top: 7980
      });
    }
  }
}
  
function disableScroll(){
  // console.log(modal_state);
  sidebar_bool = $("#menuicon").is(":checked");
  if(sidebar_bool || modal_state/* || loading*/){
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

function mouseClicked(){  
  buttonRegion_x = window.innerWidth/2+134;
  buttonRegion_y = window.innerHeight/2-77;
  modalRegion_x = window.innerWidth/2-175;
  modalRegion_y = window.innerHeight/2-90;

  if(modal_h > 83){
    isHang = false;
    isBlankInput = false;
  }
  modal_state = false;
  close_button_border_thickness = 0;  
}

