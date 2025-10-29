// ------------------- Brownian Motion -------------------
class cvTriMotion {
  constructor(num, range, strokeColor = 255, fillColor = [255, 0, 0], opacity = 70) {
      this.num = num;
      this.range = range;
      this.ax = [];
      this.ay = [];
      this.strokeColor = strokeColor;
      this.fillColor = fillColor;
      this.opacity = opacity;
      
      for (let i = 0; i < this.num; i++) {
        this.ax[i] = width / 2;
        this.ay[i] = height / 2;
      }
    }
    
    // Method to set new colors
    setColors(stroke, fill, opacity) {
      this.strokeColor = stroke;
      this.fillColor = fill;
      this.opacity = opacity;
    }
    
    display() {
      // Draw a line connecting the points
      for (let j = 1; j < this.num; j++) {
        let val = j / this.num * 204.0 + 51;
        // stroke(this.strokeColor);
        noStroke();
        fill(this.fillColor[0], this.fillColor[1], this.fillColor[2], this.opacity);
        triangle(this.ax[j - 1], this.ay[j - 1], this.ax[j], this.ay[j],this.ax[(j + 1) % this.num], this.ay[(j + 1) % this.num]);
      }
    }

    update() {
      // Shift all elements 1 place to the left
      for (let i = 1; i < this.num; i++) {
        this.ax[i - 1] = this.ax[i];
        this.ay[i - 1] = this.ay[i];
      }
      
      // Put a new value at the end of the array
      this.ax[this.num - 1] += random(-this.range, this.range);
      this.ay[this.num - 1] += random(-this.range, this.range);
      
      // Constrain all points to the screen
      this.ax[this.num - 1] = constrain(this.ax[this.num - 1], 0, width);
      this.ay[this.num - 1] = constrain(this.ay[this.num - 1], 0, height);
    }
  }
  
// ------------------- Forces -------------------
class cvFunkForces {
  constructor(numParticles) {
    this.numParticles = numParticles;
    this.movers = [];
    this.liquid = new Liquid(0, height/2, width, height/2, 0.2);
    this.reset();
  }
  
  reset() {
    for (let i = 0; i < this.numParticles; i++) {
      this.movers[i] = new Mover(random(0.5, 3), 40 + i * 70, 0);
    }
  }
  
  update() {
    for (let i = 0; i < this.movers.length; i++) {
      // Check if in liquid and apply drag
      if (this.liquid.contains(this.movers[i])) {
        let dragForce = this.liquid.calculateDrag(this.movers[i]);
        this.movers[i].applyForce(dragForce);
      }
      
      // Apply gravity based on position
      let gravityStrength = this.movers[i].position.y < height/2 ? 0.8 : 0.3;
      let gravity = createVector(0, gravityStrength * this.movers[i].mass);
      this.movers[i].applyForce(gravity);
      
      // Update particle
      this.movers[i].update();
      this.movers[i].checkEdges();
    }
  }
  
