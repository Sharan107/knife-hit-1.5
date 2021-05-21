var wheel_img,knife_img,fruit1_img;
var wheel,knife,fruit1;
var startx=300,starty=300,angle=0,radius=150,increment=10;

function preload() {

 
  wheel_img=loadImage("images/wheel.png");
  knife_img=loadImage("images/sword.png");
  fruit1_img=loadImage("images/apple.png");
}

function setup() {

  createCanvas(700,700);
wheel=createSprite(300,300);
wheel.scale=1.3;
wheel.addImage(wheel_img);
wheel.rotation=270;
wheel.debug=false;
wheel.setCollider("circle",0,0,105);
  
knife=createSprite(300,650);
knife.addImage(knife_img);
knife.rotation=-45;
knife.debug=true;
knife.setCollider("rectangle",20,-30,50,70);

fruit1=createSprite(startx,starty);
fruit1.addImage(fruit1_img);
fruit1.scale=0.3;
fruit1.debug=true;

 }

function draw() {
 background(rgb(38,0,73));
 
   
    wheel.rotation=wheel.rotation+10;

    angle=angle+increment;
    fruit1.x=startx+radius*Math.cos(angle*Math.PI/180);
    fruit1.y=starty+radius*Math.sin(angle*Math.PI/180);
    fruit1.rotation=60-angle;

    if(keyDown("up")){
      knife.velocityY=-10;
    }

     if(knife.isTouching(wheel)){
       knife.velocityY=0;
       wheel.rotation=0;
       fruit1.x=startx;
       fruit1.y=starty;
       fruit1.rotation=0;
     }


    if(knife.isTouching(fruit1)){
       knife.x=300;
       knife.y=650;
       knife.velocityY=0;
       fruit1.destroy();
    }

    if(keyDown("space") && knife.y<0){
       knife.y=650;
       knife.x=300;
       knife.velocityY=0;
    }
  

 drawSprites();
}
