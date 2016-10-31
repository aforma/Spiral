var leaf = require("./leaf");

var ctx = undefined;
var env = undefined;
var c = 20;
var n = 0;
var r = 0
var leafRadius = 10;
var reversed = false;

exports.setup = function(_ctx, _env){
  ctx = _ctx;
  env = _env;
  leafRadius = 7 * (ctx.canvas.width / 1024);
  c = 5 * (ctx.canvas.width / 1024);

  background("#fff");
  blackCircle();
}

exports.draw = function() {
  var theta = n * (137.3 * Math.PI / 180);
  r = c * Math.sqrt(n);
  if(leafRadius < (2 * (ctx.canvas.width / 1024))) {
    env.done();
    return;
  }
  if(leafRadius < (15 * (ctx.canvas.width / 1024)) && !reversed) {
    leafRadius = leafRadius * 1.001;

  } else {
    reversed = true
    leafRadius = leafRadius * 0.99901;
  }
  c -= 0 * (ctx.canvas.width / 1024);

  var l = leaf(ctx)
  l.radius = leafRadius;
  l.color = 1;
  l.x = r * Math.cos(theta)
  l.y = r * Math.sin(theta)
  l.draw(ctx)
  n++;
}

function background(color){
  ctx.fillStyle = color;
  ctx.fillRect(0,0, ctx.canvas.width, ctx.canvas.height);
}

function blackCircle() {
  ctx.strokeStyle = "#000";
  ctx.lineWidth = 1
  ctx.beginPath();
  ctx.arc(ctx.canvas.width / 2,ctx.canvas.height / 2,(265 * (ctx.canvas.width / 1024)),0,2*Math.PI);
  ctx.stroke(); 
}