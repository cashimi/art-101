let counter = 0;
let r1,r2;
let guys;
let chat;
let colors;
let noob;
let green;
let bc;
let showMessages = true;

function setup() {
  createCanvas(500,500);
  bc = color(193,202,222);
  background(bc);
  fill(255);
  noob = color(245,205,47);
  green = color(40,127,70);

// ---------------------------- arrays
  chat = ["OOF!!", "yippee!", "noob", ":D", "grr", "obby master","gg","afk","oder alert","1v1","robux","hello robloxian","abc for hot gf"];
  colors = [color(27,42,53),color(13,105,172),color(75,151,75)];
  // grass = new Array(20);

  guys = new Array(10);
  downguys = new Array(5);

  //console.log(chat[int(random(chat.length))]);

  for (let i = 0; i < guys.length; i++) { 
    guys[i] = new cvRoblox(noob,neon(),colors[int(random(colors.length))],random(100,200),random(40,100),0,1,int(random(2)),chat[int(random(chat.length))]);
  }
  for (let i = 0; i < downguys.length; i++) { 
    downguys[i] = new cvRoblox(noob,neon(),colors[int(random(colors.length))],random(100,200),50,180,0.5,int(random(2)),chat[int(random(chat.length))]);
  }

  // r1 = new cvRoblox(noob,green,122,0, 0, 0,1);
  // r2 = new cvRoblox(noob,green,122,0, 0, 0,1);
}

function neon() {
  let r = int(random(2)) * 255;
  let g = int(random(2)) * 255;
  let b = int(random(2)) * 255;
  return color(r,g,b);
}

function draw() {
  background(bc);
  // ------------------------ grass
  fill(green);
  rect(0,400,500,100);

  for (let i = 0; i < guys.length; i++) {
    guys[i].displayAvatar();
    guys[i].updateAvatar();
  }

  for (let i = 0; i < downguys.length; i++) {
    downguys[i].displayAvatar();
    downguys[i].updateAvatar();
  }

  counter+=.1;
  // r1.displayAvatar();
  // r1.updateAvatar();

  // r2.displayAvatar();
  // r2.updateAvatar();
}

function keyPressed() {
  if (key == 'w'){
    for (let i = 0; i < guys.length; i++) {
      guys[i].togglewoman();
    }
  }
  if (key == 'm') {
    showMessages = !showMessages;
    console.log("hiding chat");
  }
}
