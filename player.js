function Player(){
	this.x = width /2;
	this.y = height - 20;
	this.w = 180;
	this.h = 20;
	this.v = 5;

	this.show = function(){
		rectMode(CENTER);
		fill(0,105,132);
		rect(this.x,this.y,this.w,this.h);
	}

	this.move = function(){
		if(mouseX > this.x)
			this.x += this.v;
		else if(mouseX < this.x)
			this.x -= this.v;
	}
}