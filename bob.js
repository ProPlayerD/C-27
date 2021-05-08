class Bob {
    constructor(x, y) {
      var options = {
        density:2,
        friction: 1.2,
        restitution:1.2,
        isStatic : false
      };
      this.body = Bodies.circle(x, y, 35, options);
      this.radius = 35*2;
      World.add(world, this.body);
    };
    display(){
       var pos = this.body.position;
       push();
       fill("blue");
       ellipseMode(CENTER);
       ellipse(pos.x,pos.y,this.radius,this.radius)
       pop();

    };
  };