let bgcounter = 255; // changing bg color
let counter = 0;
let subcounter = 600;
let cx, cy;
let bgc;
let grav;
let speed;
let regen;
let oldroblox;
let land;
let gridSize;

let isActive = false;
let canvas;

function preload() {
  oldroblox = loadFont("assets/oldroblox.ttf");
  grav = loadImage("assets/gravcoil.png");
  speed = loadImage("assets/speedcoil.png");
  regen = loadImage("assets/regencoil.png");
  land = loadImage("assets/roblox.png");
}

function setup() {
  canvas = createCanvas(600, 600);
  background(255);
  bgc = color(20, 1);
  cx = width / 2;
  cy = height / 2;
  gridSize = 100;
  textSize(40);
  fill(255);

  noLoop(); // start paused until user clicks the sketch

  canvas.mousePressed(() => {
    if (!isActive) {
      isActive = true;
      loop();
    }
  });

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
  fill(bgc);
  noStroke();
  rect(0, 0, width, height);

  wickerBackground();

  //------------------------------------------- controls
  switch (key) {
    case "a":
      cx += -gridSize;
      image(speed, cx, cy, gridSize, gridSize);
      break;

    case "w":
      cy += -gridSize;
      image(grav, cx, cy, gridSize, gridSize);
      break;

    case "d":
      cx += gridSize;
      image(speed, cx, cy, gridSize, gridSize);
      break;

    case "s":
      cy += gridSize;
      image(regen, cx, cy, gridSize, gridSize);
      break;

    case "q":
      fill(40, 127, 70);
      textFont(oldroblox);
      text("robux??!", cx + random(-20, 20), cy + random(-20, 20), 200);
      break;

    case "r":
      fill(255, 0, 0);
      textFont(oldroblox);
      text("roblox is life", cx, cy, 300);
      break;

    case "b":
      image(land, 0, 0, 600, 600);
      break;

    default:
      break;
  }

  key = "";
}

function keyPressed() {
  if (key == "t" || key == "T") {
    if ((counter == 0, subcounter == 600)) {
      counter = 0;
      subcounter = 600;
    } else {
      counter = 0;
      subcounter = 600;
    }
  }
}

function wickerBackground() {
  if (frameCount % 20 == 0) {
    noStroke();

    // top left
    fill(245, 205, 47, 120);
    ellipse(0, counter, width - random(50), 10);

    fill(194, 218, 184, 120);
    ellipse(counter, 0, 10, height - random(50));

    // bottom right
    fill(232, 186, 199, 120);
    ellipse(600, subcounter, width - random(50), 10);

    fill(13, 105, 171, 120);
    ellipse(subcounter, 600, 10, height - random(50));

    // movement
    if (counter > height) {
      background(bgcounter);
      bgcounter += 225;
      counter = 0;
      subcounter = 600;
    } else {
      counter += 40;
      subcounter -= 40;
    }
  }
}