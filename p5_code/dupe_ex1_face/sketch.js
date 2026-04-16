let lxo = 50;
let lyo = 100;
let xSpeed = 3;
let ySpeed = 3;
let xlo = 50;
let ylo = 100;

let isActive = false;
let canvas;

function setup() {
  canvas = createCanvas(600, 600);
  noLoop(); // start paused until user clicks the sketch

  // activate when clicking inside canvas
  canvas.mousePressed(() => {
    if (!isActive) {
      isActive = true;
      loop();
    }
  });

  // deactivate when clicking outside canvas
  document.addEventListener("pointerdown", handleOutsideClick);
}

function handleOutsideClick(e) {
  if (!canvas || !canvas.elt) return;

  const rect = canvas.elt.getBoundingClientRect();
  const inside =
    e.clientX >= rect.left &&
    e.clientX <= rect.right &&
    e.clientY >= rect.top &&
    e.clientY <= rect.bottom;

  if (!inside && isActive) {
    isActive = false;
    noLoop();
  }
}

function draw() {
  const m = mouseX;
  const n = mouseY;
  const halfW = width * 0.5;
  const grassStart = height - 120;

  //------------------------------------------- background color change
  if (m < halfW) {
    background(n, 30, 40, 107);
  } else {
    background(width - m, 135, 206, 235);
  }

  //------------------------------------------- center hover shape
  if (m > 300 && m < 400 && n > 200 && n < 400) {
    fill(random(255), random(255), random(255));
    noStroke();
    quad(300, 400, 500, 300, 300, 20, 100, 300);
  }

  //------------------------------------------- hidden gray face on mouse press in grass
  if (mouseIsPressed && m < 599 && n > 469) {
    drawGrayFace(xlo, ylo);

    xlo += xSpeed;
    ylo += ySpeed;

    const sizeFace = 200;
    if (xlo + 100 <= 0 || xlo + 100 + sizeFace >= width) {
      xSpeed *= -1;
    }
    if (ylo + 100 <= 0 || ylo + 100 + sizeFace >= height) {
      ySpeed *= -1;
    }
  }

  //------------------------------------------- background wicker
  noStroke();
  for (let i = 15; i < width; i += 40) {
    const redValue = 95 + (i / width) * 95;
    const greenValue = 116 + (i / width) * 116;
    const blueValue = 173 + (i / width) * 173;

    if (i < height * 0.8) {
      fill(redValue, greenValue, blueValue);
      rect(0, i, width, 5);
    }

    fill(255);
    rect(i, 0, 5, height * 0.8);
  }

  //------------------------------------------- background grass
  fill(75, 151, 74);
  stroke(40, 127, 70);
  strokeWeight(2);
  for (let i = -1; i < width; i += 30) {
    for (let j = grassStart; j < height; j += 30) {
      rect(i + 7, j + 7, 17, 17);
    }
  }

  //------------------------------------------- main yellow face
  drawYellowFace(lxo, lyo);

  //------------------------------------------- moving
  lxo -= xSpeed;
  lyo -= ySpeed;

  const faceSize = 200;
  if (lxo + 100 <= 0 || lxo + 100 + faceSize >= width) {
    xSpeed *= -1;
  }
  if (lyo + 100 <= 0 || lyo + 100 + faceSize >= height) {
    ySpeed *= -1;
  }
}

function drawYellowFace(x, y) {
  fill(255, 213, 40);
  stroke(245, 205, 47);
  strokeWeight(5);
  square(x + 100, y + 99, 200, 30);

  fill(0);
  stroke(0);
  strokeWeight(4);
  ellipse(x + 222, y + 135, 27, 35);
  ellipse(x + 178, y + 135, 27, 35);

  fill(255, 213, 40);
  stroke(255, 213, 40);
  ellipse(x + 222, y + 141, 35, 37);
  ellipse(x + 178, y + 141, 35, 37);

  fill("white");
  stroke(0);
  ellipse(x + 222, y + 155, 33, 50);
  ellipse(x + 178, y + 155, 33, 50);
  quad(x + 155, y + 230, x + 245, y + 230, x + 205, y + 280, x + 195, y + 280);

  fill("black");
  ellipse(x + 220, y + 148, 25, 33);
  ellipse(x + 176, y + 148, 25, 33);
  quad(x + 163, y + 238, x + 237, y + 238, x + 205, y + 280, x + 195, y + 280);
}

function drawGrayFace(x, y) {
  fill(161, 165, 162);
  stroke(161, 165, 162);
  strokeWeight(5);
  square(x + 100, y + 99, 200, 30);

  fill(0);
  stroke(0);
  strokeWeight(4);
  ellipse(x + 222, y + 135, 27, 35);
  ellipse(x + 178, y + 135, 27, 35);

  fill(161, 165, 162);
  stroke(161, 165, 162);
  ellipse(x + 222, y + 141, 35, 37);
  ellipse(x + 178, y + 141, 35, 37);

  fill("white");
  stroke(0);
  quad(x + 155, y + 260, x + 245, y + 260, x + 220, y + 230, x + 180, y + 230);

  fill("black");
  noStroke();
  ellipse(x + 222, y + 155, 33, 50);
  ellipse(x + 178, y + 155, 33, 50);

  stroke(0);
  quad(x + 155, y + 260, x + 245, y + 260, x + 230, y + 247, x + 170, y + 247);
}