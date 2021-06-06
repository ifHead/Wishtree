
const cosX = new Float32Array([
  0.500,  0.492,  0.470,  0.433,  0.383,  
  0.321,  0.250,  0.171,  0.087,  0.000,  
  -0.087,  -0.171,  -0.250,  -0.321,  -0.383,  
  -0.433,  -0.470,  -0.492,  -0.500,  -0.492, 
  -0.470,  -0.433,  -0.383,  -0.321,  -0.250, 
  -0.171,  -0.087,  -0.000,  0.087,  0.171,  
  0.250,  0.321,  0.383,  0.433,  0.470,  
  0.492]);

const sinY = new Float32Array([
  0.000,  0.087,  0.171,  0.250,  0.321,  
  0.383,  0.433,  0.470,  0.492,  0.500,  
  0.492,  0.470,  0.433,  0.383,  0.321,  
  0.250,  0.171,  0.087,  0.000,  -0.087,  
  -0.171,  -0.250,  -0.321,  -0.383,  -0.433,  
  -0.470,  -0.492,  -0.500,  -0.492,  -0.470,  
  -0.433,  -0.383,  -0.321,  -0.250,  -0.171,  
  -0.087]);

let ink = new Array(300);

function setup() {
    var firebaseConfig = {
        apiKey: "AIzaSyAADRvSuIsu2goGziC7qYW9BBzW43w_h-s",
        authDomain: "wishtree-f4fc4.firebaseapp.com",
        databaseURL: "https://wishtree-f4fc4-default-rtdb.firebaseio.com",
        projectId: "wishtree-f4fc4",
        storageBucket: "wishtree-f4fc4.appspot.com",
        messagingSenderId: "805037767612",
        appId: "1:805037767612:web:8af525548c577f352709b9"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    console.log(firebase);
    
    var database = firebase.database();
    var ref = database.ref('scores');
    
    var data = {
      name: "DTS",
      score: 598
    }
    ref.push(data);

    let cnv = createCanvas(500, 500);
    cnv.position(200, 200);
    frameRate(30);
    for(let i = 0; i < 300; i++){
      ink[i] = new Ink(200,200);
    }
}

class Ink{
    constructor(_x, _y){
        this.ten_track = new Int8Array(10);
        this.x = _x;
        this.y = _y;
        this.alpha = 10;
        this.ink_amount = 5;
        this.choice = floor(random(0,37));
        for(let i = 0; i < 10; i++){
            this.ten_track[i] = this.choice + i;
            if(this.ten_track[i] > 35) { this.ten_track[i] += -36; }
        }
        
        this.active_crossroad = 0;
        this.seq_crossroad = {
          first : random(10, 20),
          second : random(35, 45),
          third : random(60, 70)
        }
    }
    drop(){
        this.proceed = this.ten_track[floor(random(0,10))];
        let r = random(-0.3,0.3);
        let r2 = random(-0.3,0.3);
        this.x += cosX[this.proceed] + r;
        this.y += sinY[this.proceed] + r2;
        this.alpha = lerp(this.alpha, 0, 0.03);
        this.ink_amount = lerp(this.ink_amount, 0, 0.03);
        strokeWeight(this.ink_amount);
        stroke(0, this.alpha);
        point(this.x,this.y);
    }
    crossroad(){
      this.init_crossroad();
      
      if(this.active_crossroad < 3){
        
      }
      if(this.active_crossroad < 3){
        
      }
      if(this.active_crossroad == 3) {
        
      }
    }
  
    init_crossroad(){
      if(this.seq_crossroad.third < frameCount()){
        this.active_crossroad = 3;
      }
      else if(this.seq_crossroad.second < frameCount()){
        this.active_crossroad = 2;
      }
      else if(this.seq_crossroad.first < frameCount()){
        this.active_crossroad = 1;
      }
    }
}

function draw() {
    for(let i = 0; i < 50; i++){
      ink[i].drop();  
    }
    noFill();
    rect(0,0,500,500);
}