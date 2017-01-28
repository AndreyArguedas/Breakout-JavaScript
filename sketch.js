var player;
var blocks = [];
function setup(){
	createCanvas(900,600);
	player = new Player();
	for(var i = 0; i < 8; i++)
		for(var j = 0; j < 12; j++)
			blocks.push(new Block(j*80,i*40));
}

function draw(){
	background(0);
	player.move();
	player.show();
	for(var i = 0; i < blocks.length; i++)
		blocks[i].show();
}