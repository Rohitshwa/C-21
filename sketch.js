function setup() {
  createCanvas(1200,800);
  car = createSprite(1000, 200, 80, 30);
  car.shapeColor = "red";
  car.velocityX = -2;
  wall = createSprite(500,400,50,100)
  wall.shapeColor = "grey";
  car2 = createSprite(200,300,80,30);
  car2.shapeColor = "red";
  car2.velocityX = 2;
  car3 = createSprite(600,300,90,40);
  car3.shapeColor = "yellow"
  car3.velocityX = -3;
}

function draw() {
  background(0,0,0);  
  car.x = World.mouseX;
  car.y = World.mouseY;
  //console.log(car.x-wall.x);
  
if(isTouching(car2,car3)){
  car2.shapeColor = "blue";
  car3.shapeColor = "blue";
}
else{
  car2.shapeColor = "red";
  car3.shapeColor = "grey";
}
 bounceOff(car2,car3);
 // isTouching();
  drawSprites();
}

