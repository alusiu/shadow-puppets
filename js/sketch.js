var button, canvas, img, playbutton, player, verb, step, timer = '', wait, welcomeGreeting, welcomeMessage;;

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER);
  textSize(50);

  welcomeGreeting = createElement('h2', 'Welcome to puppeters', 100);
  welcomeGreeting.position(width/2 - 50, height/5 - 50);

  welcomeMessage = createElement('h4', 'To continue, please turn on the flashlight on your phone');
  welcomeMessage.position(welcomeGreeting.x, welcomeGreeting.y + 50 );

  button = createButton('I\'ve turned on my phone flashlight');
  button.position(width/2 - 33, height/2, 65);
  button.mousePressed(startSession);
  
}

function draw() {

  if (timer > 0){
      background(220);
      textAlign(CENTER, CENTER);
      textSize(100);
      text(timer, width/2, height/2);

      if (frameCount % 60 == 0 && timer > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
        timer --;
      }
      if (timer > 0 && timer < 6) {
        textSize(30);
        text("Get ready to hop in, you're next!", width/2, height*0.7);
      }
      if (timer == 0) {
        text("Get in there!", width/2, height*0.7);
        session();
        noLoop();
      }
    }
    
}

function startSession() {

  button.remove();
  welcomeGreeting.remove();
  welcomeMessage.remove();
  timer = Math.floor(Math.random()* 10) + 1;

  return timer;
  
}

function session() {
  background(255);
  textAlign(CENTER, CENTER);
  textSize(100);
  text(verb, width/2, height/2);
  //imgName = getGif();
  //img = createImg("../assets/"+imgName+".gif");  // Load the test image
  img = createImg("../assets/bird-480x480.gif");  // Load the test image
  image(img);
  img.position(0,0);

  verb = getVerb();
  text(verb,width/2, height*0.7);
}

function getVerb() {
  // randomly choose a verb from the verblist and return it to the session function
  var v = verbList[Math.floor(Math.random()*verbList.length)];

  return v;
}

function getGif() {
  // randomly choose a gif from the gif title list and return it to the session function
  var gifName = videoList[Math.floor(Math.random()*videoList.length)];

  return gifName;
}

function windowResized() 
{
  resizeCanvas(windowWidth, windowHeight);
}

function waitTimer() {
  

}