
// =============================================================
// =                         BEGIN SCENES                      =
// =============================================================

// exmample of global var that can be used between scenes
let loy= 0;
let capture;
let captureReady = false;
let guys, noob;

////////////////////////////// computer interface /////////////////
function computer() {
  this.setup = function()  {
      console.log("This is my work computer.");
      background(255);
  }

  this.enter = function() {
     console.log("--");
     console.log("What should I do?");
     snd1.stop();
     one.visible = false;
     two.visible = false;
     three.visible = false;
     addition.visible = false;
     four.visible = false;
     five.visible = false;
     six.visible = false;
     subtraction.visible = false;
     seven.visible = false;
     eight.visible = false;
     nine.visible = false;
     multi.visible = false;
     zero.visible = false;
     divi.visible = false;
     equal.visible = false;
     reset.visible = false;
  }

 this.draw = function() {
  textAlign(LEFT);
  image(windows,0, 0, 1080, 700);//background
  drawGui();
  if (calcu.isPressed ) {
    this.sceneManager.showScene(calculator);
  }
  push();
  image(calcApp,50,50, 50, 72.75);
  textSize(17);
  fill(0);
  text('Calculator',39,145);

  textSize(70);
  textStyle(ITALIC);
  fill(255);
  text("Welcome, User.",500,530);
  textSize(20);
  fill(255, 255, 136);
  rect(900,30,150,150); //yellow
  fill(0);
  text('double click applications to open',920,70,130);
  
  pop();
 }


}

////////////////////////////// calculator /////////////////
function calculator() {

  this.setup = function() {
    commands[0] = '';
    background(255);
    fill(255);
 }
 
 this.enter = function() {
   console.log("--");
   console.log("Every accountant needs their calculator.");
   one.visible = true;
   two.visible = true;
   three.visible = true;
   addition.visible = true;
   four.visible = true;
   five.visible = true;
   six.visible = true;
   subtraction.visible = true;
   seven.visible = true;
   eight.visible = true;
   nine.visible = true;
   multi.visible = true;
   zero.visible = true;
   divi.visible = true;
   equal.visible = true;
   reset.visible = true;
 }
 
  this.draw = function() {
    image(windows,0, 0, 1080, 700);//background
    fill(35,71,139);
    rect(280,200,270,350);
    fill(255);
    rect(300,220,230,70);
    fill(200,50,100);
    textSize(40);
    textAlign(RIGHT);
    let current = commands[commands.length - 1] || '';
    text(current, 510, 270);
  // buttons  
    drawGui();
     if (one.isPressed ) {
      addInput('1');
//      print(one.label + " is pressed.");
      disgust.play();
      disgust.setVolume(0.2);
    } else if (two.isPressed) {
      addInput('2');
//      print(two.label + " is pressed.");
      vine.play();
      vine.setVolume(0.2);
      //drink.setVolume(0.2);
    } else if (three.isPressed) {
      addInput('3');
//      print(three.label + " is pressed.");
      explode.play();
    } else if (four.isPressed) {
      addInput('4');
 //     print(four.label + " is pressed.");
      hooray.play();
      hooray.setVolume(0.2);
    } else if (five.isPressed) {
      addInput('5');
//      print(five.label + " is pressed.");
      jump.play();
    } else if (six.isPressed) {
      addInput('6');
//      print(six.label + " is pressed.");
      oof.play();
    } else if (seven.isPressed) {
      addInput('7');
//      print(seven.label + " is pressed.");
      piano.play();
      piano.setVolume(0.2);
    } else if (eight.isPressed) {
      addInput('8');
//      print(eight.label + " is pressed.");
      splat.play();
    } else if (nine.isPressed) {
      addInput('9');
//      print(nine.label + " is pressed.");
      swordEquip.play();
      swordEquip.setVolume(0.2);
    } else if (zero.isPressed) {
      addInput('0');
//     print(zero.label + " is pressed.");
      swordHit.play();
      swordHit.setVolume(0.2);
    } else if (addition.isPressed) {
      addInput('+');
//      print(addition.label + " is pressed.");
      paintball.play();
    } else if (reset.isPressed) {
      clearInput();
      print("Cleared.");
      drink.play();
      drink.setVolume(0.2);
    } else if (subtraction.isPressed || multi.isPressed || divi.isPressed) {
      print("*sorry chat, i didn't have time to do these functions*");
      paintball.play();
      paintball.setVolume(0.2);
    } else if (equal.isPressed) {
      evaluateInput()
//      print(equal.label + " is pressed.");
      hooray.play();
      hooray.setVolume(0.2);
    }
    push();
    textAlign(LEFT);
    if (calcu.isPressed ) {
      this.sceneManager.showScene(calculator);
    }
    image(calcApp,50,50, 50, 72.75);
    textSize(17);
    fill(0);
    text('Calculator',39,145);
 } 

} //end button

////////////////////////////// 1 main (splash) /////////////////
function intro()  {
    this.setup = function() {
      console.log("Simulation Splash/Help Screen");
      textAlign(CENTER);
      textSize(29);
    }

    // enter() will be called each time SceneManager switches
    // to this scene
    this.enter = function()  {
      office.play();
      background(161,165,162);
      if (office.isPlaying()) {
          office.pause(); // .play() will resume from .pause() position
      } else {
          office.play();
          office.setVolume(0.3);
      }

    }


    this.draw = function() {
      background(156,163,168);
      push();
        noStroke();
        fill(255);
        //wall shi
        mapToBitMaps(wall,images,1,172,0,1.03);
        fill(109,110,108,120);//opacity for wall
        rect(0,170,1080,400);//wall
        //desk shi 
        fill(255);
        rect(0,570,1080,200);//desk
        mapToBitMaps(desk,images,0,575,0,1.09);
        fill(98,71,50,180);//opacity for desk
        rect(0,570,1080,200);//desk
      //-----------------------------------------office misc.
        textSize(20);
        //stickies
        fill(255,101,163);
        rect(860,250,110,110); //pink
        fill(0);
        text('Take adderall',865,275,100);
        fill(122,252,255);
        rect(900,310,110,110); //blue
        fill(0);
        text('meeting with Boss @ 1PM!!',905,330,100);
        //computer
        fill(100);
        rectMode(CENTER);
        rect((1080/2), (700/2)+20, 560, 350);
        triangle(360, 600, 540, 430, 720, 600);
        fill(0,0,100);
        rect((1080/2), (700/2)+20, 520, 310);
        image(windows,280, 215, 520, 310);
        fill(255, 255, 136);
        rect(340,560,110,55); //yellow
        fill(0);
        text('password: H',340,540,100);
        fill(255, 255, 136);
        // rect(740,560,110,55); //yellow
        // fill(0);
        // text("'H': open computer",740,535,100);
      pop();

    }//end draw

    // this.keyPressed = function() {
    //
    //
    // }

    this.mousePressed = function()
    {

        this.sceneManager.showNextScene();
    }
  
}