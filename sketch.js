const Engine= Matter.Engine;
const World = Matter.World;
const Bodies= Matter.Bodies;

var engine, world, ground, ground1, box1, box2, pig1, log1, bird1;
function setup() {
  createCanvas(1200,900);
  engine = Engine.create();
  world= engine.world;
 
  ground= new Ground(600,895,1200,20);
  
  box1 = new Box(700, 300, 70, 70);

  box2 = new Box(920, 300, 70, 70);

  pig1 = new Pig(810, 300);

  log1 = new Log(810, 260, 300, PI/2);

  
 
}

function draw() {
  Engine.update(engine);
  background(255, 0, 125);  
  
  ground.display();
  box1.display();
  box2.display();
  pig1.display();
  log1.display();

  //circle(ball.position.x, ball.position.y, 50);
  
}