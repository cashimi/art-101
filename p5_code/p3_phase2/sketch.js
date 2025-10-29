
var hangyodonArr = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 2, 4, 2, 4, 2, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 1, 1, 5, 5, 5, 1, 1, 1, 1, 5, 5, 5, 1, 1, 0, 0, 0],
    [0, 0, 0, 1, 5, 5, 5, 5, 5, 1, 1, 5, 5, 5, 5, 5, 1, 0, 0, 0],
    [0, 2, 2, 1, 5, 5, 5, 4, 5, 1, 1, 5, 4, 5, 5, 5, 1, 2, 2, 0],
    [0, 2, 4, 1, 5, 5, 5, 5, 5, 1, 1, 5, 5, 5, 5, 5, 1, 4, 2, 0],
    [0, 2, 2, 1, 1, 5, 5, 5, 1, 1, 1, 1, 5, 5, 5, 1, 1, 2, 2, 0],
    [0, 2, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 2, 0],
    [0, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 0],
    [0, 0, 3, 3, 4, 4, 4, 4, 3, 3, 3, 3, 4, 4, 4, 4, 3, 3, 0, 0],
    [0, 0, 0, 3, 3, 3, 3, 3, 4, 4, 4, 4, 3, 3, 3, 3, 3, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

var gudArr = [
    [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
    [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
    [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
    [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
    [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 5, 5, 3, 3],
    [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 2, 5, 0, 0, 0, 3],
    [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 2, 0, 0, 0, 0, 0, 0],
    [3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [3, 3, 3, 3, 3, 3, 3, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [3, 3, 3, 3, 3, 3, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [3, 3, 3, 3, 3, 3, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [3, 3, 3, 3, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [3, 3, 3, 2, 4, 0, 1, 1, 0, 0, 1, 1, 0, 5, 0, 0, 0, 5, 0, 0],
    [3, 3, 2, 4, 4, 2, 0, 0, 0, 0, 0, 0, 5, 0, 0, 5, 2, 2, 5, 5],
    [3, 3, 2, 4, 4, 4, 2, 2, 2, 2, 2, 5, 0, 0, 5, 2, 2, 2, 2, 4],
    [3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 5, 5, 5, 2, 2, 2, 2, 4, 4],
    [3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3],
    [3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3],
    [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
    [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3]
];
   

var keropArr = [
    [5,5,5,5,5,2,5,5,5,5,5,5,2,5,5,5,5,5],
    [5,5,5,5,2,2,2,5,5,5,5,2,2,2,5,5,5,5],
    [5,5,5,2,2,2,2,2,5,5,2,2,2,2,2,5,5,5],
    [5,5,2,2,2,2,2,2,2,2,2,2,2,2,2,2,5,5],
    [5,2,2,2,2,2,1,2,2,2,2,1,2,2,2,2,2,5],
    [5,5,2,2,2,2,2,2,2,2,2,2,2,2,2,2,5,5],
    [5,5,5,2,2,2,2,2,0,0,2,2,2,2,2,5,5,5],
    [5,5,5,0,0,0,0,0,0,0,0,0,0,0,0,5,5,5],
    [5,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,5],
    [5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5],
    [0,3,3,3,0,0,0,0,0,0,0,0,0,0,3,3,3,0],
    [0,3,3,3,0,0,0,0,0,0,0,0,0,0,3,3,3,0],
    [0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0],
    [0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0],
    [5,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,5],
    [5,5,0,0,0,0,0,0,1,1,0,0,0,0,0,0,5,5],
];
  
var birdArr = [
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,1,0,2,2,0,1,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,1,2,2,2,2,1,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,2,1,2,2,2,2,1,2,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,2,1,4,2,2,4,1,2,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,2,1,2,2,5,5,1,2,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,2,1,2,2,2,2,1,2,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,1,2,2,2,2,1,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,1,2,2,2,2,1,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,3,3,3,2,2,3,3,3,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,3,3,2,2,2,2,3,3,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,2,1,2,2,2,2,1,2,0,0,0,0,0,0,0,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
];

var birdText = [
    ['you','you','you','you','you','you','you','you','you','you','you','you','you','you','you','you','you','you','you','you','you','you','you','you','you'],
    ['you','...','...','...','...','...','...','...','...','...','you','...','...','...','...','you','...','...','...','...','...','...','...','...','you'],
    ['you','...','...','...','...','...','...','...','...','...','you','...','...','...','...','you','...','...','...','...','...','...','...','...','you'],
    ['you','...','...','...','...','...','...','...','...','...','you','...','...','...','...','you','...','...','...','...','...','...','...','...','you'],
    ['you','...','...','...','...','...','...','...','...','...','you','...','...','...','...','you','...','...','...','...','...','...','...','...','you'],
    ['you','...','...','...','...','...','...','...','...','...','you','...','...','...','...','you','...','...','...','...','...','...','...','...','you'],
    ['you','...','...','...','...','...','...','...','...','...','you','...','...','...','...','you','...','...','...','...','...','...','...','...','you'],
    ['you','...','...','...','...','...','...','...','...','...','you','...','...','...','...','you','...','...','...','...','...','...','...','...','you'],
    ['you','...','...','...','...','...','...','...','...','...','you','...','...','...','...','you','...','...','...','...','...','...','...','...','you'],
    ['you','...','...','...','...','...','...','...','...','...','you','...','...','...','...','you','...','...','...','...','...','...','...','...','you'],
    ['you','...','...','...','...','...','...','...','...','...','you','...','...','...','...','you','...','...','...','...','...','...','...','...','you'],
    ['you','...','...','...','...','...','...','...','...','...','you','...','...','...','...','you','...','...','...','...','...','...','...','...','you'],
    ['you','...','...','...','...','...','...','...','...','...','you','...','...','...','...','you','...','...','...','...','...','...','...','...','you'],
    ['you','...','...','...','...','...','...','...','...','...','you','...','truth','truth','...','you','...','...','...','...','...','...','...','...','you'],
    ['you','...','...','...','...','...','...','...','...','...','you','truth','truth','truth','truth','you','...','...','...','...','...','...','...','...','you'],
    ['you','...','...','...','...','...','...','...','...','truth','you','truth','truth','truth','truth','you','truth','...','...','...','...','...','...','...','you'],
    ['you','...','...','...','...','...','...','...','...','truth','you','mind','truth','truth','mind','you','truth','...','...','...','...','...','...','...','you'],
    ['you','...','...','...','...','...','...','...','...','truth','you','truth','truth','lie','lie','you','truth','...','...','...','...','...','...','...','you'],
    ['you','...','...','...','...','...','...','...','...','truth','you','truth','truth','truth','truth','you','truth','...','...','...','...','...','...','...','you'],
    ['you','...','...','...','...','...','...','...','...','...','you','truth','truth','truth','truth','you','...','...','...','...','...','...','...','...','you'],
    ['you','...','...','...','...','...','...','...','...','...','you','truth','truth','truth','truth','you','...','...','...','...','...','...','...','...','you'],
    ['you','...','...','...','...','...','...','...','...','truth','you','truth','truth','truth','truth','you','truth','...','...','...','...','...','...','...','you'],
    ['you','...','...','...','...','...','...','...','...','truth','you','truth','truth','truth','truth','you','truth','...','...','...','...','...','...','...','you'],
    ['you','...','...','...','...','...','...','...','...','truth','you','truth','truth','truth','truth','you','truth','...','...','...','...','...','...','...','you'],
    ['you','you','you','you','you','you','you','you','you','you','you','you','you','you','you','you','you','you','you','you','you','you','you','you','you']
];

let words = ['ugly','stupid','freak','loser','bozo','ratio-ed','noob','dumb','burden','pathetic','sleazy'];
 
let images =[];
let rblxFont;
let currentPage = 0;

function preload(){
    rblxFont = loadFont('assets/oldroblox.ttf');
    images[0] = loadImage('assets/bacon.png');
    images[1] = loadImage('assets/anime.png');
    images[2] = loadImage('assets/scene.png');
    images[3] = loadImage('assets/pinktastic.png');
    images[4] = loadImage('assets/beautiful.png');
    images[5] = loadImage('assets/oldMan.png');
}

function setup() {
    createCanvas(700, 700);
    noStroke();
    background(97,176,181);
    fill(236,206,116);
    textAlign(CENTER);
    //textFont(rblxFont);
}//end setup

function draw() {
    background(97,176,181);
    if (currentPage == 0) {   // intro and title
        push();
        translate(0,-10);
        fill(236,206,116);
        textStyle(BOLDITALIC);
        textSize(40);
        text ("My group decided on Sanrio being our theme.",40 ,50, 600);
        text ("I have at least 8 different map functions.",40 ,175,600 );
        text ("Press 1, 2, or 3 to navigate different pages.",40 ,295,600 );
        mapToColorPixels(hangyodonArr, 400, 400, 0, .45, 255);
        mapToColorShapes(hangyodonArr, 413, 415, 0, 1.15, 255);
        pop();

    } else if (currentPage == 1) {
        mapToBitMaps(hangyodonArr,images,70,500,45,.7);
        mapToColorPixels(hangyodonArr,155,110,90,.3,255);
        mapToColorShapes(hangyodonArr,492,15,0,.9,255);
        
        mapToColorText(birdText,200,270,0,.80,255);
        mapToColorTextBitMap(birdText,images, 10,310,0,.5,255)
        mapToColorTextShapes(birdText,165,85,0,1.1,.55,255)

        push();
        translate(15,15);
        textAlign(LEFT);
        textStyle(BOLDITALIC);
        fill(236,206,116);
        textSize(25);
        text("This is Phase 1 where I created 6 images while utilizing a numberical gridarray and text array. ",0,0,500);
        pop();

    } else if (currentPage == 2) {
        mapToColorText(hangyodonArr,110,320,0,.6,100)
        mapToMonoShapes(hangyodonArr,80,140,0,1,255);
        mapToColorNoText(birdText,350,270,0,.6,255)

        push();
        translate(-30,50);
        mapToMonoShapes(hangyodonArr,60,490,0,.6,255);
        mapToColorShapes(hangyodonArr,60,490,0,.6,150);
        pop();
        
        push();
        translate(170,30);
        textAlign(RIGHT);
        textStyle(BOLDITALIC);
        fill(236,206,116);
        textSize(25);
        let t = "Here are 2 more images re-mapped in a distinctly different way. I know there's supposed to be 4, but I read it wrong and only allocated time for 2 :("
        text(t,0,0,500);  // the 4th argument is the textWidth per line.
        pop();

    } else if (currentPage == 3) {
        mapToColorPixels(gudArr,410,160,0,.4,100);
        mapToColorShapes(gudArr,425,170,0,1,200);
        mapToBitMaps(keropArr,images,20,420,0,1.3);
        mapToColorShapes(keropArr,40,430,0,1.35,255);

        mapToBitMaps(gudArr,images,90,180,0,.7);
        mapToColorPixels(gudArr,93,180,0,.28,150);

        mapToBitMaps(keropArr,images,445,480,0,.8,255);
        mapToMonoShapes(keropArr,455,485,0,.8,200);
        

        push();
        translate(0,40);
        textAlign(CENTER);
        textStyle(BOLDITALIC);
        fill(236,206,116);
        textSize(25);
        let t = "I used my partners' arrays within my map functions.\n \nGudetama belongs to Jasmine and Keropi belongs to Laura."
        text(t,0,0,700);
        pop();    

    } else {  // optional for  4th page
    
    }
}//end draw

function keyPressed() { 
    //console.log(key);
     // or 
    if ( key == '1' ) { 
        console.log("Page 1");
        currentPage = 1;
    } else if ( key == '2' ) { 
        console.log("Page 2");
        currentPage = 2;
    } else if ( key == '3' ) { 
        console.log("Page 3");
        currentPage = 3;   
    } else {
        currentPage = 0;
    }  
}


//bird text w/o background
function mapToColorNoText(arr,lx,ly,rot,sc,fade) {
    textAlign(CENTER);
    push();
    translate(lx,ly);
    rotate(radians(rot));
    scale(sc);

    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[0].length; j++) {
             let value = arr[i][j];
             if (value === '...') continue;
             if (value === 'you') {
                textSize(20);
                fill(100,fade);
                textStyle(BOLD);
            } else if (value === 'truth') { 
                textSize(20);
                fill(random(255), random(255), random(255),fade);
                textStyle(ITALIC);
            } else if (value === 'mind') { 
                textSize(20);
                fill(0,fade);1
                textStyle(NORMAL);
            } else if (value === 'lie') { 
                textSize(20);
                fill(255,242,3,fade);
                textStyle(NORMAL);
            } else {
                textSize(1);
                fill(255);
                textStyle(NORMAL);
            }
            text(value, j * 23, i * 29);
        }
    }
    pop();
}

//shaking b&w rice
function mapToMonoShapes(arr,lx,ly,rot,sc,fade) {
    push();
    translate(lx,ly);
    rotate(radians(rot));
    scale(sc);
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[0].length; j++) {
            fill(arr[i][j] * 45, fade);
            //rect(j * 12, i * 12, 10, 10);
            if (i % 2 == 0) {
                push();
                translate((j*12)+3,(i*12)+random(-2, 2));
                rotate(radians(45));  
                ellipse(0,0,8,15);
                pop();

            } else {
                push();
                translate((j*12)-3,(i*12)+random(-2, 2));
                rotate(radians(45));  
                ellipse(0,0,15,8);
                pop();
            }
        }
    }
   pop();
}

//shapes
function mapToColorShapes(arr,lx,ly,rot,sc, fade) {
    push();
    translate(lx,ly);
    rotate(radians(rot));
    scale(sc);
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[0].length; j++) {
            let value = arr[i][j];
            if (value == 0) continue;
            if ( value == 1 ) { //skin
                fill(104, 186, 127,fade);
                rect(j * 12-6, i * 12-6, 10, 10,0,10,0,10);
            } else if ( value == 2 ){ //fins
                fill(46, 111, 64, fade);
                rect(j * 12-6, i * 12-6, 10, 10,10,3,10,3);
            } else if ( value == 3 ){ //mouth
                fill(240, 218, 213,fade);
                rect(j * 12-6, i * 12-6, 10, 10,10,2,10,2);
            } else if ( value == 4 ){ //black
                fill(37, 61, 44, fade);
                //rect(j * 12-6, i * 12-6, 10, 10,0,10,0,10);
                ellipse(j*12, i*12, 5, 10);
            } else if ( value == 5 ){ //white
                fill(207, 255, 220,fade);
                rect(j * 12-6, i * 12-6, 10, 10,10,10,10,1);
            } else { //background
                fill(83, 184, 184, fade);
                ellipse(j * 12, i * 12, 15,10);
            } 
        }
    }
    pop();
}

//OG hangyodon colors
function mapToColorPixels(arr,lx,ly,rot,sc,fade) {
push();
translate(lx,ly);
rotate(radians(rot));
scale(sc);
for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length; j++) {
        a = arr[i][j];
        if (a === 1) { // teal
            fill(63, 194, 189,fade);
        } else if (a === 2) { // sky blue
            fill(40,175,239,fade);
        } else if (a === 3) { // pink 
            fill(246,173,200,fade);
        } else if (a === 4) { // black
            fill(0,fade);
        } else if (a === 5) { // white
            fill(255,fade);
        } else {
            fill(235,87,77,fade);
        }
        rect((j * 30) + 15, (i * 30) + 15, 30, 30);
    }
}
pop();
}

// roblox hair (images)
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
            image(nuimg, j * 12, i * 12, 30, 30);
        }
    }
    pop();
}

