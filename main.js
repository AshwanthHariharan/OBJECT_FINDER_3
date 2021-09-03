
objects = [];

status = ""; 

function setup() {

canvas = createCanvas(380, 380);

canvas.position(575, 300);

video = createCapture(VIDEO);

video.hide();

}

function start() {

Object_Detector = ml5.objectDetector("cocossd", modelLoaded);
    
document.getElementById("status").innerHTML = "STATUS : OBJECT DETECTING";
    
Object_Name = document.getElementById("Object_name").value;
    
}

function draw() {

image(video, 0, 0, 380, 380);    

if(status != "") {

Object_Detector.detect(video, gotResult);

for(i = 0; i < objects.length; i++) {

document.getElementById("status").innerHTML = "STATUS : OBJECT DETECTED";

document.getElementById("Object").innerHTML = objects[i].label + " Found";

fill("red");

percent = floor(objects[i].confidence * 100);

text(objects[i].label + " " + percent + "%" , objects[i].x + 15 , objects[i].y + 15);

noFill();

stroke("red");

rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);

}

}

}

function modelLoaded() {

console.log("Model Loaded!");

status = true;

}

function gotResult(error, results) {

if(error) {

console.log(error);

}

console.log(results);

objects = results;

}