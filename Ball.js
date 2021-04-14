class ball{
    constructor(x,y,r){
        var options_ball = {
            isStatic:false,
            restitution:0,
            friction:1,
            density:1.2
        }
     this.x = x;
     this.y = y;
     this.r = r;  
     
     this.image = loadImage("monkey.jpg");
     
     this.body = Bodies.circle(this.x,this.y,this.r,options_ball);
     World.add(world,this.body); 
    
    }
 display(){
     var pos = this.body.position;
     push();
     translate(pos.x,pos.y);
     rectMode(CENTER);
     strokeWeight(2);
     fill("silver");
     //imageMode(RADIUS);
     image(this.image,0,0,this.r*2,this.r*2);
     pop();
}
}