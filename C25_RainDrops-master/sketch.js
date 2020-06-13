//making drops using array and for function
var drop = [50];

function setup() {
  createCanvas(400,400);
  
  for(var i=0;i<100;i++){
     drop[i] = new rainDrops;
  }
}

function draw() {
  background("purple");
  for(var i=0;i<100;i++){
    drop[i].display();  
    drop[i].fall();
  }
}