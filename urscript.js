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
    this.x_factor = 0.0;
    this.y_factor = -1.0;
  }

  setAngle(angle){
    var rad = ((angle-90)*Math.PI)/180.0
    this.x_factor = Math.cos(rad)
    this.y_factor = Math.sin(rad)
  }

  draw(context){
    ctx.beginPath();
    ctx.lineWidth = this.width;
    context.moveTo(this.center_x, this.center_y);
    var line_x = this.center_x + this.x_factor * this.length;
    var line_y = this.center_y + this.y_factor * this.length;
    context.lineTo(line_x, line_y);
    context.stroke();
  }

}

var sekundviser = new Viser(150, 2, 200, 200);
sekundviser.setAngle(45);
sekundviser.draw(ctx);

