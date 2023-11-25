noseX = 0;
noseY = 0;

function preload() {
    img1 = loadImage("https://i.postimg.cc/FRdFvXfn/Screenshot-2023-11-25-at-4-24-58-PM-removebg-preview.png");
}

function setup() {
    canvas = createCanvas(600, 450);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(600, 450);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function modelLoaded() {
    console.log("Model is Loaded");
}

function draw () {
    image(video, 0, 0, 600, 450);
    image(img1, noseX -25, noseY -5, 50, 50);
}

function take_snapshot() {
    save('myFilterImage.png');
}

function gotPoses(results) {
    console.log(results);
    if (results.length > 0) {
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose X" + results[0].pose.nose.x);
        console.log("nose Y" + results[0].pose.nose.y);
    }
}

function takeSnapshot() {
    save('yourmustache.png');
}