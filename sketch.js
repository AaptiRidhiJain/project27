
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;

var bob1,bob2,bob3,bob4,bob5;
var roof;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 800);

	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

	roof = new Roof(600,100,1000,30);
  bob1 = new Bob(800,900,20);

	
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  roof.display();
  bob1.display();
  drawSprites();
 
}

function mouseDragged(){
  Matter.Body.setPosition(bob.body,{x:mouseX, y:mouseY});
}