var movingRect,fixedRect;
var gameObject1,gameObject2;
function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(400, 200, 50, 50);
  movingRect=createSprite(200,0,100,20);

  gameObject1=createSprite(200,400,50,50);
  gameObject2=createSprite(100,100,100,20);

  gameObject1.shapeColor="green";
  gameObject2.shapeColor="green";
  
  fixedRect.shapeColor="green";
  movingRect.shapeColor="green";

  movingRect.velocityY=4;
  gameObject1.velocityY=-4;

}

function draw() {
  background(0);  

  //movingRect.x=World.mouseX;
  //movingRect.y=World.mouseY;

  // if(isTouching(movingRect,gameObject1)){
  //   gameObject1.shapeColor="red";
  //   movingRect.shapeColor="red";
  // }else{
  //   gameObject1.shapeColor="green";
  //   movingRect.shapeColor="green";
  // }

  bounceOff(gameObject1,movingRect);
  drawSprites();
}

