class Slingshot{
    constructor(a,b){
        var op={
            bodyA:a,
            pointB:b,
            stiffness:0.4,
            length:5
        }
        this.sling1=loadImage("sprites/sling1.png")
        this.sling2=loadImage("sprites/sling2.png")
        this.sling3=loadImage("sprites/sling3.png")

        this.slingshot=Constraint.create(op)
        this.pointB=b
        World.add(world,this.slingshot)
    }
    fly(){
        this.slingshot.bodyA=null;
    }
    display(){ 
        image(this.sling1,200,20)
        image(this.sling2,175,20)

        if(this.slingshot.bodyA){
            var posA=this.slingshot.bodyA.position
            var posB=this.pointB
            push() 
            stroke(48,22,8)
            strokeWeight(5)
            if(posA.x<220){
                line(posA.x-20,posA.y,posB.x-10,posB.y)
                line(posA.x-20,posA.y,posB.x+30,posB.y)
                image(this.sling3,posA.x-25,posA.y-10,10,30)
            }
            else{
                line(posA.x+20,posA.y,posB.x-10,posB.y)
                line(posA.x+20,posA.y,posB.x+30,posB.y)
                image(this.sling3,posA.x+25,posA.y-15,10,30)
            }
            pop() 
        }
        
    }
} 