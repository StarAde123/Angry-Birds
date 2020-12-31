class Log{
    constructor(x, y, height, angle){
        var option={
            restitution:0.8,
            friction : 0.3,
            density : 0.2
        }
        this.body = Bodies.rectangle(x, y, 20, height, option);
        this.w = 20;
        this.h = height;
        Matter.Body.setAngle(this.body, angle);
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
        stroke("black");
        fill(15);
        rect(0,0, this.w, this.h,);
        pop();
    }
}