const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var rect1,rect2,rect3,rect4,rect5,rect6,rect7;
var ground;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    rect1 = new Rectangle(70, 200, 50, 200);
    rect2 = new Rectangle(50, 100, 15, 300);
    rect3 = new Rectangle(365, 100, 15, 300);
    rect4 = new Rectangle(300, 200, 50, 200);
    rect5 = new Rectangle(120, 250, 50, 150);
    rect6 = new Rectangle(250, 250, 50, 150);
    rect7 = new Rectangle(170, 280, 80, 120);
    
    ground = new Ground(200,390,400,20);
    
}

function draw(){
    background(0);
    //text(mouseX + ',' + mouseY, 10, 15);
    Engine.update(engine);
    rect1.display();
    rect2.display();
    rect3.display();
    rect4.display();
    rect5.display();
    rect6.display();
    rect7.display();
   
    fill(150,12,12);
    triangle(42, 180, 68,118, 88, 180);
    triangle(147, 259, 188, 132, 228, 258);
    triangle(289, 180, 315, 118, 337, 180);
    ground.display();
}