class Triangle{
    constructor(x,y,sides,radius){
        var options = {
            'restitution':0.8,
            'friction':0.3,
            'density':1.0
        }
        this.body = Bodies.polygon(x, y, sides, radius, options);
        this.sides = sides;
        this.radius = radius;
        
        World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      fill(150,12,12);
      regularPolygon(pos.x,pos.y,this.radius,this.sides);
      pop(); 
    }
    
}