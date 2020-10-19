var wall,thikness;

var bullet,speed,weight;

function setup() {
  createCanvas(1600,400);
  thikness=random(22,83);
  speed=random(223,321);
  weight=random(30,52);
  Bullet=createSprite(40,70,10,10);
  Bullet.velocityX = speed;
  wall=createSprite(1200,200,thikness,400);
  wall.shapeColor=("80,80,80");
 
  
}

function draw() {
  background(0,0,0);  
  

    if(hasCollided(bullet, wall)){
      bullet.velocityX=0;
      
      bullet.velocityX=0;
      var damage=0.5 * weight * speed * speed/(thikness *thikness *thikness);


      if(damage>10){
        wall.shapeColor=color(255,0,0);
      }


      if(damage<10){
        wall.shapeColor=color(0,255,0);
      }
    }
  
  
  

  drawSprites();
}

function hasCollided(lbullet,lwall){
  BulletRightEdge=lbullet.x +lbullet.width;
  wallLeftEdge=wall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true
  }
  return false;
}