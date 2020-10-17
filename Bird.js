class Bird {
  constructor(x,y,width,height) {
    var options = {
        isStatic: false,
        restitution:0.8,
        friction:1.0,
        density:1.5
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    rectMode(CENTER);
    fill("Yellow");
    rect(pos.x, pos.y, this.width, this.height);
  }
};
