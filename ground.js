// 1
class Ground 
{
  // 3
  constructor(x, y, w, h) 
  {
    // 4
    let options = {
    // solo permaneça parado.

      isStatic:true
    };
    // ajustar o mecanismo de física.e (4 options
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    World.add(world, this.body);
  }
// 5
  show() {
    var pos = this.body.position;
    Matter.Body.rotate(this.body,angle)

    push();
    rectMode(CENTER);
    stroke(255);
    fill(127);
// 6
   translate(pos.x,pos.y);
   rotate(angle);
   rect(0, 0, this.w, this.h);
   pop();
   angle +=0.1;

  }
  
}
