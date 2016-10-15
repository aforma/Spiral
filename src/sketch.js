var leaf = require("./leaf");

var ctx = undefined;
var env = undefined;
var c = 5;
var n = 0;

exports.setup = function(_ctx, _env){
  ctx = _ctx;
  env = _env;

  background("#fff");
}

exports.draw = function() {
  var theta = n * (137.3 * Math.PI / 180);
  var r = c * Math.sqrt(n);

  var l = leaf()
  l.x = r * Math.cos(theta)
  l.y = r * Math.sin(theta)
  l.draw(ctx)
  n++;
}

function background(color){
  ctx.fillStyle = color;
  ctx.fillRect(0,0, ctx.canvas.width, ctx.canvas.height);
}