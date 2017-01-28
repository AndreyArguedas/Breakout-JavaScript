function Block(x,y){
	this.x = x;
	this.y = y + 40;
	this.color1 = random(255);
	this.color2 = random(255);
	this.color3 = random(255);

	this.show = function(){
		//rectMode(RADIUS);
		fill(this.color1,this.color2,this.color3);
		rect(this.x,this.y,80,40);
	}
}