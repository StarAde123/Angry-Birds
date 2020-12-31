class Box{
    constructor(x, y, width, height){
        var option={
            restitution:0.8,
            friction : 0.3,
            density : 1
        }
        this.body = Bodies.rectangle(x, y, width, height,option);
        this.w = width;
        this.h = height;
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
        fill(255);
        rect(0,0, this.w, this.h);
        pop();
    }
}

