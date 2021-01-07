class BaseClass  {
  constructor(x, y){
   var options={

    isStatic:false,
    restitution:1,
    density:1
   }
   
 this.body=Bodies.rectangle(x,y,30,40,options)
 this.width=30
 this.height=40
 this.image=loadImage("polygon.png")
 World.add(world,this.body)
}
display(){
  
  push ();
  translate (this.body.position.x,this.body.position.y)
  
  rectMode(CENTER)
  rect(0,0,30,40)
  pop ();


}
display2(){
 
  push ();
  translate (this.body.position.x,this.body.position.y)
  
  imageMode(CENTER)
  image(this.image,0,0,40,40)
  pop ();


}
}