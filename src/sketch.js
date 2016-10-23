var leaf = require("./leaf");

var ctx = undefined;
var env = undefined;
var c = 5;
var n = 0;
var r = 0
var leafRadius = 20;

exports.setup = function(_ctx, _env){
  ctx = _ctx;
  env = _env;
  leafRadius = 50 * (ctx.canvas.width / 1024);
  c = 9 * (ctx.canvas.width / 1024);

  background("#fff");
}

exports.draw = function() {
  var theta = n * (137.3 * Math.PI / 180);
  r = c * Math.sqrt(n);
  if(leafRadius < (1 * ctx.canvas.width / 1024) || c < -3) {
    env.done();
    return;
  }

  var t = (0.999 * (ctx.canvas.width / 1024))

  leafRadius *= 0.999;

  var l = leaf(ctx)
  l.radius = leafRadius;
  l.color = (1 * (ctx.canvas.width / 1024));
  l.angle = theta;
  l.x = (ctx.canvas.width / 2) + r * Math.cos(theta)
  l.y = (ctx.canvas.height / 2) + r * Math.sin(theta)
  l.draw(ctx)
  n++;
  if(leafRadius < (15  * (ctx.canvas.width / 1024))) {
    c -= 0.003 * (ctx.canvas.width / 1024);
  } else {
    c -= 0.001 * (ctx.canvas.width / 1024);
  }
}

function background(color){
  ctx.fillStyle = color;
  ctx.fillRect(0,0, ctx.canvas.width, ctx.canvas.height);
}

function signature() {

}