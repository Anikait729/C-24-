const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world, ground, ball;
var box1, box2;


function setup() {
createCanvas(1200, 400);
engine = Engine.create();
world = engine.world;

box1 = new Box(500, 300, 50, 50);
box2 = new Box(700, 300, 50, 50);
ground = new Ground(600, 390, 1200, 15);
pig1 = new Pig(600, 300)
log1 = new Log(600, 260, 300,PI/2)

box3 = new Box(500, 200, 50, 50);
box4 = new Box(700, 200, 50, 50);
pig2 = new Pig(600, 200)
log2 = new Log(600, 160, 300,PI/2)

log3 = new Log(550, 100, 125, PI/4);
log4 = new Log(650, 100, 125, -PI/4);
box5 = new Box(600, 150, 50, 50);
bird = new Bird(100, 100);
}

function draw() {
 background(220);
 Engine.update(engine);

ground.display();
box1.display();
box2.display();
pig1.display();
log1.display();

box3.display();
box4.display();
pig2.display();
log2.display();

log3.display();
log4.display();
box5.display();
bird.display();
}


