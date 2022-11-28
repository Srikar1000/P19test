var cloud, cloudImg;
var bird, birdImg;
var obstacle1, obstacle1Img, obstacleGroup,obstacle2;
var obstacle3, obstacle2Img, obstacle3Img;
var obstacleDecider = 0;
var gameState = "play";
var gameOver, gameOverImg;

function preload(){
    createCanvas(1200,1200);
   cloudImg = loadImage("cloud.jpg");
   birdImg = loadImage("bird.png");
   obstacle1Img = loadImage("watermelon.jpg");
   obstacle2Img = loadImage("apple.jpg");
   obstacle3Img = loadImage("banana.jpg");
   gameOverImg = loadImage("gameOver.png");
  
}

function setup() {
    cloud = createSprite(600,600)
   cloud.addImage("cloud", cloudImg);
    bird = createSprite(20,100);
    bird.addImage("bird",birdImg)
    bird.scale = 0.1;
    obstacle1 = createSprite(450,Math.round(random(20,350)));
    obstacle1.addImage("ob1",obstacle1Img);
    obstacle1.scale = 0.2;
    obstacle2 = createSprite(450,Math.round(random(20,350)));
    obstacle2.addImage("ob2",obstacle2Img);
    obstacle2.scale = 0.2;
    obstacle3 = createSprite(450,Math.round(random(20,350)));
    obstacle3.addImage("ob3",obstacle3Img);
    obstacle3.scale = 0.2;
   obstacleGroup = createGroup();
   obstacleGroup.add(obstacle1);
   obstacleGroup.add(obstacle2)
   obstacleGroup.add(obstacle3)
   gameOver = createSprite(200,200);
   gameOver.addImage("gameover",gameOverImg);
   gameOver.visible = false;
}

function draw() {
    if (gameState = "play"){
        cloud.velocityX = -2
        if (cloud.x<300){
            cloud.x = 600;
         }
     
         if(Math.round(random(0,3)) == 1){
           obstacle1.velocityX = -5
         } else if (Math.round(random(1,3)) == 2){
             obstacle2.velocityX = -5
         } else {obstacle3.velocityX = -5}
     
     
         if (obstacle1.x<0){
            obstacle1.x = 600
            obstacle1.y = Math.round(random(20,350))
         } else if (obstacle2.x<0){
             obstacle2.x = 600
             obstacle2.y = Math.round(random(20,350))
         } else if (obstacle3.x<0){
             obstacle3.x = 600
             obstacle3.y = Math.round(random(20,350))
         }
     
         
       //if (frameCount %100; == 0){
         //obstacle1.velocityX = -5;
        // obstacle2.velocityX = -5;
       //  obstacle3.velocityX = -5;
      // } if (frameCount % 200 == 0){
     
     //  }
        
         if (keyDown("up")){
             bird.y = bird.y -10 ;
         } if (keyDown("down")){
             bird.y = bird.y+10;
         }
         drawSprites();
         textSize(20)
         text("Dodge the Obstacles!",100,20);
         text("USE UP AND DOWN ARROW!",80,380);
         textSize(10);
        // text("i kinda need help on the end state, i cant get it to work lines:90-96",10,300)
    } 
    if (bird.isTouching(obstacle1||obstacle2||obstacle3)){
        gameState = "end"
    } if (gameState == "end"){
        obstacleGroup.destroyEach();

        gameOver.visible = true;
    }
   
}
