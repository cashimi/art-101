// Nine moving bodies
let movers = [];
// Liquid
let liquid;
//-------------------------------- water
let num = 10; // fade
let range = 100; // line length
let ax = [];
let ay = [];


function setup() {
  createCanvas(710, 400);
  for ( let i = 0; i < num; i++ ) {
    ax[i] = width / 2; //start location
    ay[i] = height / 2;
  }
  frameRate(20);//speed
//-------------------------------- water
  reset();
  // Create liquid object - set it to a fixed position
  liquid = new Liquid(0, height/2, width, height/2, 0.2);
  //                  x, y       , width, height  , drag
}

function draw() {
  background(162);

  // Shift all elements 1 place to the left, if change here --> change in draw line too
  for ( let i = 1; i < num; i++ ) { // if this value 15 and everythine below 5, creates a connected line that follows
    ax[i - 1] = ax[i];
    ay[i - 1] = ay[i];
  }
  // Put a new value at the end of the array, same as below: prob don't need to change at all
  ax[num - 1] += random(-range, range);
  ay[num - 1] += random(-range, range);
  // Constrain all points to the screen, maybe dont change cos this is border
  ax[num - 1] = constrain(ax[num - 1], 0, width);
  ay[num - 1] = constrain(ay[num - 1], 0, height);

  // Draw a line connecting the points
  for ( let j = 1; j < num; j++ ) {
    let val = j / num * 204.0 + 51;
    stroke(val);
    fill(color(random(255),0,0,70));
    triangle(ax[j - 1], ay[j - 1], ax[j], ay[j], ax[(j + 1) % num], ay[(j + 1) % num]);
  }
//-------------------------------- water
    // Draw water
    for (let i = 0; i < movers.length; i++) {
      // Is the Mover in the liquid?
      if (liquid.contains(movers[i])) {
        // Calculate drag force
        let dragForce = liquid.calculateDrag(movers[i]);
        // Apply drag force to Mover
        movers[i].applyForce(dragForce);
      }
      // Different gravity based on position
      let gravityStrength;
      if (movers[i].position.y < height/2) {
        gravityStrength = 0.5; // Stronger gravity in top half (increase this number to fall faster)
      } else {
        gravityStrength = 0.1; // Normal gravity in bottom half where drag is
      }
      
      let gravity = createVector(0, gravityStrength * movers[i].mass);
      // Apply gravity
      movers[i].applyForce(gravity);
      // Update and display
      movers[i].update();
      movers[i].display();
      movers[i].checkEdges();
    }
}

function mousePressed() {
  reset();
}

// Restart all the Mover objects randomly
function reset() {
  for (let i = 0; i < 15; i++) { // # of balls
    movers[i] = new Mover(random(0.5, 3), 40 + i * 70, 0);
  }
}

let Liquid = function(x, y, w, h, c) {
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.c = c;
};

// Is the Mover in the Liquid?
Liquid.prototype.contains = function(m) {
  let l = m.position;
  return (
    l.x > this.x &&
    l.x < this.x + this.w &&
    l.y > this.y &&
    l.y < this.y + this.h
  );
};

// Calculate drag force
Liquid.prototype.calculateDrag = function(m) {
  // Magnitude is coefficient * speed squared
  let speed = m.velocity.mag();
  let dragMagnitude = this.c * speed * speed;

  // Direction is inverse of velocity
  let dragForce = m.velocity.copy();
  dragForce.mult(-1);

  // Scale according to magnitude
  // dragForce.setMag(dragMagnitude);
  dragForce.normalize();
  dragForce.mult(dragMagnitude);
  return dragForce;
};

Liquid.prototype.display = function() {
  noStroke();
  fill(50);
  rect(this.x, this.y, this.w, this.h);
};

function Mover(m, x, y) {
  this.mass = m;
  this.position = createVector(x, y);
  this.velocity = createVector(0, 0);
  this.acceleration = createVector(0, 0);
}

// Newton's 2nd law: F = M * A
// or A = F / M
Mover.prototype.applyForce = function(force) {
  let f = p5.Vector.div(force, this.mass);
  this.acceleration.add(f);
};

Mover.prototype.update = function() {
  // Velocity changes according to acceleration
  this.velocity.add(this.acceleration);
  // position changes by velocity
  this.position.add(this.velocity);
  // We must clear acceleration each frame
  this.acceleration.mult(0);
};

Mover.prototype.display = function() {
  stroke(255);
  strokeWeight(2);
  fill(0,105,random(255),75);
  ellipse(this.position.x, this.position.y, this.mass * 16, this.mass * 16); //changes ball size
};

// Bounce off bottom of window
Mover.prototype.checkEdges = function() {
  if (this.position.y > height - this.mass * 8) {
    // Reset position to top when hitting bottom
    this.position.y = 0;
    this.position.x = 40 + random(width - 80); // Random x position with some margin
    this.velocity = createVector(0, 0); // Reset velocity
  }
};
