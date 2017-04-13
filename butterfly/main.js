var sideLength = 37,
		tileSize = 12, 
		borderTiles = 4,

portrait = [
	0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,
	1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,
	1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,
	0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,0,0,0,0,0,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,
	0,0,1,1,1,2,2,2,2,2,1,1,1,0,0,0,1,0,0,0,1,0,0,0,1,1,1,2,2,2,2,2,1,1,1,0,0,
	0,0,0,1,1,1,2,2,2,2,2,2,1,1,0,0,0,1,1,1,0,0,0,1,1,2,2,2,2,2,2,1,1,1,0,0,0,
	0,0,0,1,1,1,2,2,1,1,1,1,2,1,1,0,0,1,1,1,0,0,1,1,2,1,1,1,1,2,2,1,1,1,0,0,0,
	0,0,0,0,1,1,1,2,2,2,1,2,2,2,1,1,0,1,1,1,0,1,1,2,2,2,1,2,2,2,1,1,1,0,0,0,0,
	0,0,0,0,1,1,1,2,2,2,1,2,2,2,1,1,1,1,1,1,1,1,1,2,2,2,1,2,2,2,1,1,1,0,0,0,0,
	0,0,0,0,1,1,1,2,2,2,2,1,1,2,2,1,1,1,1,1,1,1,2,2,1,1,2,2,2,2,1,1,1,0,0,0,0,
	0,0,0,0,1,1,1,2,2,2,2,2,2,1,2,1,1,1,1,1,1,1,2,1,2,2,2,2,2,2,1,1,1,0,0,0,0,
	0,0,0,0,0,1,1,1,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,1,1,1,0,0,0,0,0,
	0,0,0,0,0,1,1,1,1,1,1,1,1,1,2,2,2,1,1,1,2,2,2,1,1,1,1,1,1,1,1,1,0,0,0,0,0,
	0,0,0,0,0,1,1,1,1,2,1,1,1,2,2,2,2,1,1,1,2,2,2,2,1,1,1,2,1,1,1,1,0,0,0,0,0,
	0,0,0,0,0,0,0,1,2,2,2,1,2,2,2,2,2,1,1,1,2,2,2,2,2,1,2,2,2,1,0,0,0,0,0,0,0,
	0,0,0,0,0,0,1,1,2,2,1,2,2,2,2,1,2,1,1,1,2,1,2,2,2,2,1,2,2,1,1,0,0,0,0,0,0,
	0,0,0,0,0,1,1,2,2,2,1,2,2,2,2,1,1,1,1,1,1,1,2,2,2,2,1,2,2,2,1,1,0,0,0,0,0,
	0,0,0,0,0,1,1,2,2,2,1,1,2,2,1,1,0,1,1,1,0,1,1,2,2,1,1,2,2,2,1,1,0,0,0,0,0,
	0,0,0,0,0,1,1,1,2,2,1,1,2,2,1,0,0,1,1,1,0,0,1,2,2,1,1,2,2,1,1,1,0,0,0,0,0,
	0,0,0,0,0,1,1,1,2,1,2,2,2,2,1,0,0,1,1,1,0,0,1,2,2,2,2,1,2,1,1,1,0,0,0,0,0,
	0,0,0,0,0,0,1,1,1,2,2,2,2,1,0,0,0,0,1,0,0,0,0,1,2,2,2,2,1,1,1,0,0,0,0,0,0,
	0,0,0,0,0,0,1,1,1,2,2,2,1,1,0,0,0,0,0,0,0,0,0,1,1,2,2,2,1,1,1,0,0,0,0,0,0,
	0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,
	0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,
	0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,
	0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,
	0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0
];


function setup() {
	var s = (sideLength + borderTiles * 2) * tileSize;
	createCanvas(s, s);
 	noStroke();
 	background(30);
}

function draw() {
	var pixel;
	var offset = borderTiles * tileSize;
	translate(offset, offset);
	for (var y = 0; y < sideLength; y++) {
  		for (var x = 0; x < sideLength; x++) {
			pixel = portrait[x + y * sideLength];
      		if (pixel > 0) {		
				if(pixel===1) {
					fill(random(250),random(250),random(250));
				} else fill(0);

			rect(x * tileSize, y * tileSize, tileSize, tileSize);
      }
    }
  }
 frameRate(50);
}