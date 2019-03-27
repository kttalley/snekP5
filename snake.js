function Snake() {
    this.x = 0;
    this.y = 0;
    this.xSpeed = snekSpd;
    this.ySpeed = 0;
    this.total = 0;
    this.tail = [];

    this.dir = function(x,y) {
        this.xSpeed = x;
        this.ySpeed = y;
    }

    this.update = function() {

        for (var i = 0; i < this.tail.length- 1; i++) {
            this.tail[i] = this.tail[i+1];
        }
        this.tail[this.total-1] = createVector(this.x, this.y);

        this.x += this.xSpeed;
        this.y += this.ySpeed;

        this.x = constrain(this.x, 0, width-scl);
        this.y = constrain(this.y, 0, height-scl);
    }

    this.eat = function(pos) {
        var d = dist(this.x, this.y, pos.x, pos.y);
        if ( d < 3){
            return true;
            background(255);
        } else {
            return false;
            background(0);
        }


    }

    this.show = function() {
        fill(100,255,10,150);
        for (var i = 0; i < this.total; i++){
            translate(this.tail[i].x, this.tail[i].y);
            rectMode(CORNER);
            rect( 0,0, scl, scl);
            resetMatrix();

        }

        translate(this.x, this.y);
        rect(0,0,scl,scl);
        resetMatrix();
        
    }
}