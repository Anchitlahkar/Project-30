const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;

function preload() {

}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);

    log1 = new Log1(600,320,300,10);
    log3 =  new Log1(1000,300,300,10);

    // L4 box1
    box1 = new Box(500,300,40,40);
    box2 = new Box(550,300,40,40);
    box3 = new Box(600,300,40,40);
    box4 = new Box(650,300,40,40);
    box5 = new Box(700,300,40,40);


    // L3 Box1

    box6 = new Box2(520,270,40,40);
    box7 = new Box2(570,270,40,40);
    box8 = new Box2(620,270,40,40);
    box9 = new Box2(670,270,40,40);

    //L2 Box1

    box10 = new Box(540,240,40,40);
    box11 = new Box(590,240,40,40);
    box12 = new Box(640,240,40,40);
    
    //L1 Box1

    box13 = new Box2(560,210,40,40);
    box14 = new Box2(610,210,40,40);

    //L0 Box1

    box15 = new Box(582,180,40,40);    
    
    
    
    
    
    
    
    // L4 box1
    box16 = new Box(500+400,280,40,40);
    box17 = new Box2(550+400,280,40,40);
    box18 = new Box(600+400,280,40,40);
    box19 = new Box2(650+400,280,40,40);
    box20 = new Box(700+400,280,40,40);


    // L3 Box1

    box21 = new Box(520+400,250,40,40);
    box22 = new Box2(570+400,250,40,40);
    box23 = new Box(620+400,250,40,40);
    box24 = new Box2(670+400,250,40,40);

    //L2 Box1

    box25 = new Box(540+400,220,40,40);
    box26 = new Box2(590+400,220,40,40);
    box27 = new Box(640+400,220,40,40);
    
    //L1 Box1

    box28 = new Box(560+400,190,40,40);
    box29 = new Box2(610+400,190,40,40);

    //L0 Box1

    box30 = new Box2(582+400,160,40,40);
    


    bird = new Bird(200,250,40,40);

    slingshot = new SlingShot(bird.body,{x:200, y:250});
}

function draw(){
    background(0);
    Engine.update(engine);
    //strokeWeight(4);

    //L4 Box1

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();

    //L3 box1

    box6.display();
    box7.display();
    box8.display();
    box9.display();

    //L2 Box1
    box10.display();
    box11.display();
    box12.display();
    
    //L1 Box1
    box13.display();
    box14.display();

    //L0 Box1
    box15.display(); 
    
    
    
    
    
    //L4 Box1

    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();

    //L3 box1

    box21.display();
    box22.display();
    box23.display();
    box24.display();

    //L2 Box1
    box25.display();
    box26.display();
    box27.display();
    
    //L1 Box1
    box28.display();
    box29.display();

    //L0 Box1
    box30.display();


    log1.display();
    log3.display();
    
    ground.display();

    slingshot.display();
    bird.display();
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}
function mouseReleased(){
    slingshot.fly();
}
function keyPressed() {
    if(keyCode === 32){
        slingshot.attach(bird.body)
    }
    
}