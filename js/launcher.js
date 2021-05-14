class Launcher {
    constructor(bodyA,pointB){
    var options={
    bodyA:bodyA,
    pointB:pointB,
    stiffness:0.04,
    length:1
    }
    this.pointB=pointB
    this.body=Matter.Constraint.create(options)
    World.add(world,this.body)
    }
    fly(){
        this.body.bodyA=null;
    }
    attach(body1){
       this.body.bodyA=body1; 
    }
    display(){
    if(this.body.bodyA){
    strokeWeight(2)
    line(this.body.bodyA.position.x,this.body.bodyA.position.y,this.pointB.x,this.pointB.y)
    
    }
    }
    }
    
    