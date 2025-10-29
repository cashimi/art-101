// This contains the use of the Sounds, Scenemanager, and TouchGUI libraries
let wood, snd1;
let opi;
let images = [];
var commands = [];

let drink;
let splat;
let disgust;
let hooray;
let oof;
let explode;
let piano;
let vine;
let swordHit;
let swordEquip;
let jump;
let twentyone;
let click;

let calcu, zoom;
let one,two,three,four,five,six,seven,eight,nine,zero,divi,equal,reset,addition,subtraction;

var desk = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];
var wall = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
]; 


function preload() {
  snd1 = loadSound("assets/beat.mp3");
  wood = loadSound("assets/wood.mp3");
  opi = loadImage("assets/octo.png");
  office = loadSound("assets/office.mp3");
  
  mug = loadImage("assets/mug.png");
  rubber = loadImage("assets/rubber.png");
  couple = loadImage("assets/couple.png");
  windows = loadImage("assets/windows.png");
  clock = loadImage("assets/clock.png");
  pencil = loadImage("assets/pencil.png");
  calcApp = loadImage("assets/calcApp.png");
  zoomApp = loadImage("assets/zoomApp.png");
  bloxy = loadImage("assets/bloxy.png");
  baller = loadImage("assets/baller.png");
  doe = loadImage("assets/doe.png");
  noob = loadImage("assets/noob.png");
  rowind = loadImage("assets/rowind.png");
  roclock = loadImage("assets/roclock.png");

  images[0] = loadImage("assets/Inlet.png");
  images[1] = loadImage("assets/Weld.png");

  //sounds
  drink = loadSound('assets/drink.mp3');  
  splat = loadSound('assets/splat.mp3');
  disgust = loadSound('assets/disgust.mp3');
  hooray = loadSound('assets/hooray.mp3');
  oof = loadSound('assets/oof.mp3');
  explode = loadSound('assets/explode.mp3');
  piano = loadSound('assets/piano.mp3');
  vine = loadSound('assets/vine.mp3');
  swordHit = loadSound('assets/swordHit.mp3');
  swordEquip = loadSound('assets/swordEquip.mp3');
  jump = loadSound('assets/jump.mp3');
  paintball = loadSound('assets/paintball.mp3');
  twentyone = loadSound('assets/twentyone.mp3');
  click = loadSound('assets/click.mp3');  
}


// define your p5.play sprites as global objects first.
var ghosty;


// global manager object
var mgr;
let gui;

function setup() {
    createCanvas(1080, 700);
  //  console.log(hell);
    gui = createGui();
    mgr = new SceneManager();
    // Preload scenes. Preloading is normally optional
    // ... but needed if showNextScene() is used. have to put in that order
    mgr.addScene (intro);
    mgr.addScene (scene2);
    mgr.addScene (help);
    mgr.addScene (computer);
    mgr.addScene (calculator);
    mgr.addScene (zooming);
    mgr.addScene (scene3);
    mgr.showNextScene();

    calcu = createButton("calc", 54,54,39,56);
    zoom = createButton("zoom", 49,190, 50,33);


    one = createButton("1", 300,300, 50,50);
    two = createButton("2", 360,300, 50,50);
    three = createButton("3", 420,300, 50,50);
    addition = createButton("+", 480,300, 50,50);
  
    four = createButton("4", 300,360, 50,50);
    five = createButton("5", 360,360, 50,50);
    six = createButton("6", 420,360, 50,50);
    subtraction = createButton("-", 480,360, 50,50);
  
    seven = createButton("7", 300,420, 50,50);
    eight = createButton("8", 360,420, 50,50);
    nine = createButton("9", 420,420, 50,50);
    multi = createButton("*", 480,420, 50,50);
  
    zero = createButton("0", 300,480, 50,50);
    divi = createButton("/", 420,480, 50,50);
    equal = createButton("=", 480,480, 50,50);
    reset = createButton("C", 360,480, 50,50);

}

function draw()
{
    // pass the current draw function into the SceneManager
    mgr.draw();
}

function mousePressed()
{
   // pass the mousePressed message into the SceneManager
  mgr.mousePressed();
  click.play();
  click.setVolume(0.3);
}

//  function mouseMoved()
//  {
//    // pass the mouseMoved message into the SceneManager
//    mgr.handleEvent("mouseDragged");
// }

// function mouseDragged()
// {
//    // pass the mouseMoved message into the SceneManager
//     mgr.handleEvent("mouseDragged");
// }

function keyPressed()
{
    // You can optionaly handle the key press at global level...
    switch(key)
    {
        case '1':
            mgr.showScene( scene2 );
            break;
        case 't':
            mgr.showScene( computer );
            break;
        case 'T':
            mgr.showScene( computer );
            break;
         case 'r':
            mgr.showScene( scene3 );
            break;
        case 'R':
            mgr.showScene( scene3 );
            break;
        case 'h':
            mgr.showScene( help );
            break;
        case 'H':
            mgr.showScene( help );
            break;
}

    // ... then dispatch via the SceneManager.
    mgr.keyPressed();
}

function mapToBitMaps(arr,imgarr,lx,ly,rot,sc) {
    push();
    translate(lx,ly);
    rotate(radians(rot));
    scale(sc);
    let nuimg;
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[0].length; j++) {
                let value = arr[i][j];
                if ( value == 1 ) {
                    nuimg = imgarr[1];
                } else if ( value == 2 ){
                    nuimg = imgarr[2];
                } else if ( value == 3 ) {
                    nuimg = imgarr[3];
                } else if ( value == 3 ) {
                    nuimg = imgarr[3];
                } else if ( value == 4 ) {
                    nuimg = imgarr[4];
                } else if ( value == 5 ) {
                    nuimg = imgarr[5];
                } else {
                    nuimg = imgarr[0];
                }
            image(nuimg, j * 55, i * 55, 60, 60);
        }
    }
    pop();
}


//calculator functions
function addInput(char, sound) {
    commands[commands.length - 1] += char;
    if (sound) sound.play();
  }
  
  function evaluateInput() {
    let input = commands[commands.length - 1];
    let result = input.replace(/[^a-zA-Z0-9]/g, ''); // remove +, -, *, / if you want
    commands.push(result);
    hooray.play();
  }
  
  function clearInput() {
    commands = [''];
    drink.play();
  }