var c = document.getElementById("analogt_ur");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(200, 200, 200, 0, 2 * Math.PI, );
ctx.stroke();

class Viser {
  constructor(length, width, center_x, center_y) {
    this.length = length;
    this.width = width;
    this.center_x = center_x;
    this.center_y = center_y;
  }

  draw(context){
    ctx.beginPath();
    ctx.lineWidth = this.width;
    context.moveTo(this.center_x, this.center_y);
    context.lineTo(this.center_x, this.center_y - this.length);
    context.stroke();
  }

}

var sekundviser = new Viser(100, 2, 200, 200);
sekundviser.draw(c.getContext("2d"));