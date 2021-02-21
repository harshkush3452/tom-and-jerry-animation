var garden,gardenImg;
function preload() {
    //load the images here
    gardenImg=loadImage("garden.png");
}
function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    garden=createSprite(200,200);
    garden.addImage(gardenImg);
    garden.scale=1;
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}




  
