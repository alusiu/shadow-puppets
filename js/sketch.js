var button, canvas, fingers, img, playbutton, player1, player2, playing = true, verb, welcomeGreeting, welcomeMessage;

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
}

function startSession() {

  button.remove();
  welcomeGreeting.remove();
  welcomeMessage.remove();

  session(1);

}

function session(affirm) {

  img = createImg("../assets/bird-480x480.gif");  // Load the test image
  image(img);

  img.position(0,0);
  // img.size();
  // player1 = getGif();
  // player1video = createVideo(['../assets/'+player1+'.gif']);

  // player2 = getGif();
  // player2video = createVideo(['../assets/'+player2+'.mov', '../assets/'+player2+'.webm']);

  verb = getVerb();
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