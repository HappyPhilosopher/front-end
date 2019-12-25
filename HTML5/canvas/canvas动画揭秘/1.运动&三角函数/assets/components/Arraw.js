/**
 * 绘制箭头类
 *
 * @class Arrow
 */
class Arrow {
  constructor(options) {
    const acquiescentOpt = {
      x: 0,
      y: 0,
      w: 60,
      h: 30,
      rotation: 0,
      fillStyle: 'rgb(57, 119, 224)',
      strokeStyle: 'rgba(0, 0, 0, 0)'
    };
    this.options = Object.assign(acquiescentOpt, options);
  }
  drawPath(ctx) {
    const { w, h } = this.options;

    ctx.beginPath();
    ctx.moveTo(-w / 2, -h / 2);
    ctx.lineTo(w / 10, -h / 2);
    ctx.lineTo(w / 10, -h);
    ctx.lineTo(w / 2, 0);
    ctx.lineTo(w / 10, h);
    ctx.lineTo(w / 10, h / 2);
    ctx.lineTo(-w / 2, h / 2);
    ctx.closePath();
  }
  render(ctx) {
    const { x, y, rotation, fillStyle, strokeStyle } = this.options;
    ctx.save();
    
    ctx.translate(x, y);
    ctx.rotate(rotation);
    this.drawPath(ctx);
    ctx.fillStyle = fillStyle;
    ctx.strokeStyle = strokeStyle;
    ctx.fill();
    ctx.stroke();

    ctx.restore();
  }
}
