var button, canvas, player1, player2, verb, welcomeGreeting, welcomeMessage;

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

  button.remove();
  welcomeGreeting.remove();
  welcomeMessage.remove();

  session(0);

}

function session(affirm) {

  console.log(affirm);

  player1 = getGif();
  player2 = getGif();
  verb = getVerb();

  player1video = createVideo(['assets/'+player1+'.mov']);

  console.log(player1);
  console.log(verb);
  console.log(player2);
}
function getVerb() {

  var x = verbList[Math.floor(Math.random()*verbList.length)];

  return x;
}


function getGif() {

  var y = videoList[Math.floor(Math.random()*videoList.length)];

  return y;

}

