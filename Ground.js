class Ground{
    constructor(x,y,width,height){
        var option={
            isStatic: true
          }
           this.body = Bodies.rectangle(x,y,width,height,option);
           this.w=width;
           this.h=height;
           World.add(world,this.body);
    }
    display(){
       var pos =this.body.position;
        rectMode(CENTER);
        fill("brown");
        rect(pos.x, pos.y,this.w, this.h);
    }
}