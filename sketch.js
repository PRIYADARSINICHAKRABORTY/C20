var movingRect,fixedRect;


function setup() {

  createCanvas(800,400);
 movingRect= createSprite(200, 200, 50, 50);
 fixedRect= createSprite(200,10,50,50);
 movingRect.shapeColor = "pink";
 fixedRect.shapeColor = "pink";
 movingRect.velocityY = 4;

}

function draw() {
  background(255,255,255); 
  if(movingRect.x - fixedRect.x < fixedRect.width/2+movingRect.width/2
    &&
    fixedRect.x - movingRect.x < fixedRect.width/2+movingRect.width/2) 
    {
      fixedRect.velocityX = movingRect.velocityX*(-1);
      movingRect.velocityX = fixedRect.velocityX *(-1);
    }

    if(movingRect.y - fixedRect.y < fixedRect.height/2+movingRect.height/2
      &&
      fixedRect.y- movingRect.y < fixedRect.height/2+movingRect.height/2) 
      {
        fixedRect.velocityY = movingRect.velocityY*(-1);
        movingRect.velocityY = fixedRect.velocityY *(-1);
      }
  
  drawSprites();
}