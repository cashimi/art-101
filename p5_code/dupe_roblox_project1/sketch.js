let left, right, up, down, bg;
let cx,cy;
let currentkey = '1';
let rainbow;



function preload(){
  bg = loadImage("assets/cloud.jpeg")
  left = loadImage("assets/left.png")
  right = loadImage("assets/right.png")
  up = loadImage("assets/jump.png")
  down = loadImage("assets/down.png")
  weez = loadImage("assets/weez.png")
  house = loadImage("assets/house.jpeg")
}

function setup() {
  createCanvas(1025,575);
  background(bg);
  smooth();
  cx = 0;
  cy = height-50;
  charMove = 75;
}

function draw() {
  // triggering the newkeychoice
  if(mouseIsPressed) {
    drawChoice();
  }
    
// ---------------------------- spawn point
  fill(190);
  rect(0, 535, 80, 40);
  fill(0);
  textSize(20);
  text("SPAWN",4,562);
// ---------------------------------------------------------- start controls
 switch(key) {
  case 'a':
    console.log("backwards");  // left
    if (cx - charMove >= 0){
      cx -= charMove;
    }
    image(left,cx,cy,50,50);
    break;
  case 'w':
    console.log("up up");  // up
    if (cy - charMove >= 0){
      cy -= charMove;
    }
    image(up,cx,cy,50,50);
    break;
  case 'd':
    console.log("forwards");  //right
    if (cx + charMove <= width - 50){
      cx += charMove;
    }
    image(right,cx,cy,50,50);
    break;
  case 's':
    console.log("down down");  // back
    if (cy + charMove <= height - 50){
      cy += charMove;
    }
    image(down,cx,cy,50,50);
    break;
  default:             // Default executes if the case labels
    console.log("...");   // don't match the switch parameter
    break;
  }
  key = "";  // you can empty it so, it does not double trigger
// ---------------------------------------------------------- end controls
} // end draw

function keyPressed() {
  currentkey = key; // Update currentkey when a key is pressed
}

function setRainbow() {
  rainbow = color(random(255), random(255), random(255),100);
}

function drawChoice() {
switch(currentkey) {
case '1':
  console.log("generating obby.."); 
  cvPath(color(115), mouseX, mouseY, pmouseX, pmouseY);
  break;
case '2':
  console.log("rainbow road"); 
  cvRainbowRoad(mouseX, mouseY, pmouseX, pmouseY);
  break;
case '3':
  console.log("epic fire path glitch");
  cvFirePath(color(random(200,255),random(50,200),random(0,100),random(50,150)),mouseX,mouseY);  
  break;
case '0':
  console.log("this feels like home");
  image(house,mouseX,mouseY,1025,575);  
  break;

default:      
  console.log("oopsies!! read instructions");
  break;
}

}

// ---------------------------------------------------------- start paths
function cvPath(k,lx,ly,w,h) {
  stroke(k);
  fill(k);
  rect(mouseX-(45/2), mouseY-(10/2), 45, 10);
}

function cvRainbowRoad(lx,ly,px,py) {
  setRainbow();
  noStroke();
  fill(rainbow);
  rect(mouseX-(65/2), mouseY-(30/2), 65, 30)
}

function cvFirePath(k, lx, ly,) {
  let r = random(15);
  fill(k);
  noStroke();
  for (let i = 0; i < r; i++){
    let lw = random(5, 30);
    let lh = random(5, 30); 
    let srx = random(-40,40);
    let sry = random(-5,5);
    rect(lx+srx,ly+sry,lw,lh);
  }

}
