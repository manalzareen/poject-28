class Box {
    constructor (x,y){
        var options = {
            'isStatic':true
        }
        this.body = Bodies.rectangle(x,y,50,50,options);
        World.add(world, this.body);
        this.image=loadImage("dustbingreen.png");
        this.width = width;
        this.height = height;
        
    }

    display(){
        var pos =this.body.position;
        imageMode(CENTER) ;
        fill("white");
        image(this.image,pos.x,pos.y,120,120);
    }  
}