  display() {
    for (let mover of this.movers) {
      mover.display();
    }
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
  strokeWeight(0);
  fill(10,100,random(255),150);
  ellipse(this.position.x, this.position.y, this.mass * 14, this.mass * 14); //changes ball size
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

class cvSineFlock {
  constructor(x, y) {
    this.position = createVector(x, y);
    this.velocity = createVector(0, 0);
    this.acceleration = createVector(0, 0);
    this.r = 5.0;
    this.maxspeed = 12;
    this.maxforce = 0.3;
    this.offset = random(0, TWO_PI);
  }

  update(sincount) {
    // Calculate sine wave motion with larger amplitude
    let targetX = frameCount % width;
    let targetY = sincount + sin(frameCount * 0.3 + this.offset) * 50;
    
    // Create a force towards the target
    let target = createVector(targetX, targetY);
    let desired = p5.Vector.sub(target, this.position);
    desired.normalize();
    desired.mult(this.maxspeed);
    
    let steer = p5.Vector.sub(desired, this.velocity);
    steer.limit(this.maxforce);
    
    this.velocity.add(steer);
    this.velocity.limit(this.maxspeed);
    this.position.add(this.velocity);
    
    // Wrap around edges
    if (this.position.x > width) this.position.x = 0;
    if (this.position.x < 0) this.position.x = width;
    if (this.position.y > height) this.position.y = 0;
    if (this.position.y < 0) this.position.y = height;
  }

  display() {
    // Draw a triangle rotated in the direction of velocity
    let theta = this.velocity.heading() + radians(90);
    fill(random(255), random(255), random(255), 150);
    push();
    translate(this.position.x, this.position.y);
    rotate(theta);
    beginShape();
    vertex(0, -this.r * 2);
    vertex(-this.r, this.r * 4);
    vertex(this.r, this.r * 4);
    endShape(CLOSE);
    pop();
  }
}
  
class QuickSort {
  constructor(canvasWidth, canvasHeight) {
    this.values = [];
    this.states = [];
    this.barWidth = 8;
    this.sorting = false;
    this.speed = 150;
    this.isComplete = false;
    this.animationSpeed = 0.08;
    this.targetValues = [];
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.sortQueue = [];
    this.currentPartition = null;
  }

  initialize() {
    this.values = [];
    this.states = [];
    this.targetValues = [];
    this.isComplete = false;
    this.sortQueue = [];
    
    // Initialize with random heights
    for(let i = 0; i < this.canvasWidth/this.barWidth; i++) {
      let height = random(20, this.canvasHeight/2);
      this.values.push(height);
      this.targetValues.push(height);
      this.states.push(-1);
    }
    
    this.sorting = true;
    // Start with the full range
    this.sortQueue.push({start: 0, end: this.values.length - 1});
    // Start the sorting process
    this.processSortQueue();
  }

  async processSortQueue() {
    if (this.sortQueue.length === 0) {
      // If queue is empty, add a new partition to sort
      this.sortQueue.push({start: 0, end: this.values.length - 1});
    }
    
    const {start, end} = this.sortQueue.shift();
    if (start < end) {
      const pivotIndex = await this.partition(start, end);
      // Add left and right partitions to queue
      this.sortQueue.push({start: start, end: pivotIndex - 1});
      this.sortQueue.push({start: pivotIndex + 1, end: end});
    }
    
    // Continue processing
    setTimeout(() => this.processSortQueue(), this.speed);
  }

  async partition(start, end) {
    for (let i = start; i < end; i++) {
      this.states[i] = 1;
    }
    
    let pivotIndex = start;
    this.states[pivotIndex] = 0;
    let pivotElement = this.values[end];
    
    for (let i = start; i < end; i++) {
      if (this.values[i] < pivotElement) {
        await this.swap(i, pivotIndex);
        this.states[pivotIndex] = -1;
        pivotIndex++;
        this.states[pivotIndex] = 0;
      }
    }
    
    await this.swap(end, pivotIndex);
    
    for (let i = start; i < end; i++) {
      if (i != pivotIndex) {
        this.states[i] = -1;
      }
    }
    return pivotIndex;
  }

  async swap(i, j) {
    // Update target values for smooth animation
    this.targetValues[i] = this.values[j];
    this.targetValues[j] = this.values[i];
    
    // Wait for the animation
    await this.sleep(this.speed);
    
    // Update actual values
    let temp = this.values[i];
    this.values[i] = this.values[j];
    this.values[j] = temp;
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  display() {
    // Smoothly animate values to their targets
    for(let i = 0; i < this.values.length; i++) {
      this.values[i] = lerp(this.values[i], this.targetValues[i], this.animationSpeed);
    }
    
    // Draw the bars
    for(let i = 0; i < this.values.length; i++) {
      if (this.states[i] == 0) {
        fill('#E0777D');  // pivot
      } else if (this.states[i] == 1) {
        fill('#D6FFB7');  // being sorted
      } else {
        fill(255, 150);   // default, more transparent
      }
      rect(i * this.barWidth, this.canvasHeight - this.values[i], this.barWidth, this.values[i]);
    }
  }
}

  