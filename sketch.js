var car, wall;

var speed, weight;




function setup() {
  createCanvas(1600,400);

speed = random(55,90);
weight = random(400,1500);

  car = createSprite(50, 200, 50, 50);
  car.velocityX = speed

  wall = createSprite(1500,200,60,height/2);
  wall.shapeColor = "red"
}



function draw() {
  background("black");  

if(wall.x - car.x< wall.width/2 + car.width/2){
  car.velocityX = 0;

  var Deformation = 0.5 * weight * speed* speed / 22509

  console.log(Deformation)

  if(Deformation < 100 ){
car.shapeColor  = "green"

  }

  if(Deformation > 100  && Deformation <180){
car.shapeColor = "yellow"

  }

  if(Deformation > 180 ){
    car.shapeColor = "red"
  }

}


  drawSprites();
}