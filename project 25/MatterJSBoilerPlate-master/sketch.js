var ball,bin,stop,binAnim,ballAnim;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	binAnim=loadImage(pluckingMangoes/tree.png);
	ballAnim=loadImage(pluckingMangoes/boy.png);	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

ball=matter.bodies.circle(5,350,200);
ball.addImage(ballAnim);

bin.addImage(binAnim);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  if(keyDown(space)){
   ball.velocityY=-5;
ball.velocityX=5;
  }
  if(ball.isTouching(Bin)){
   ball.velocityY=0;
  }
  if(ball.isTouching(stop)){
	ball.velocityY=5
   }   
  drawSprites();
 
}



