var platform, bob,chain;
var bob2,bob3,bob4;
var chain2,chain3,chain4;
const Constraint=Matter.Constraint;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render=Matter.Render;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   platform=new Platform(380,50,200,20)

   bob=new Bob(300,150,10)
   chain=new Chain(bob.body,{x:300,y:50})

   bob2=new Bob(350,150,10)
   chain2=new Chain(bob2.body,{x:350,y:50})

   bob3=new Bob(400,150,10)
   chain3=new Chain(bob3.body,{x:400,y:50})

   bob4=new Bob(450,150,10)
   chain4=new Chain(bob4.body,{x:450,y:50})
   
   
   var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1600,
	    height: 700,
	    wireframes: false
	  }
	});

	Engine.run(engine);
	Render.run(render);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  platform.display()
  bob.display()
  chain.display()
  bob2.display()
  chain2.display()
  bob3.display()
  chain3.display()
  bob4.display()
  chain4.display()
  drawSprites();
 
}
function keyPressed(){
if(keyCode===UP_ARROW){
Matter.Body.applyForce(bob.body,bob.body.position,{x:-50,y:-45})
}
}


