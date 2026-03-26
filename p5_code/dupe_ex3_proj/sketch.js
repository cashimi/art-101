let speedx, speedy, lox, loy;
rocounter = 0;

counter = 0;
counter2 = 0.5;
let noob;


function setup() {
  createCanvas(500,500);
  bc = color(193,202,222);
  background(bc);
  fill(255);
  angleMode(DEGREES);
  speedx = random(-5, 5);
  speedy = random(-5, 5);
  lox = height / 2;
  loy = width / 2;
  noob = color(245,205,47);
}


function draw() {
  background(bc);
  if (lox < 0 || lox > 0 + 500 - 30) {  
    speedx = -speedx;
  }
  if (loy < 0 || loy > 0 + 500 - 30) {  
      speedy = -speedy;
  }
  lox += speedx;
  loy += speedy;
  rocounter += 100;
  c = color(255,0,0)
  roblox(c, lox, loy, rocounter);
  roblox(c, 100, 100, rocounter);
  roblox(c, 200, 200, rocounter);
  roblox(c, 300, 300, rocounter);
  roblox(c, 10, 460, rocounter);
  roblox(c, 460, 10, rocounter);
  c = 100
  roblox(c, 400, 100, -rocounter);
  roblox(c, 300, 200, -rocounter);
  roblox(c, 200, 300, -rocounter);
  roblox(c, 10, 10, -rocounter);
  roblox(c, 460, 460, -rocounter);

//--------------------------------- start man
if (counter2 < 2.5) {
  counter2 += 0.003;
} else {
  counter2 = 0.5;
}
  push();
  translate(330,650);
  scale(counter2);
  //ellipse(0, 0, 10, 10);
  tc = color(35,71,139);
  tp = color(40,127,70);
  cvMan(noob,tc,tp,-313,-270,0,2.5);
  ellipse(0, 0, 10, 10);
  pop();
//--------------------------------- end man

//--------------------------------- start woman
  counter -= 100;
  push();
  translate(10,240);
  head(noob,-2,0);
  curnty(color(107,50,123),0,0);
  limb(noob,35,65);
  limb(color(40,127,70),80,160); //legs
  limb(color(40,127,70),125,160);
  push();
    translate(165,65);
    fill(255,0,0);
    //ellipse(0, 0, 10, 10);
    rotate(radians(counter));
    //translate(-45,0);
    limb(noob,0,0); //arms
  pop();
  pop();
//--------------------------------- end woman
}// end draw


//------------------------------------ functions
function roblox(c,lx,ly,rot) {
  push();
  translate(lx+15,ly+15);
  rotate(radians(rot));
  rectMode(CENTER);
  fill(c);
  rect(0, 0, 30, 30);
  fill(bc);
  rect(0, 0, 10, 10);
  pop();
}

function cvWoman(tc,lx,ly,rot){
  push();
    translate(lx,ly);
    rotate(rot);
    head(color(245,205,47),-2,0);
    curnty(tc,0,0);
    limb(color(245,205,47),0,0,0); //arms
    limb(color(245,205,47),135,0);
    limb(color(40,127,70),45,95); //legs
    limb(color(40,127,70),90,95);
  pop();
}

function cvMan(c,tc,tp,lx,ly,rot,sc){
  push();
    translate(lx,ly);
    rotate(radians(rot));
    scale(sc);
    head(c,-2,0);
    cvAwesomeFace(c,71,-15,.27);
    torso(tc,0,0);
    limb(c,170,65); //arms
    limb(c,35,65);
    limb(tp,80,160); //legs
    limb(tp,125,160);
  pop();
}


//------------------------------------------ body parts
function limb(c,lx,ly){
  push();
  fill(c);
  translate(lx,ly);
  rect(0,0,45,95,5);
  pop();
}
function head(c,lx,ly){
  push();
  fill(c);
  translate(lx,ly)
  rect(100,10,55,55,10);
  cvAwesomeFace(c,73,-15,.27)
  pop();
  }
function torso(c,lx,ly){
  push();
  fill(c);
  translate(lx,ly);
  noStroke();
  rect(80,65,90,95,5);
  pop();
}
function curnty(c,lx,ly){
  push();
  noStroke();
  fill(c);
  translate(lx,ly);
  rect(80,65,90,95,5);
  pop();
  // ----------------- start woman parts
  fill(bc);
  push();
  noStroke();
  triangle(80,90,80,150,95,120);
  triangle(170,90,170,150,155,120);
  pop();
}
function cvAwesomeFace(c,lx,ly,sc) {
  push();
  translate(lx,ly);
  scale(sc);
    //eyebrows
    fill(0); //top
    stroke(0);
    strokeWeight(4);
    ellipse(222,135,27,35);
    ellipse(178,135,27,35);
    fill(c); //yellow layer
    stroke(c);
    ellipse(222,141,35,37);
    ellipse(178,141,35,37);
    //features
    fill("white");
    stroke(0);
    ellipse(222,155,33,50); //eyes
    ellipse(178,155,33,50);
    quad(155,230,245,230,205,280,195,280); //teeth
    fill("black");
    ellipse(220,148,25,33); //puipls
    ellipse(176,148,25,33);
    quad(163,238,237,238,205,280,195,280); //mouth  
  pop();
}
