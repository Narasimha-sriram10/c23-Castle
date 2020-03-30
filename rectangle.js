class Rectangle {
    constructor(x, y, width, height) {
      var options = {
          isStatic: true,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill(206,177,33);
      rect(pos.x, pos.y, this.width, this.height);
      pop();
    }
  };