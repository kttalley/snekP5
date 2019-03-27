function Fud() {
    this.pos = createVector(random(width),random(height));
    // this.x = random(width);
    // this.y = random(height);

    this.pickLocation = function() {
        var cols = floor(width/scl);
        var rows = floor(height/scl);
        this.pos = createVector(floor(random(cols)), floor(random(rows)));
        this.pos.mult(scl);
    }

    this.show = function() {
        translate(this.pos.x,this.pos.y);
        rotate(frameCount*0.1);
        rectMode(CENTER);
        fill(255,20,255,50);
        rect(0,0,scl*1.2,scl*1.2);
        fill(255,20,225,100);
        rect(0,0,scl*0.75,scl*0.75);
        resetMatrix();
    }
}