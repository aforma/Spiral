module.exports = function(ctx){

	var R = 10 * (1024 / ctx.canvas.width);

	return {
		x:0,
		y:0,
		radius: R,
		draw: function(ctx){
			ctx.strokeStyle = "#000";
			ctx.fillStyle = "#000";
			if(this.radius < 3 * (ctx.canvas.width / 1024)) {
				ctx.fillStyle = "#000";
			}
			ctx.lineWidth = 1 * (ctx.canvas.width / 1024)
			ctx.beginPath();
			ctx.arc(ctx.canvas.width / 2 + this.x,ctx.canvas.height / 2 + this.y,this.radius,0,2*Math.PI);
			if(this.radius < 3 * (ctx.canvas.width / 1024)) {
				ctx.fill();	
			}
			ctx.stroke();
		}
	}
}