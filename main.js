function setup()
{
    video=createCapture(VIDEO);
    video.position(50,100);
    video.size(550,500);

    canvas=createCanvas(550,500);
    canvas.position(650,100);

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function draw()
{
    background("#FFA500");
}

function modelLoaded()
{
    console.log("poseNet is intialized");
}

function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
    }
}