var bgImg,bg;
var catImg1,mouseImg1;
var tom,jerry;

function preload() {
    //load the images here
    bgImg = loadImage("images/garden.png");
    catImg1 = loadImage("images/cat1.png");
    catImg2 = loadAnimation("images/cat2.png","images/cat3.png");
    catImg3 = loadImage("images/cat4.png");
    mouseImg1 = loadImage("images/mouse1.png");
    mouseImg2 = loadAnimation("images/mouse2.png","images/mouse3.png");
    mouseImg3 = loadImage("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);

    //create tom and jerry sprites here
     tom = createSprite(850,600,50,50);
     tom.addImage(catImg1);
     tom.scale = 0.3;
     jerry = createSprite(200,600,50,50);
     jerry.addImage(mouseImg1);
     jerry.scale = 0.2;
     jerry.debug = true;
}

function draw() {

background(bgImg);

//Write condition here to evalute if tom and jerry collide
if(tom.x - jerry.x < jerry.width/2 + tom.width/2 
   ){
tom.velocityX = 0;
  tom.addImage(catImg3);
  jerry.addImage(mouseImg3);
   }
 

    drawSprites();
}


function keyPressed(){

    //For moving and changing animation write code here
    if(keyDown ("left")){
      tom.addAnimation("tomRunning",catImg2);
      jerry.addAnimation("jerryRunning",mouseImg2);
      tom.velocityX = -5;
}   }
