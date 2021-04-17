class Particle{

    constructor(x,y,r){

        var options={
            'restituion':0.8,
            'density':1.0,
            'friction':0.5
        }

        this.body = Bodies.circle(x,y,r,options);
        this.color = color(random(0,255), (0,255), (0,255));
        this.r = r;
        World.add(world,this.body);
    }

    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        ellipseMode(RADIUS);
        ellipse(this.image, 0, 0, this.width, this.height);
        pop();
    }
}










