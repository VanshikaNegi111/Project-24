class Iron{
    constructor(x,y){
        var options = {
            'density':34,
            'friction': 3,
            'restitution':0.8
          }
        this.body = Bodies.rectangle(x, y, 50, 150, options);
        this.width = 50;
        this.height = 150;
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        strokeWeight(3);
        stroke('black')
        fill('brown')
        rectMode(CENTER)
        rect(0, 0, 50,150);
        pop();
    }
}