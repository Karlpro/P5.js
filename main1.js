//Draw
//function setup(){
//createCanvas(1500,1500);

//}
//function draw(){
//fill(100);
//circle(50,50,100);
//arc(mouseX,mouseY,100,50,0,Math.PI*2);
//}














//Animation big
var rand = random(10,20);
function setup(){
createCanvas(1500,1500);
clear();
}
function draw(){
	background(255,204,255);
	stroke(245);
	for(var i =0;i<1000;i+=10){
rect(i,0,10,mouseY+ random(0,200));
	}
	for (var j =0;j<1000;j+=10){
		stroke(245);
rect(j,height,10,-mouseY-random(0,200));
}
	for(var s = 0;s<100;s++){
		stroke(100,100,100);
		circle(random(0,width),random(0,height),random(0,40));
	}
	
}