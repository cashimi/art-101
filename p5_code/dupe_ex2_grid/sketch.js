let bgcounter = 255; //changing bg color
let counter = 0;
let subcounter = 600;
let cx,cy;
let bgc;
let grav; //start assets
let speed;
let regen;
let oldroblox;
let land;

function preload() {
  oldroblox = loadFont("assets/oldroblox.ttf")
}

function setup() {
  createCanvas(600,600);
  background(255);
  bgc = color(20,1);
  cx = width/2;
  cy = height/2;
  gridSize = 100;
  textSize(40);
  //images
  grav = loadImage("assets/gravcoil.png")
  speed = loadImage("assets/speedcoil.png")
  regen = loadImage("assets/regencoil.png")
  land = loadImage("assets/roblox.png") 
  fill(255);
}

function draw() {
  fill(bgc);
  rect(0,0,width,height);
wickerBackground();
// ---------------------------------------------------------- start controls
switch(key) {
  case 'a':
    console.log("speed!");  // left
    cx+= -gridSize;
    image(speed,cx,cy,gridSize,gridSize);
    break;
  case 'w':
    console.log("so high!");  // up
    cy+= -gridSize; 
    image(grav,cx,cy,gridSize,gridSize);
    break;
  case 'd':
    console.log("speed!");  //right
    cx+= gridSize;
    image(speed,cx,cy,gridSize,gridSize);
    break;
  case 's':
    console.log("healing..");  // back
    cy+= gridSize;
    image(regen,cx,cy,gridSize,gridSize);
    break;
  case 'q':
    console.log("send money to bdiddy150");  // text
    fill(40,127,70);
    textFont(oldroblox);
    text("robux??!",cx+random(-20,20),cy+random(-20,20),200);
    break;
  case 'r':
    console.log("dj khaled said this");  // text
    fill(255,0,0);
    textFont(oldroblox);
    text("roblox is life",cx,cy,300);
    break;
  case 'b':
    console.log("weee!! rollarcoaster");  // text
    image(land,0,0,600,600);
    break;
  
  default:             // Default executes if the case labels
    console.log("...");   // don't match the switch parameter
    break;
  }
  key = "";  // you can empty it so, it does not double trigger


}// end draw

function keyPressed() {
  if (key == 't' || key == 'T'){  
    if (counter == 0, subcounter == 600){
      counter = 0;
      subcounter = 600;
    } else {
      counter = 0;
      subcounter = 600;
    }
    console.log("pause.. resetting background");  // text
  }
  }

function wickerBackground (){
// ---------------------------------------------------------- start wicker background
  if (frameCount % 20 == 0) {
    noStroke();
    // ---------------------------------------------- top left
    fill(245,205,47,120);
    ellipse(0, counter, width - random(50), 10);
    fill(194,218,184,120);
    ellipse(counter, 0, 10, height - random(50));
    // ---------------------------------------------- bottom right
    fill(232,186,199,120);
    ellipse(600, subcounter, width - random(50), 10);
    fill(13,105,171,120);
    ellipse(subcounter, 600, 10, height - random(50));
    // ---------------------------------------------- movement
    //console.log("bgcounter = " + bgcounter + " counter = " + counter );
    if (counter > height) {
    background(bgcounter);
    bgcounter+=225;
    counter = 0;
    subcounter = 600;
    } else {
    counter+=40; // space between shapes
    subcounter-=40;
    }
    }
// ---------------------------------------------------------- end wicker background
}