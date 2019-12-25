class Ball {
  constructor(options) {
    const acquiescentOptions = {
      x: 0,
      y: 0,
      r: 50,
      scaleX: 1,
      scaleY: 1,
      alpha: 1,
      fillStyle: 'rgb(57, 119, 224)',
      strokeStyle: 'rgba(0, 0, 0, 0)'
    };
    this.options = Object.assign(acquiescentOptions, options);
  }
  render(ctx) {
    const {
      x,
      y,
      r,
      scaleX,
      scaleY,
      alpha,
      fillStyle,
      strokeStyle
    } = this.options;

    ctx.save();

    ctx.translate(x, y);
    ctx.scale(scaleX, scaleY);
    ctx.globalAlpha = alpha;
    ctx.fillStyle = fillStyle;
    ctx.strokeStyle = strokeStyle;

    ctx.beginPath();
    ctx.arc(0, 0, r, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    ctx.restore();
  }
}
