noseX = 0;
noseY = 0;

function preload()
{
   clownNose = loadImage("https://i.postimg.cc/tg7WmdXP/mustache-removebg-preview.png");
}

function setup()    
{
    canvas = createCanvas(400,300);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose" , getPoses);
}

function modelLoaded()
{
    console.log("model loaded");
}

function getPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x-155;
        noseY = results[0].pose.nose.y-50;
    }
}

function draw()
{
    image(video, 0, 0, 400, 400);
    image(clownNose, noseX, noseY, 80, 80);
}

function take_snapshot()
{
    save("clown_nosefilter.png");
}