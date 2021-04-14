var aero,robot;

var score=0;
var death=0;
function preload(){
  bulletsound=loadSound("bullet.wav");
  aeroimg=loadImage("aeroplane.png");
  bulimg=loadImage("bullet.png");
bgimg=loadImage("background.png");
enimg=loadImage("enemy.png");
}


function setup(){
  
    createCanvas(1000,550);

 bulletGroup= new Group();

 robotGroup= new Group();
 
 aero=createSprite(500,520,10,10);
 aero.addImage(aeroimg);
 
}

function draw(){
  
  background(bgimg);

  fill("black");
  textSize(20)
  text("Score: "+ score, 400,50);

  fill("black");
  textSize(20)
  text("Deaths: "+ death, 500,50);

    var boundary1 = createSprite(995,300,10,600);
    boundary1.shapeColor = "white";

    drawSprites();
    robots()


   if (keyDown("space")) {
    createBullet();
    
  }
 
  aero.x = World.mouseX;
  
  if (bulletGroup.isTouching(robotGroup)) {
    robotGroup.destroyEach();
    bulletGroup.destroyEach();
    score=score+2;
  }

  if(robotGroup.isTouching(aero)){
    death=death+1;
    robotGroup.destroyEach();
    score=0;
  }
}

function robots() {
  
    if (frameCount % 65 === 0) {
      var robot = createSprite(600,120,40,10);
      robot.addImage(enimg);
      robot.scale=0.8
      robot.x = Math.round(random(10,990));
      robot.velocityY = 10;
      robot.lifetime=200;
      robotGroup.add(robot);
    }}

    function createBullet() {
      var bullet= createSprite(500,520,10,10);
      bullet.addImage(bulimg);
      bullet.scale=3;
      bullet.setCollider("circle",0,0,4);
      bullet.debug = false;
      bullet.x = World.mouseX;
      bullet.y=520;
      bullet.velocityY = -3;
      bullet.lifetime = 190;
      bulletGroup.add(bullet);
      bulletsound.play();
    }