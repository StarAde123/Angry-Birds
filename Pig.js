class Pig{
    constructor(x, y){
        var option={
            restitution:0.8,
            friction : 0.3,
            density : 1
        }
        this.body = Bodies.rectangle(x, y, 50, 50, option);
        this.w = 50;
        this.h = 50;
        World.add(world, this.body);
    }

    display(){
        var loc = this.body.position;
        var angle=this.body.angle;
        push();
        translate(loc.x, loc.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(4);
        stroke("green");
        fill(rgb(0, 255, 0));
        rect(0,0, this.w, this.h);
        pop();
    }
}