module.exports = function(){
	return {
		x:0,
		y:0,
		draw: function(ctx){
			ctx.strokeStyle = "#000";
			ctx.strokeWidth = 1
			ctx.beginPath();
			ctx.arc(ctx.canvas.width / 2 + this.x,ctx.canvas.height / 2 + this.y,2,0,2*Math.PI);
			ctx.stroke();
		}
	}
}