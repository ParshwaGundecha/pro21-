const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var wall;
var right_wall;
var left_wall;

function preload()
{
}

function setup() {
	createCanvas(windowWidth,windowHeight);

	engine = Engine.create();
	world = engine.world;
  
  wall=new Ground(width/2,670,width,10);
  World.add(world,wall);
  
  right_wall=new Ground(900,600,10,100);
  World.add(world,right_wall);

  left_wall=new Ground(1100,600,10,100);
  World.add(world,left_wall);

	var ball_options={
   isStatic:false,
	 restitution:0.3,
	 friction:0,
	 density:1.2,	
	};

  //Create the Bodies Here.
  ball=Bodies.circle(200,-50,20,ball_options);
  World.add(world,ball); 
  Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  push ();
  ellipse(ball.position.x,ball.position.y,20);
  pop ();
  wall.show();
  right_wall.show();
  left_wall.show();
  drawSprites();
  
  keyPressed();
}

function keyPressed(){
  if(keyCode===UP_ARROW){
   Matter.Body.applyForce(ball,{x:0,y:0},{x:2,y:2})
  }

}

