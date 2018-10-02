var canvas, button, welcomeGreeting, welcomeMessage, player1, player2, verb;

function setup() {
  createCanvas(windowWidth, windowHeight);

  button = createButton('I\'ve turned on my phone flashlight');
  button.position(width/2 - 33, height/2, 65);
  button.mousePressed(startSession);

  textAlign(CENTER);
  textSize(50);

  welcomeGreeting = createElement('h2', 'Welcome to puppeters', 100);
  welcomeGreeting.position(width/2 - 50, height/5 - 50);

  welcomeMessage = createElement('h4', 'To continue, please turn on the flashlight on your phone');
  welcomeMessage.position(welcomeGreeting.x, welcomeGreeting.y + 50 );
  
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function startSession() {

  player1 = getGif();
  player2 = getGif();
  
  verb = getVerb();

  console.log(verb);

}

function getVerb() {

  var x = verbList[Math.floor(Math.random()*verbList.length)];

  return x;
}


function getGif() {

}

