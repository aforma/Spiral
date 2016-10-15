var leaf = require("./leaf");

var ctx = undefined;
var env = undefined;
var c = 5;
var n = 0;
var r = 0
var leafRadius = 10;

exports.setup = function(_ctx, _env){
  ctx = _ctx;
  env = _env;
  leafRadius = 20 * (ctx.canvas.width / 1024);
  c = 9 * (ctx.canvas.width / 1024);

  background("#fff");
}

exports.draw = function() {
  var theta = n * (137.3 * Math.PI / 180);
  r = c * Math.sqrt(n);
  if(leafRadius < 1) {
    env.done();
    return;
  }

  leafRadius *= 0.999;

  var l = leaf(ctx)
  l.radius = leafRadius;
  l.color = 1;
  l.x = r * Math.cos(theta)
  l.y = r * Math.sin(theta)
  l.draw(ctx)
  n++;
  c -= 0.001 * (ctx.canvas.width / 1024);
}

function background(color){
  ctx.fillStyle = color;
  ctx.fillRect(0,0, ctx.canvas.width, ctx.canvas.height);
}