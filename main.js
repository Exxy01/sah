x = 0;
y = 0;
screenWidth = 0;
screenHeight = 0;
draw_apple = "";
apple = "";
speak_data = "";
toNumber = "";
var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();
function preload(){
  apple = loadImage("apple.png");
}
function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {
if(Number.isInteger(toNumber)){
  speak_data = "started drawing Apple";
  draw_apple = "set";
}
else{
  speak_data = "The speech has not recognized a number";
}
 console.log(event); 

 content = event.results[0][0].transcript;
to_number = Number(content);
    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 

}

function setup() {
 screenWidth = window.innerWidth;
 screenHeight = window.innerHeight;
 Canvas = createCanvas(screenWidth, screenHeight - 150);
 Canvas.position(100, 100)
}

function draw() {
  if(draw_apple == "set")
  {
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    draw_apple = "";
  }
  for(var i = 1; i <= to_number; i++){
    x = Math.floor(Math.random() * 700);
    x = Math.floor(Math.random() * 400);
    image(apple, x, y, 50, 50)
  }
  document.getElementById("status").innerHTML = toNumber + "Apples Drawn"
  speak()
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}
