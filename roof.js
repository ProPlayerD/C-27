class Roof {
    constructor(x, y) {
      var options = {
         isStatic:true
      };
      this.body = Bodies.rectangle(x, y, 400, 30, options);
      World.add(world, this.body);
    };
    display(){
      var pos = this.body.position;
      push();
      fill("gray");
       rectMode(CENTER);
       rect(pos.x,pos.y,400,30);
       pop();
    };
  };