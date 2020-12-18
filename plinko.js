class Plinko {
    constructor(x, y) {
    var options = {
        'isStatic': true
    }
    this.x = x;
    this.y = y;
    this.body = Bodies.circle(x, y, 15/2, options);
    World.add(world,this.body);
    }
    display() {
        push();
        var pos = this.body.position;
        strokeWeight(3);
        stroke("white");
        fill("black");
        rectMode(CENTER);
        ellipse(pos.x, pos.y , 15, 15);
        pop();
    }
}