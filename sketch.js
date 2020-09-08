
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var dustbin1,dustbin2,dustbin3;
var paper;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(400,height,800,20);

	paper = new Paper(85,100);

	dustbin1 = new Dustbin(490,635,20,100);
	dustbin2 = new Dustbin(600,680,200,20);
	dustbin3 = new Dustbin(710,635,20,100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  
  drawSprites();
  
  paper.display();
  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  

	textSize(25);
	fill ("white");
	text ("Press the Up Arrow to Put the Ball in the Bin", 200, 100);
 
}



function keyPressed(){ 
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:600,y:-1000});
	}
}