//creating a raindrop class
class rainDrops{
  constructor(){
    this.x = random(width);
    this.y = random(-400,-10)
    this.yspeed = random(3,7);
  }
  fall(){
    this.y = this.y+this.yspeed;
  }
  display(){
    fill("green");
    ellipse(this.x,this.y,6,6);
    if(this.y>height){
      this.y = -10;
    }
  }
}