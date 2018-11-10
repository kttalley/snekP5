function Snake() {
    this.x = 0;
    this.y = 0;
    this.xSpeed = 1;
    this.ySpeed = 0;

    this.dir = function(x,y) {
        this.xSpeed = xSpeed;
    }

    this.update = function() {
        this.x += this.xSpeed;
        this.y += this.ySpeed;
    }

    this.show = function() {
        translate(this.x, this.y);
            rect(0,0,10,10);
        resetMatrix();
        
    }
}