// A variable to initialize the Image Classifier
let classifier;

// A variable to hold the video we want to classify
let video;

// Variable for displaying the results on the canvas
let label = "Model loading...";

let imageModelURL = "https://teachablemachine.withgoogle.com/models/NSW-vbsD-/";

function preload() {
  classifier = ml5.imageClassifier(imageModelURL + "model.json");
}

function setup() {
  createCanvas(640, 480);

  // Create the webcam video and hide it
  video = createCapture(VIDEO, { flipped: true });
  video.size(640, 480);
  video.hide();

  // Start detecting objects in the video
  classifier.classifyStart(video, gotResult);
}

function draw() {
  // Each video frame is painted on the canvas
  image(video, 0, 0);

  // Printing class with the highest probability on the canvas
  fill(0, 255, 0);
  textSize(32);
  text(label, 20, 50);
}

// A function to run when we get the results
function gotResult(results) {
  // Update label variable which is displayed on the canvas
  label = results[0].label;
}
