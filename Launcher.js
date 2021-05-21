
class Launchar{
    constructor(body1,point2){
        var options={
            'bodyA':body1,
            'pointB':point2,
            'length':10,
            'stiffness':0.04,
        }
        this.launcher=Constraint.create(options);
        World.add(world,this.launchar);
    }

    display(){
        if (this.launchar.bodyA){
            var posA= this.launchar.bodyA.position;
            var posB=this.pointB;
            push();
            strokeWeight(5);
            line(posA.x,posA.y,posB.x,posB.y);  
            pop();
        }
   
    }

   fly() {
    this.launchar.bodyA=null; 
   }

}






