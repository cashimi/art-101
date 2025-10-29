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

    sx;
    sy;
    isrot;
    rs;
    ch;

    // is the class version of setup
    constructor(lc,ltc,ltp,llx,lly,lrot,lsc,lsn,) {
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

        this.sx = random(-10,7);
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
    pop();
  }


  updateAvatar() {
    this.lx += this.sx;

    let avatarLeftOffset = 50;
    let avatarRightOffset = 350;

    // When the entire avatar is off the left edge
    if (this.lx + avatarRightOffset < 0) {
        this.lx = width + avatarLeftOffset;
    }

    // When the entire avatar is off the right edge
    if (this.lx - avatarLeftOffset > width) {
        this.lx = -avatarRightOffset;
    }

    this.sy = 0; // no vertical movement
  }


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
