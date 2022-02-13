function setup(){
  canvas=createCanvas(300,300);
  canvas.center();
  video=createCapture(VIDEO);
  video.hide();
  poseNet = ml5.poseNet(video,modelLoaded);
  poseNet.on('pose', gotPoses);

}
function modelLoaded(){
  console.log('PoseNet has been initialized')
}
var nosex=0;
var nosey=0;
var moustacheImage="";

function gotPoses(results){
  if(results.length>0)
    
  { nosex=results[0].pose.nose.x;
   nosey = results[0].pose.nose.y;
   
    
    console.log(results);
  console.log("nose x = "+results[0].pose.nose.x);
  console.log("nose y = " + results[0].pose.nose.y)}
 }
function preload(){
  noseImage=loadImage("https://i.postimg.cc/3x3QzSGq/m.png");
}
function draw() {
  image(video, 0, 0, 300, 300);
  
  image(moustacheImage,nosex,nosey,80,35);
  
  
}
function take_snapshot(){
  save('myImage.png');
  
}