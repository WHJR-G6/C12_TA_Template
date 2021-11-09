var player,player2;
var platform,platform2;
var player_image, platform_image;

function preload(){
  player_image=loadImage("images/jack2.png")
  platform_image = loadImage("images/p1.png");
  player2_image=loadImage("images/jack2.png")
  platform2_image = loadImage("images/p2.png");
}

function setup() {
  createCanvas(500, 500);
  player = createSprite(250,300,20,50);
  player.addImage("player",player_image)

  platform = createSprite(250,350,100,10);
  platform.addImage("platform", platform_image)
  platform.scale=0.15

  
  
}

function draw() {
  background('#F2F5B6');
  
  if(keyDown("up"))
  {
    player.velocityY=-10
  }

  player.velocityY = player.velocityY + 0.8;
  player.collide(platform)

  spawnPlatform();

  drawSprites();
}

function spawnPlatform(){

  if(frameCount % 60 ===0){
  
    var platforms = createSprite(250,0,50,50);
  platforms.velocityY = 4;

  var r = Math.round(random(1,6))
  switch (r){
    case 1 : platforms.addImage(platform1);
    break;
    case 2 : platforms.addImage(platform2);
    break;
    case 3 : platforms.addImage(platform3);
    break;
    case 4 : platforms.addImage(platform4);
    break;
    
      
      
      
  }
  platforms.collide(jack);
  platforms.scale = 0.1;

  platforms.x = random(0,500);
  }
}
