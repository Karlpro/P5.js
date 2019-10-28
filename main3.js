// image animation
let img;
let offset = 0;
let easing = 0.05;

function setup(){
	createCanvas(720,400);
	img = loadImage('data:image/jpeg;base64,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');
}
function draw(){
	image(img,0,0);
	let dx = mouseX - img.width / 2-offset;
	offset += dx*easing;
	tint(255,127);
	image(img,offset,0);
}
