var leaf = require("./leaf");

var ctx = undefined;
var env = undefined;
var c = 5;
var n = 5000;
var r = 0
var leafRadius = 0;
var mode = 0;
var reseted = false;

exports.setup = function(_ctx, _env){
  ctx = _ctx;
  env = _env;
  leafRadius = 1;
  // n = 1000 * (ctx.canvas.width / 1024)
  c = 9 * (ctx.canvas.width / 1024);

  background("#fff");
}

exports.draw = function() {
  var theta = n * (137.3 * Math.PI / 180);
  r = c * Math.sqrt(n);

  if(n < 1200 && !reseted) {
    leafRadius += 0.05;
    mode = 1;
  } else {
    leafRadius += 0.01;
  }

  var l = leaf(ctx)

  l.radius = leafRadius;
  l.mode = mode
  l.color = 1;
  l.angle = theta;
  l.x = (ctx.canvas.width / 2) + r * Math.cos(theta)
  l.y = (ctx.canvas.height / 2) + r * Math.sin(theta)
  l.draw(ctx)
  n--;
  
  if(leafRadius > (5  * (ctx.canvas.width / 1024))) {
    c -= 0.005;
  } else {
    c -= 0.001;
  }

  if(n < 0) {
    mode = 0
    reseted = true
    env.done();
    console.log("reset");
  }
}

function background(color){
  ctx.fillStyle = color;
  ctx.fillRect(0,0, ctx.canvas.width, ctx.canvas.height);
}

function signature() {

}