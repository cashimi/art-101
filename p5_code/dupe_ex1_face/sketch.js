let lxo = 50;
let lyo = 100;
let xSpeed = 3;
let ySpeed = 3;
let xlo = 50;
let ylo = 100;

function setup() {
  // put setup code here
  createCanvas(600, 600); //canvas size
  background(135, 206, 235); //background color
  }

function draw() {
//------------------------------------------- background color change
  let m = mouseX;
  let n = mouseY;
  if (m < width/2)  {
    background(n,30, 40, 107);
  } else {
    background(width-m,135, 206, 235);
}
// ----------------------------------------- testing for hover
  if ( m < 600) {
    if ( n < 200) {
      console.log("i'm like a bird");
    }
  }
  if ( m < 600) {
    if ( n > 470) {
      console.log("you're in the grass");
    }
  }
  if ( m > 300 &&  m < 400 ) {
    if ( n > 200 &&  n < 400 ) {
      r = random(255);
      g = random(255);
      b = random(255);
      fill(r,g,b)
      quad(300, 400, 500, 300, 300, 20, 100, 300);
      console.log("what is this...?");
    }
  } 
// ----------------------------------------- mouse pressed
  if(mouseIsPressed){
    if ( m < 599) {
      if ( n > 469) {
        console.log("hei!! how'd you find me!!");
        //------------------------------------------- start head/face
        fill(161,165,162); //head
        stroke(161,165,162);
        strokeWeight(5);
        square(xlo+100,ylo+99,200,30); 
        //eyebrows
        fill(0); //top
        stroke(0);
        strokeWeight(4);
        ellipse(xlo+222,ylo+135,27,35);
        ellipse(xlo+178,ylo+135,27,35);
        fill(161,165,162); // overlay
        stroke(161,165,162);
        ellipse(xlo+222,ylo+141,35,37);
        ellipse(xlo+178,ylo+141,35,37);
        //features
        fill("white");
        stroke(0);
        quad(xlo+155,ylo+260,xlo+245,ylo+260,xlo+220,ylo+230,xlo+180,ylo+230); //teeth
        fill("black");
        noStroke();
        ellipse(xlo+222,ylo+155,33,50); //eyes
        ellipse(xlo+178,ylo+155,33,50);
        stroke(0);
        quad(xlo+155,ylo+260,xlo+245,ylo+260,xlo+230,ylo+247,xlo+170,ylo+247); //mouth
      //------------------------------------------- moving
      xlo += xSpeed;
      ylo += ySpeed;
      let sizeFace = 200;
        if (xlo + 100 <= 0 || xlo + 100 + sizeFace >= width) {
          xSpeed *= -1; 
        }
        if (ylo + 100 <= 0 || ylo + 100 + sizeFace >= height) {
          ySpeed *= -1;
        }
      }
    }
  }
//------------------------------------------- background wicker
noStroke();
for (let i=15; i < width; i+=40) {
  let redValue = 95 + (i / width) * (95);   
  let greenValue = 116 + (i / width) * (116);
  let blueValue = 173 + (i / width) * (173); 
  if (i < height*.8) {
  fill(redValue,greenValue,blueValue);
  rect(0, i, width, 5);
  }
  fill(255);
  rect(i, 0, 5, height*.80);
}  
//------------------------------------------- background grass
  for (let i=-1; i < width; i += 30) {
    for (let j=height-120; j < height; j += 30) {
      fill(75,151,74);
      stroke(40,127,70);
      strokeWeight(2);
      rect(i+7,j+7,17,17);
    }
  }
//------------------------------------------- start head/face
  fill(255,213,40); //head
  stroke(245,205,47);
  strokeWeight(5);
  square(lxo+100,lyo+99,200,30); 
  //eyebrows
  fill(0); //top
  stroke(0);
  strokeWeight(4);
  ellipse(lxo+222,lyo+135,27,35);
  ellipse(lxo+178,lyo+135,27,35);
  fill(255,213,40); //yellow layer
  stroke(255,213,40);
  ellipse(lxo+222,lyo+141,35,37);
  ellipse(lxo+178,lyo+141,35,37);
  //features
  fill("white");
  stroke(0);
  ellipse(lxo+222,lyo+155,33,50); //eyes
  ellipse(lxo+178,lyo+155,33,50);
  quad(lxo+155,lyo+230,lxo+245,lyo+230,lxo+205,lyo+280,lxo+195,lyo+280); //teeth
  fill("black");
  ellipse(lxo+220,lyo+148,25,33); //puipls
  ellipse(lxo+176,lyo+148,25,33);
  quad(lxo+163,lyo+238,lxo+237,lyo+238,lxo+205,lyo+280,lxo+195,lyo+280); //mouth
//------------------------------------------- end head/face
//------------------------------------------- moving
lxo -= xSpeed;
lyo -= ySpeed;
let faceSize = 200;
  if (lxo + 100 <= 0 || lxo + 100 + faceSize >= width) {
    xSpeed *= -1; 
  }
  if (lyo + 100 <= 0 || lyo + 100 + faceSize >= height) {
    ySpeed *= -1;
  }
}//end of draw function