let recMode = false;
let can;

let crazyTriangle;
let bounceCircles;
let sineWaveBoids;
let quickSort;

function setup() {
  can = createCanvas(710, 400);
  frameRate(10);

  crazyTriangle = new Array(40);
  // Initialize the triangles with custom colors
  for (let i = 0; i < crazyTriangle.length; i++) {
    crazyTriangle[i] = new cvTriMotion(
      10,                    // num
      100,                   // range
      color(150),           // stroke color
      [random(255), random(255), random(255)],   // fill color (red only)
      random(10, 50)        // opacity
    );
  }
  
  // Initialize the particle system
  bounceCircles = new Array(15);
  for (let i = 0; i < bounceCircles.length; i++) {
    bounceCircles[i] = new cvFunkForces(10);
  }
  
  // Initialize the sine wave boids
  sineBoid = new Array(100);
  for (let i = 0; i < sineBoid.length; i++) {
    sineBoid[i] = new cvSineFlock(100, height/2);
  }

  // Initialize the quicksort visualization
  quickSort = new QuickSort();
  quickSort.initialize();
}

function draw() {
  background(15);

  // Display the quicksort visualization
  quickSort.display();
  
  if (frameCount < 50) {
    console.log("Act I");
    // Update and display all triangles
    for (let i = 0; i < crazyTriangle.length; i++) {
        crazyTriangle[i].display();
        crazyTriangle[i].update();
    }

  } else if (frameCount < 200) {
    console.log("Act TEST");
    for (let i = 0; i < bounceCircles.length; i++) {
      bounceCircles[i].update();
      bounceCircles[i].display();
    }
    fill(15);
    rect(0, 0, 710, 400);
    for (let i = 0; i < crazyTriangle.length; i++) {
      crazyTriangle[i].display();
      crazyTriangle[i].update();
    }
    
  } else if (frameCount < 500) {
    console.log("Act II");
    for (let i = 0; i < crazyTriangle.length; i++) {
      crazyTriangle[i].display();
      crazyTriangle[i].update();
    }
    // Update and display particle system
    for (let i = 0; i < bounceCircles.length; i++) {
      bounceCircles[i].update();
      bounceCircles[i].display();
    }
  } else {
    console.log("Act III");
     // Update and display sine wave boids
     let sincount = sin(frameCount * 0.1) * 50 + 200;
     for (let i = 0; i < sineBoid.length; i++) {
       sineBoid[i].update(sincount);
       sineBoid[i].display();
     }
    // Update and display particle system
    for (let i = 0; i < bounceCircles.length; i++) {
      bounceCircles[i].update();
      bounceCircles[i].display();
    }
  }
  recordit();
}

function keyPressed() {

  if (keyIsPressed === true) {
      let k = key;
      console.log("k is " + k);

      if (k == 's' || k == 'S') {
          console.log("Stopped Recording");
          recMode = false;
          noLoop();
      }

      if (k == ' ') {
          console.log("Start Recording");
          recMode = true;
          loop();
      }
  }
}

function recordit() {  // new version
  if (recMode == true) {
      let ext = nf(frameCount,4);
      saveCanvas(can, 'frame-' + ext, 'jpg');
      console.log("rec " + ext);
  }
}