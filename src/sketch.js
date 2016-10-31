var leaf = require("./leaf");

var ctx = undefined;
var env = undefined;
var c = 10;
var n = 0;
var r = 0
var leafRadius = 10;
var reversed = false;

exports.setup = function(_ctx, _env){
  ctx = _ctx;
  env = _env;
  leafRadius = 10 * (ctx.canvas.width / 1024);
  c = 7 * (ctx.canvas.width / 1024);

  background("#fff");
  blackCircle();
}

exports.draw = function() {
  var theta = n * (137.3 * Math.PI / 180);
  r = c * Math.sqrt(n);
  if(leafRadius < (3 * (ctx.canvas.width / 1024))) {
    console.log("done")
    env.done();
    return;
  }
  if(leafRadius < (13 * (ctx.canvas.width / 1024)) && !reversed) {
    leafRadius = leafRadius * 1.001;

  } else {
    reversed = true
    leafRadius = leafRadius * 0.9993;
  }
  c -= 0.0005 * (ctx.canvas.width / 1024);

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
  ctx.fillStyle = "#000";
  ctx.beginPath();
  ctx.arc(ctx.canvas.width / 2,ctx.canvas.height / 2,(290 * (ctx.canvas.width / 1024)),0,2*Math.PI);
  ctx.fill(); 
}