alarm="";
objects=[];

function preload(){
    alarm = loadSound("alarm.mp3");
}

function setup(){
    canvas = createCanvas(380,380);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(380,380);
    video.hide();

    objectdetector = ml5.objectDetector('cocossd',modelloaded);
    document.getElementById("status").innerHTML = "Status: Detetecting objects";
}

function modelloaded(){
    console.log("Model is loaded");
}

function draw(){
    image(video ,0,0,380,380);

    if(objects.legnth = "person"){
        for(i = 0; i < objects.legnth; i++){
            document.getElementById("status").innerHTML = "Baby Detected";
        }
    }
    else if(objects.legnth = ""){
        play(alarm);
        document.getElementById("status").innerHTML = "Baby Not Detected";
    }
    else{
        document.getElementById("status").innerHTML = "Webcam not Detected";
        play(alarm);
    }
}
function gotResult(error,results){
    if(error){
        console.log(error);
    }
    console.log(results);

    objects = results;

}