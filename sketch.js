const Engine= Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine,world
var ground1,ground2
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10
var box11,box12,box13,box14,box15,box16
var box17,box18,box19,box20,box21,box22,box23,box24,box25,box26
var box27,box28,box29,box30,box31,box32,hexagonal,polygon_img,chain1
var gameState
function preload(){

    polygon_img=loadImage("polygon.png");
}
function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;
    gameState="onsling"
    ground1=new Ground(500,500,250,20);
    box1=new Bo(415,400)
    box2=new Bo(445,400)
    box3=new Bo(475,400)
    box4=new Bo(505,400)
    box5=new Bo(535,400)
    box6=new Bo(565,400)
    box7=new Bo(595,400)
    box8=new Bo(445,360)
    box9=new Bo(475,360)
    box10=new Bo(505,360)
    box11=new Bo(535,360)
    box12=new Bo(565,360)
    box13=new Bo(475,320)
    box14=new Bo(505,320)
    box15=new Bo(535,320)
    box16=new Bo(505,280)
    ground2=new Ground(800,300,250,20);
    box17=new Bo(715,200)
    box18=new Bo(745,200)
    box19=new Bo(775,200)
    box20=new Bo(805,200)
    box21=new Bo(835,200)
    box22=new Bo(865,200)
    box23=new Bo(895,200)
    box24=new Bo(745,160)
    box25=new Bo(775,160)
    box26=new Bo(805,160)
    box27=new Bo(835,160)
    box28=new Bo(865,160)
    box29=new Bo(775,120)
    box30=new Bo(805,120)
    box31=new Bo(835,120)
    box32=new Bo(805,80)
   hexagonal=new Bo(50,300)
   chain1=new Chain(hexagonal.body,{x:50,y:300})


   
    


}
function draw(){
    background(0);
    Engine.update(engine);
    drawSprites();
    ground1.display();
    ground2.display();
    hexagonal.display2();
    chain1.drawing();
    fill ("green")
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box32.display();
    fill ("pink")
    box8.display();
    box9.display();
    box10.display(); 
    box11.display();
    box12.display();
    box29.display();
    box30.display();
    box31.display();
    
    fill ("yellow")
    box13.display();
    box14.display();
    box15.display();
    box24.display();
    box25.display();
    box26.display();
    box27.display();
    box28.display();
    fill ("red")
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    box22.display();
    box23.display();

    


}
function mouseDragged(){
    
    if(gameState!=="launched"){
     Matter.Body.setPosition(hexagonal.body,{x:mouseX,y:mouseY})
    }
}
function mouseReleased(){
    chain1.fly();
    gameState="launched"
}
function keyPressed(){
  if(keyCode===32){
	
    chain1.regain(hexagonal.body);
    Matter.Body.setPosition(hexagonal.body,{x:mouseX,y:mouseY})
	chain1.attach(hexagonal.body)
	gameState="onsling"
  }
}