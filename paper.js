class paper {
    constructor(x, y, width ,radius) {
        var options = {
            
            'restitution':0.3,
            'friction':0.5,
            'density':1.2
        }
        this.body = Bodies.circle(x, y, 50, options);
        this.radius=50;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        fill("yellow");
       image(i2, 0, 0, 50,50);
        pop();
      }
}