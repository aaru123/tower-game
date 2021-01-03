
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var world
var g1, g2
var l1, l2, l3, l4, l5, l6, l7, l8, l9, l10, l11, l12, l13, l14, l15, l16, slingshot
function preload()
{
	
}

function setup() {
	createCanvas(800, 500);
   	engine = Engine.create();
	world = engine.world;
  g1 = new ground(350,400,200,20)
  g2 = new ground(600,200,200,20)
  l1 = new b (275,350,50,50)
  l2 = new b (325,350,50,50)
  l3 = new b (325+50,350,50,50)
  l4 = new b (325+100,350,50,50)
  l5 = new b (325,350-50,50,50)
  l6 = new b (325+50,350-50,50,50)
  l7 = new b (325+25,350-100,50,50)
  l8 = new b (525,150,50,50)  
  l9 = new b (575,150,50,50)  
  l10 = new b (625,150,50,50)  
  l11 = new b (675,150,50,50)  
  l12 = new b (575,150-50,50,50) 
  l13 = new b (625,150-50,50,50)
  l14 = new b (575+25,150-100,50,50)  
  l15 = new b (100,350,50,50)
  slingshot = new SlingShot(l15.body,{x:180, y:50});
}


function draw() {
  rectMode(CENTER);
  background(0);
  g1.display()
  g2.display()
  l1.display()
  l2.display()
  l3.display()
  l4.display()
  l5.display()
  l6.display()
  l7.display()
  l8.display()
  l9.display()
  l10.display()
  l11.display()
  l12.display()
  l13.display()
  l14.display()
  l15.display()
  slingshot.display()
  drawSprites();
 
}


function mouseDragged(){
  Matter.Body.setPosition(l15.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}




