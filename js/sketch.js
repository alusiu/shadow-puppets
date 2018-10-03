var button, canvas, fingers, playbutton, player1, player2, playing = true, verb, welcomeGreeting, welcomeMessage;

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
  player1.position(canvas.x, canvas.y);
  player1 = getGif();
  player1video = createVideo(['../assets/'+player1+'.mov', '../assets/'+player1+'.webm']);

  player2 = getGif();
  player2video = createVideo(['../assets/'+player2+'.mov', '../assets/'+player2+'.webm']);

  verb = getVerb();

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

