var action = {'verb': '', 'timer' : ''}, button, canvas, pause = 2, puppet, puppetName, verb, waitTimer, welcomeGreeting, welcomeMessage;;

function setup() {
  createCanvas(windowWidth, displayHeight);
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
  
  if (waitTimer > 0){
      background(255);
      textAlign(CENTER, CENTER);
      textSize(100);
      text(waitTimer, width/2, height/2);

      if (frameCount % 60 == 0 && waitTimer > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
        waitTimer --;
      }
      if (waitTimer > 0 && waitTimer < 6) {
        textSize(30);
        text("Get ready to hop in, you're next!", width/2, height*0.7);
      }
      if (waitTimer == 0) {
        text("Get in there!", width/2, height*0.7);
        session();
      }
    }

    if (action.timer > 0 ){
      textAlign(CENTER, BOTTOM);
      background(255);
      text(action.verb +' for '+action.timer, width/2, height*0.98);
    
      if (frameCount % 60 == 0 && action.timer> 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
        action.timer --;
      }
      if (action.timer == 0) {
        puppet.remove();
        waitSession();
      }
    }
}

function startSession() {

  button.remove();
  welcomeGreeting.remove();
  welcomeMessage.remove();

  waitSession();
  
}

function waitSession () {
  waitTimer = Math.floor(Math.random()* 7) + 3;
  return waitTimer;
}

function session() {
  background(255);

  puppetName = getGif(); // get the name of the gif randomly 
  puppet = createImg("../assets/"+puppetName+".gif");  // Load the image
  image(puppet);
  puppet.position(0,0);

  verb = getVerb();

  text(verb, 50, 50);
  timer = Math.floor(Math.random()* 5) + 3;

  action = {'verb': verb, 'timer': timer};

  return action;

}

function getVerb() {
  // randomly choose an adverb the adverb list, append it to a verb that is randomly chosen from the verb list, and return it to the session function
  var a = adverbList[Math.floor(Math.random()*adverbList.length)];
  var v = a + ' ' + verbList[Math.floor(Math.random()*verbList.length)];
  
  return v;
}

function getGif() {
  // randomly choose a gif from the gif title list and return it to the session function
  var gifName = videoList[Math.floor(Math.random()*videoList.length)];
  return gifName;
}

function windowResized() 
{
  resizeCanvas(windowWidth, displayHeight);
}
