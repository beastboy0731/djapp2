song="";

function setup() {
    canvas=createCanvas(600,500);
    canvas.center();
}

function draw() {
    image(video, 0, 0, 600, 500);
}

function preload() {

}

function play() {
    song.play();
    song.setVolume(1);
    song.rate(1);
}