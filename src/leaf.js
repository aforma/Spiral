module.exports = function(ctx){

	var R = 10 * (1024 / ctx.canvas.width);

	return {
		x:0,
		y:0,
		radius: R,
		color:0,
		angle:0,
		draw: function(ctx){
			// ctx.strokeStyle = "#000";
			ctx.save();
			ctx.fillStyle = "#333";
			ctx.beginPath();
			ctx.translate(this.x, this.y)
			ctx.rotate(this.angle);
			ctx.moveTo(0, 0);
			ctx.lineTo(this.radius * 3, this.radius / 2);
			ctx.lineTo(0, this.radius / 2);
			ctx.fill();	
			ctx.stroke();	
			ctx.fillStyle = "rgba(255,255,255,1)";
			ctx.beginPath();
			ctx.moveTo(0, this.radius / 2);
			ctx.lineTo(this.radius * 2, this.radius / 2);
			ctx.lineTo(0, this.radius);
			ctx.lineTo(0, 0);
			ctx.fill();	
			ctx.stroke();	
			ctx.restore();
		}
	}
}