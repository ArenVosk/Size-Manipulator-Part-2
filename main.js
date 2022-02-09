function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotResults);
}

function draw(){
    background('#808080');
}

function modelLoaded(){
    console.log("Model has been loaded");
}

function gotResults(results){
    if(results.length > 0){
        console.log(results);
    }
}
    
