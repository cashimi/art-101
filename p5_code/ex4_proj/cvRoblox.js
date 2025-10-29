class cvRoblox {

    // class vars
    bc;
    c;
    tc;
    tp;
    lx;
    ly;
    rot;
    sc;
    snatch;
    bunny;

    sx;
    sy;
    isrot;
    rs;
    ch;

    // is the class version of setup
    constructor(lc,ltc,ltp,llx,lly,lrot,lsc,lsn,lch) {
        this.c = lc;
        this.tc = ltc;
        this.tp = ltp;
        this.lx = llx;
        this.ly = lly;
        this.rot = lrot;
        this.sc = lsc;
        this.snatch = lsn;
        this.bunny = 0;

        this.isrot = 0;
        this.ch = lch;

        this.sx = random(-5,3);
        this.sy = random(-5,3);

        //console.log("roblox man");
    }

   displayAvatar() {
    push();
        translate(this.lx,this.ly);
        rotate(radians(this.rot));
        scale(this.sc);
        this.head(this.c,-2,0);
        this.cvAwesomeFace(this.c,71,-15,.27);
        this.torso(this.tc,0,0);
        this.limb(this.c,170,65); //arms
        this.limb(this.c,35,65);
        this.limb(this.tp,80,160); //legs
        this.limb(this.tp,125,160);

        if (this.snatch == 1) {
            this.waist(0,0,0,1); // cuntification
            let bunny = new esBunny(color(255,192,203), 125, 115, 0,.12);
            bunny.displayBunny();
        }

        this.chatting(this.ch);
    pop();
  }

  chatting(says){
    if (showMessages) { // Only show messages if toggle is on
      fill(0);
      textAlign(CENTER,CENTER);
      textStyle(BOLD);
      text(says,75,-5,100);
    }
  }


    updateAvatar() {
    if (this.isrot == 1) {
        this.rot += random(-2,2);
    }

    this.lx += this.sx
    this.ly += this.sy

    // Wrap around screen boundaries
    if (this.lx < 0) {
        this.lx = width;
    }
    if (this.lx > width) {
        this.lx = 0;
    }
    
    // For upside down characters (downguys)
    if (this.rot == 180) {
        this.sy = 0; // No vertical movement
        if (this.ly < 50) { // Keep them visible on screen
            this.ly = 50;
        }
    } else {
        // For regular characters
        if (this.ly < 300) {
            this.ly = 200;
        }
        if (this.ly > 200) {
            this.ly = 300;
        }
    }
}   // end update


    limb(c,lx,ly){
        push();
        fill(c);
        translate(lx,ly);
        rect(0,0,45,95,5);
        pop();
      }
    head(c,lx,ly){
        push();
        fill(c);
        translate(lx,ly)
        rect(100,10,55,55,10);
        this.cvAwesomeFace(c,73,-15,.27)
        pop();
        }
    torso(c,lx,ly){
        push();
        fill(c);
        translate(lx,ly);
        noStroke();
        rect(80,65,90,95,5);
        pop();
      }
    curnty(c,lx,ly){
        push();
        noStroke();
        fill(c);
        translate(lx,ly);
        rect(80,65,90,95,5);
        pop();
        // ----------------- start woman parts
        fill(bc);
        push();
        noStroke();
        triangle(80,90,80,150,95,120);
        triangle(170,90,170,150,155,120);
        pop();
      }
    cvAwesomeFace(c,lx,ly,sc) {
        push();
        translate(lx,ly);
        scale(sc);
          //eyebrows
          fill(0); //top
          stroke(0);
          strokeWeight(4);
          ellipse(222,135,27,35);
          ellipse(178,135,27,35);
          fill(c); //yellow layer
          stroke(c);
          ellipse(222,141,35,37);
          ellipse(178,141,35,37);
          //features
          fill("white");
          stroke(0);
          ellipse(222,155,33,50); //eyes
          ellipse(178,155,33,50);
          quad(155,230,245,230,205,280,195,280); //teeth
          fill("black");
          ellipse(220,148,25,33); //puipls
          ellipse(176,148,25,33);
          quad(163,238,237,238,205,280,195,280); //mouth  
        pop();
      }
    waist(lx,ly,rot,sc) {
        translate(lx,ly);
        rotate(radians(rot));
        scale(sc);
        fill(color(193,202,222));
        push();
        translate(0,-10);
        noStroke();
        triangle(80,90,80,150,95,120);
        triangle(170,90,170,150,155,120);
        pop();
    }
    togglewoman() {
        if (this.snatch == 1) {
            this.snatch = 0;
            console.log("womanfication");
        } else {
            this.snatch = 1;
        }
    }
} //end class

class esBunny {
    c;
    lxo;
    lyo;
    rot;
    sc;
    sx;
    sy;
    constructor(lc,llxo,llyo,lrot,lsc){
        
        this.c = lc;
        this.lxo = llxo;
        this.lyo = llyo;
        this.rot = lrot;
        this.sc = lsc; 

        this.sx = random(-10,10);
        this.sy = random(-10,10);

    }

    displayBunny(){
        push();
        translate(this.lxo, this.lyo);
        rotate(this.rot);
        scale(this.sc);
        fill(this.c);
        this.bunnyBody(this.c, 0, 100, 0, 1);
        this.esbunnyHead(this.c,0,0, 0, 1);
        pop();
    }

    updateBunny() {
        this.lxo += this.sx;
        this.lyo += this.sy;

        // Bounce off walls
        if (this.lxo < 0 || this.lxo > width) {
            this.sx *= -1;
        }
        if (this.lyo < 0 || this.lyo > height) {
            this.sy *= -1;
        }
    }
 
bunnyBody(c,lxo,lyo,rot,sc){
        push();
      translate(lxo, lyo);
      rotate(rot);
      scale(sc);
      fill(c);
      
      ellipse(-50, 70, 70, 30)
      ellipse(50, 70, 70, 30)
      
      fill(c);
      ellipse(0, 0,200,150);
      fill(0,70);
      ellipse(0, -50, 150, 100);
      pop();
      }

esbunnyHead(c,lxo,lyo,rot,sc){
        push();
      translate(lxo, lyo);
      rotate(rot);
      scale(sc);
      fill(c);
        this.bunnyEars(c, -60, -65, -10);
        this.bunnyEars(c, 60, -65, 10);
        ellipse(0,0,190,165);
        this.bunnyEyes(-50, 10);
        this.bunnyEyes(50, 10);
        this.bunnyNose(0, 15);
        pop();
      }
    
bunnyEars(c,lxo,lyo,rot,sc){
        push();
      translate(lxo, lyo);
      rotate(rot);
      scale(sc);
      fill(c);
        rect(0, 0,  50, 200, 45, 45, 15, 15);
        fill(252, 162, 207);
        rect(0, 5,  30, 170, 45, 45, 15, 15);
        pop();
      }
bunnyEyes(lxo,lyo,rot,sc){
        push();
      translate(lxo, lyo);
      rotate(rot);
      scale(sc);
        fill(0);
        ellipse(0, 0, 20, 30);
        pop();
      }
bunnyNose(lxo,lyo,rot,sc){
        push();
      translate(lxo, lyo);
      rotate(rot);
      scale(sc);
        fill(252, 162, 207);
        ellipse(0, 0, 15, 10);
      pop();
      }
}

