const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var rubber, rubber2;
var stone, rubber2;
var iron, iron2;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane  = new Plane(600,height,1200,20);

    hammer = new Hammer(10,100);
    
    //create the different bodies
    rubber = new Rubber(560,300,60);
    rubber2 = new Rubber(700,40,80);
    stone  = new Stone(240,340);
    stone2 = new Stone(550,60);
    iron   = new Iron(250,240);
    iron2 = new Iron(760,550);

}

function draw(){
    background("limeGreen");
    Engine.update(engine);

    plane.display();

    hammer.display();
    
    rubber.display();
    rubber2.display();
    stone.display();
    stone2.display();
    iron.display();
    iron2.display();
 
}