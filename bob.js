class Bob{
    constructor(x,y,radius ){
        var option={
            isStatic:false,
            restitution:1,
            density:0.8
                    }
this.body=Bodies.circle(x,y,radius,option)
this.radius=radius
World.add(world,this.body)
    }
    display(){
var pos=this.body.position
ellipseMode(RADIUS)
ellipse(pos.x,pos.y,20,20)

    }
}

