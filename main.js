let s;
let scl = 20;
let snekSpd = 5;

let f;


function keyPressed() {
    if (keyCode === UP_ARROW) {
        s.dir(0, -snekSpd);
    }else if (keyCode === DOWN_ARROW) {
        s.dir(0, snekSpd);
    }else if (keyCode === LEFT_ARROW) {
        s.dir(-snekSpd, 0);
    }else if (keyCode === RIGHT_ARROW) {
        s.dir(snekSpd, 0);
    }
}

function setup() {
    noStroke();
    createCanvas(600,600);
    s = new Snake();
    frameRate(100);
    f = new Fud();
}



function draw() {
    background(51);
    s.update();
    s.show();
    f.show();

    if ( dist(s.x, s.y, f.pos.x, f.pos.y) < scl ) {
        background(100);
        f.pickLocation();
        s.total++;
    }


}
