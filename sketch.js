
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5

var roof1

var rope1,rope2,rope3,rope4,rope5

function preload()
{
	
}

function setup() {
	createCanvas(900, 600);

	engine = Engine.create();
	world = engine.world;

	bobObject1 = new Bob(195,500);
	bobObject2 = new Bob(265,500);
	bobObject3 = new Bob(335,500);
	bobObject4 = new Bob(405,500);
	bobObject5 = new Bob(475,500);

	roof1 = new Roof(340,200);

	rope1 = new Rope(bobObject1.body,roof1.body,-145,0);
	rope2 = new Rope(bobObject2.body,roof1.body,-75,0);
	rope3 = new Rope(bobObject3.body,roof1.body,-5,0);
	rope4 = new Rope(bobObject4.body,roof1.body,65,0);
	rope5 = new Rope(bobObject5.body,roof1.body,135,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  roof1.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
 
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-60,y:-100});


  }
}

