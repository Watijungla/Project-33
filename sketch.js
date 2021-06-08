var getBackgroundImg;

var bg = "sprite/snow3.jpg";

function preload() {
  getBackgroundImg();
}

function setup() {
  var create = createCanvas(1200,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  if(backgroundImg)
      background(backgroundImg);

  background(255,255,255);  
  drawSprites();

  backgrounndImg = loadImage(bg);
  console.log(backgroundImg);
}