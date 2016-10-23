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
			ctx.lineWidth = 1 * (ctx.canvas.width / 1024);
			var percent = this.radius / (50 * (ctx.canvas.width / 1024))
			this.color = 255 * percent;
			if(this.radius > (13.5  * (ctx.canvas.width / 1024)) && this.radius < (15  * (ctx.canvas.width / 1024))) {
				this.drawPetal();
			} else {
				this.drawCircle();
			}
		},
		drawCircle:function(){
			ctx.fillStyle = "rgba("+this.color+","+this.color+","+this.color+",1)";
			ctx.beginPath();
			ctx.arc(this.x,this.y,this.radius * 0.3,0,2*Math.PI);
			ctx.stroke();
		},
		drawTriangle:function(){
			ctx.save();
			ctx.fillStyle = "rgba("+this.color+","+this.color+","+this.color+",1)";
			ctx.beginPath();
			ctx.translate(this.x, this.y)
			ctx.rotate(this.angle);
			ctx.moveTo(0, 0);
			ctx.lineTo(this.radius * 6, this.radius * 3);
			ctx.lineTo(0, this.radius * 3);
			ctx.fill();	
			ctx.stroke();	
			ctx.fillStyle = "rgba(255,255,255,1)";
			ctx.beginPath();
			ctx.moveTo(0, this.radius * 3);
			ctx.lineTo(this.radius * 6, this.radius * 3);
			ctx.lineTo(0, this.radius * 6);
			ctx.lineTo(0, 0);
			ctx.fill();	
			ctx.stroke();	
			ctx.restore();
		},
		drawPetal:function(){
			var size = this.radius / (50 * (ctx.canvas.width / 1024));
			size *= 4;
			var numLines = 5;
			var pointB = 50 * (ctx.canvas.width / 1024);
			var pointX = 26 * (ctx.canvas.width / 1024);
			var pointX2 = 100 * (ctx.canvas.width / 1024);
			ctx.save();
			ctx.fillStyle = "rgba("+this.color+","+this.color+","+this.color+",1)";
			ctx.beginPath();
			ctx.translate(this.x, this.y)
			ctx.rotate(this.angle);
			ctx.moveTo(0, 0);
			var total = numLines * size
			for(var i = 0; i < total; i++) {
				var a = (-pointB * size) * (i/ total);
				var b = (pointB * size) * (i/ total);
				ctx.quadraticCurveTo((pointX * size),a,(pointX2 * size),0);
				ctx.quadraticCurveTo((pointX * size),b,0,0);
			}
			ctx.fill();	
			ctx.stroke();	
			ctx.restore();
		}
	}
}