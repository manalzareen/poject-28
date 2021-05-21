
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var ground1;
var paper1;
var launcher1;
var box2;
function preload()
{

}

function setup() {
	createCanvas(1200, 400);
 
  

	engine = Engine.create();
	world = engine.world;


	//Create the Bodies Here.
   ground1=new Ground (width/2,height-35,width,10);
    paper1=new Paper(100,360,20);
   //box1= new Box(width/1.2,height-45,140,16);
   box2=new Box(1065,300);
  // box3= new Box(933,300,16,130);
   launcher1=new Launchar(100,340);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white")
  Engine.update(engine);
  ground1.display();
  //box1.display();
   paper1.display();
  box2.display();
  //box3.display();
 launcher1.display();
  
  
  drawSprites();
 
}
function keyPressed(){
  if (keyCode === UP_ARROW){

    Matter.Body.applyForce(paper1.body,paper1.body.position,{x:35,y:-78});
  }
}


