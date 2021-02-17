var mrect,frect;




function setup() {
  createCanvas(800,400);
  mrect=createSprite(400, 200, 50, 50);
  frect=createSprite(600,200,50,50);
  mrect.shapeColor="red";
  frect.shapeColor="red";
  mrect.debug=true;
  frect.debug=true;

}

function draw() {
  background(0); 
  mrect.x=mouseX;
  mrect.y=mouseY; 

console.log(frect.x - mrect.x);
console.log(frect.width/2 + mrect.width/2);
console.log(frect.x - mrect.x < frect.width/2 + mrect.width/2);

  if(mrect.x - frect.x < frect.width/2 + mrect.width/2 &&
    frect.x - mrect.x < frect.width/2 + mrect.width/2 &&
    mrect.y - frect.y < frect.height/2 + mrect.height/2 &&
    frect.y - mrect.y < frect.height/2 + mrect.height/2){

    mrect.shapeColor="green";
    frect.shapeColor="green";
  }

  else{
    mrect.shapeColor="red";
    frect.shapeColor="red";
  }
  drawSprites();
}