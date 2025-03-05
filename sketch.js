
//flower
let flower1 = false;
let flower2 = false;
let flower3 = false;

//filler
let filler1 = false;
let filler2 = false;
let filler3 = false;

//leafy greens
let leafy1 = false;
let leafy2 = false;
let leafy3 = false;

//vase
let vase1 = false;
let vase2 = false;



//flowers buttons
let flower1x = 30;
let flower1y = 30;

let flower2x = 80;
let flower2y = 30;

let flower3x = 130;
let flower3y = 30;

//filler buttons
let filler1x = 250;
let filler1y = 30;

let filler2x = 300;
let filler2y = 30;

let filler3x = 350;
let filler3y = 30;


//leafygreens buttons
let leafy1x = 30;
let leafy1y = 80;

let leafy2x = 80;
let leafy2y = 80;

let leafy3x = 130;
let leafy3y = 80;

//vase buttons
let vase1x = 250;
let vase1y = 80;

let vase2x = 300;
let vase2y = 80;

//image placement
let imgx = 200;
let imgy = 245;
let imgwh = 300;

//image declaration
let VaseOne, VaseTwo, dollar, fern, salal, poppyF, tulipF, cosmosF, bbF, poppyC, tulipC, cosmosC, fmnC, solidagoC,
bbC, poppyB, cosmoB, tulipB, solidagoB, fmnB, bbB, v2icon, v1icon, tulipIcon, poppyIcon, cosmoIcon, 
bbIcon, salidIcon, fmnIcon, dollarIcon, salalIcon, fernIcon ;

function preload(){
VaseOne = loadImage('img/VaseOne.png');
VaseTwo = loadImage('img/VaseTwo.png');
poppyF = loadImage('img/poppyF.png');
tulipF = loadImage('img/tulipF.png');
cosmosF = loadImage('img/cosmosF.png');
bbF = loadImage('img/bbF.png');
poppyC = loadImage('img/poppyC.png');
tulipC = loadImage('img/tulipC.png');
cosmosC = loadImage('img/cosmosC.png');
fmnC = loadImage('img/fmnC.png');
solidagoC = loadImage('img/solidagoC.png');
bbC = loadImage('img/bbC.png');
poppyB = loadImage('img/poppyB.png');
cosmoB = loadImage('img/cosmoB.png');
tulipB = loadImage('img/tulipB.png');
solidagoB = loadImage('img/solidagoB.png');
fmnB = loadImage('img/fmnB.png');
bbB = loadImage('img/bbB.png');
dollar = loadImage('img/dollar.png');
fern = loadImage('img/fern.png');
salal = loadImage('img/salal.png');
v2icon = loadImage('img/v2icon.png')
v1icon = loadImage('img/v1icon.png')
tulipIcon = loadImage('img/tulipIcon.png')
poppyIcon = loadImage('img/poppyIcon.png')
cosmoIcon = loadImage('img/cosmoIcon.png')
bbIcon = loadImage('img/bbIcon.png')
salidIcon = loadImage('img/salidIcon.png')
fmnIcon = loadImage('img/fmnIcon.png')
dollarIcon = loadImage('img/dollarIcon.png')
salalIcon = loadImage('img/salalIcon.png')
fernIcon = loadImage('img/fernIcon.png')
}

function setup() {
  createCanvas(400, 400);
  imageMode(CENTER);
}

function draw() {
  background(255,241,212);

  image(tulipIcon, flower1x, flower1y,50,50);
  image(cosmoIcon, flower2x, flower2y, 50, 50);
  image(poppyIcon, flower3x, flower3y, 50, 50);

  image(bbIcon, filler1x, filler1y, 50, 50);
  image(fmnIcon, filler2x, filler2y, 50, 50);
  image(salidIcon, filler3x, filler3y, 50, 50);
  
  image(dollarIcon, leafy1x, leafy1y, 50, 50);
  image(salalIcon, leafy2x, leafy2y, 50, 50);
  image(fernIcon, leafy3x, leafy3y, 50, 50);
  
  image(v1icon, vase1x, vase1y, 50, 50);
  image(v2icon, vase2x, vase2y, 50, 50);
  
  //draw bouquet here

  //leafy greens

  if( leafy1){
    image(dollar, imgx, imgy, imgwh, imgwh);
  }
  if (leafy2) {
    image(salal, imgx, imgy, imgwh, imgwh);
  }
  if (leafy3) {
    image(fern, imgx, imgy, imgwh, imgwh);
  }

//first row

  if( filler1){
    image(bbB, imgx, imgy, imgwh, imgwh);
  }
  if( filler2){
    image(fmnB, imgx, imgy, imgwh, imgwh);
  }
  if( filler3){
    image(solidagoB, imgx, imgy, imgwh, imgwh);
  }
  
  
  if( flower1){
    image(tulipB, imgx, imgy, imgwh, imgwh);
  }
  if( flower2){
    image(cosmoB, imgx, imgy, imgwh, imgwh);
  }
  if( flower3){
    image(poppyB, imgx, imgy, imgwh, imgwh);
  }
  
  //second row

  if( filler1){
    image(bbC, imgx, imgy, imgwh, imgwh);
  }
  if( filler2){
    image(fmnC, imgx, imgy, imgwh, imgwh);
  }
  if( filler3){
    image(solidagoC, imgx, imgy, imgwh, imgwh);
  }
  
  
  if( flower1){
    image(tulipC, imgx, imgy, imgwh, imgwh);
  }
  if( flower2){
    image(cosmosC, imgx, imgy, imgwh, imgwh);
  }
  if( flower3){
    image(poppyC, imgx, imgy, imgwh, imgwh);
  }
  
  //third row

  if( filler1){
    image(bbF, imgx, imgy, imgwh, imgwh);
  }
  
  
  if( flower1){
    image(tulipF, imgx, imgy, imgwh, imgwh);
  }
  if( flower2){
    image(cosmosF, imgx, imgy, imgwh, imgwh);
  }
  if( flower3){
    image(poppyF, imgx, imgy, imgwh, imgwh);
  }


  //vase

  if( vase1){
    image(VaseOne, imgx, imgy, imgwh, imgwh);
  }
  if (vase2) {
  image(VaseTwo, imgx, imgy, imgwh, imgwh);
  }

}

function mousePressed(){
  
  //main flowers
  if (dist(flower1x,flower1y,mouseX,mouseY)<10){
    flower1 = !flower1;
  }
  if (dist(flower2x,flower2y,mouseX,mouseY)<10){
    flower2 = !flower2;
  }
  if (dist(flower3x,flower3y,mouseX,mouseY)<10){
    flower3 = !flower3;
  }
   
  //secondary flowers
  if (dist(filler1x,filler1y,mouseX,mouseY)<10){
    filler1 = !filler1;
  }
  if (dist(filler2x,filler2y,mouseX,mouseY)<10){
    filler2 = !filler2;
  }
  if (dist(filler3x,filler3y,mouseX,mouseY)<10){
    filler3 = !filler3;
  }
  
  //leafy greens
    if (dist(leafy1x,leafy1y,mouseX,mouseY)<10){
    leafy1 = !leafy1;
  }
  if (dist(leafy2x,leafy2y,mouseX,mouseY)<10){
    leafy2 = !leafy2;
  }
  if (dist(leafy3x,leafy3y,mouseX,mouseY)<10){
    leafy3 = !leafy3;
  }
  
  //vasesssss
    if (dist(vase1x,vase1y,mouseX,mouseY)<10){
    vase1 = !vase1;
  }
  if (dist(vase2x,vase2y,mouseX,mouseY)<10){
    vase2 = !vase2;
  }

}
