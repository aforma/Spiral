module.exports = function(ctx){

	var R = 10 * (1024 / ctx.canvas.width);

	return {
		x:0,
		y:0,
		radius: R,
		color:0,
		draw: function(ctx){
			// ctx.strokeStyle = "#FFF";
			ctx.fillStyle = "rgba(0,0,0,"+this.color+")";
			if(this.radius < (3 * (ctx.canvas.width / 1024))) {
				ctx.fillStyle = "#000";
			}
			ctx.lineWidth = 1  * (ctx.canvas.width / 1024)
			ctx.beginPath();
			ctx.arc(ctx.canvas.width / 2 + this.x,ctx.canvas.height / 2 + this.y,this.radius * 0.3,0,2*Math.PI);
			// ctx.moveTo(ctx.canvas.width / 2 + this.x, ctx.canvas.height / 2 + this.y);
			// ctx.lineTo(ctx.canvas.width / 2 + this.x + this.radius, ctx.canvas.height / 2 + this.y + this.radius / 2);
			// ctx.lineTo(ctx.canvas.width / 2 + this.x, ctx.canvas.height / 2 + this.y + this.radius);
			// ctx.lineTo(ctx.canvas.width / 2 + this.x, ctx.canvas.height / 2 + this.y);
			if(this.radius < (1 * (ctx.canvas.width / 1024))) {
				// ctx.fill();	
				ctx.stroke();
			} else {
				ctx.fill();	
			}
		}
	}
}