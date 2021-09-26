var astronauta,astronautaImg;
var espaço,espaçoImg;

function preload(){
astronautaImg = loadImage("foguete.png");
espaçoImg = loadImage("espaço.jpg");
}
function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  espaço = createSprite(800,400);
  astronauta = createSprite(200,200,30,30);
  espaço.addImage(espaçoImg);
  astronauta.addImage(astronautaImg);
  astronauta.scale = 0.3;
  espaço.scale = 5;
  

}

function draw() {
  background(255,255,255);  
  bordas = createEdgeSprites();
  astronauta.bounceOff(bordas);
  textSize(10);
  fill("white");
  text("aperte enter para voar e espaço para voltar!",30,30)
  drawSprites();

  if(keyCode == 13){
    astronauta.velocityX = 17;
    astronauta.velocityY = 30;
  }
 if(keyCode == 32){
   astronauta.position.x = 200;
   astronauta.position.y = 200;
   

 }
}