//bird text w/ images
function mapToColorTextBitMap(arr,imgarr,lx,ly,rot,sc,fade) {
    push();
    translate(lx,ly);
    rotate(radians(rot));
    scale(sc);
    let nuimg;
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[0].length; j++) {
            let value = arr[i][j];
            if ( value == 'you'  ) {
                nuimg = imgarr[3];
                c = color(255,100,0,fade);
            } else if ( value == '...' ){
                c = color(255,0,255,fade);
                nuimg = imgarr[5];
            } else if ( value == 'truth' ) {
                nuimg = imgarr[1];
                c = color(20,200,120,fade);
            } else if ( value == 'lie' ) {
                nuimg = imgarr[0];
                c = color(20,200,120,fade);
            } else {
                nuimg = imgarr[4];
                c = color(120,0,240,fade);
            }
                image(nuimg, j * 12, i * 15, 30, 15);
        }
    }
    pop();
}

//bird text
function mapToColorText(arr,lx,ly,rot,sc,fade) {
    textAlign(CENTER);
    push();
    translate(lx,ly);
    rotate(radians(rot));
    scale(sc);

    if (frameCount % 5 === 0) {
        for (let i = 0; i < birdText.length; i++) {
            for (let j = 0; j < birdText[i].length; j++) {
                let val = birdText[i][j];
                if (val === '...' || words.includes(val)) {
                    birdText[i][j] = random(words);
                }
            }
        }
    }

    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[0].length; j++) {
             let value = arr[i][j];
             if (value === 'you') {
                textSize(20);
                fill(100,fade);
                textStyle(BOLD);
            } else if (value === 'truth') { 
                textSize(20);
                fill(0,183,239,fade);
                textStyle(ITALIC);
            } else if (words.includes(value)) { 
                textSize(8);
                fill(255,fade);
                textStyle(ITALIC);
            } else if (value === 'mind') { 
                textSize(20);
                fill(0,fade);
                textStyle(NORMAL);
            } else if (value === 'lie') { 
                textSize(20);
                fill(255,242,3,fade);
                textStyle(NORMAL);
            } else {
                fill(255);
                textStyle(NORMAL);
            }
            text(value, j * 25, i * 22);
        }
    }
    pop();
}

//bird text w/ shapes
function mapToColorTextShapes(arr,lx,ly,rot,scx,scy,fade) {
    push();
    translate(lx,ly);
    rotate(radians(rot));
    scale(scx,scy);
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[0].length; j++) {
            let value = arr[i][j];
            if ( value == 'lie' ) { //beak
                fill(255, 186, 127,fade);
                rect(j * 12-6, i * 12-6, 15, 10,10,12,10,2);
            } else if ( value == 'truth' ){ //body
                fill(128,0,0,fade);
                rect(j * 12-6, i * 12-6, 15, 10,10,12,10,2);
            } else if ( value == 'mind' ){ //eyes
                fill(0, fade);
                rect(j * 12-6, i * 12-6, 15, 10,10,12,10,2);
                //ellipse(j*12, i*12, 5, 10);
            } else if ( value == 'you' ){ //bars
                fill(100,fade);
                rect(j * 12-6, i * 12-6, 10, 12);
            } else { //background
                fill(random(255), fade);
                rect(j * 12-6, i * 12-6, 15, 10,10,12,10,2);
            }
        }
    }
    pop();
}