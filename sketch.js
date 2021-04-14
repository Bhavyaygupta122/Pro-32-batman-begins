const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

var ball1;
var monster1,monster2,monster3,monster4,monster5,monster6,monster7,monster8;
var world;
var rope1,rope2,rope3,rope4,rope5,rope6;
var bg = "bg1.png";
var backgroundImg;
var score=0;

function preload(){
  getBackgroundImg();
}

function setup() {
  createCanvas(900,500);

  engine = Engine.create();
	world = engine.world;


  ball1 = new ball(10,300,20);

  slingshot = new Slingshot(ball1.body,{x:75,y:300});

  monster1 = new monster(750,100,50,50);
  rope1 = new rope(760,150,100,10);
  monster2 = new monster(450,150,50,50);
  rope2 = new rope(460,200,100,10);
  monster3 = new monster(350,50,50,50);
  rope3 = new rope(360,100,100,10);
  monster4 = new monster(800,350,50,50);
  rope4 = new rope(810,400,100,10);
  monster5 = new monster(600,350,50,50);
  rope5 = new rope(610,400,100,10);
  monster6 = new monster(325,415,50,50);
  rope6 = new rope(335,465,100,10);
   

  Engine.run(engine);

}

function draw() {
  if(backgroundImg)
        background(backgroundImg);
    
        noStroke();
        textSize(35)
        fill("white")
        text("Score  " + score, width-300, 50)

  drawSprites();

  textSize(20);
  fill("blue");
  text("Kill the monsters with the ball",100,30);
  text("Press Space for play again!",100,50);
  
   //console.log(mouseX);
   //console.log(mouseY);

  ball1.display();
  slingshot.display();
  monster1.display();
  monster2.display();
  monster3.display();
  monster4.display();
  monster5.display();
  monster6.display();
}

function mouseDragged(){
  Matter.Body.setPosition(ball1.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  slingshot.fly();
}

function keyPressed() {
  if (keyCode === 32) {
        Matter.Body.setPosition(ball1.body, {x:75, y:300}) 
        slingshot.attach(ball1.body);
    }
}


async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  
  if(hour>=06 && hour<=19){
      bg = "bg1.png";
      console.log("running or not");
  }
  else{
      bg = "bg2.jpg";
      console.log("else block");

  }

  backgroundImg = loadImage(bg);
  console.log(backgroundImg);
}