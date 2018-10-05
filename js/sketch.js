var action = {'verb': '', 'timer' : ''}, button, canvas, candle, direction = ['left', 'right'], endGameButton, endGame = false, hopIn, instructions, pause = 2, pauseGame = false, puppet, puppetName, resumeGame, verb, wait = {'timer': '', 'pause': '', 'direction': ''}, welcomeGreeting, welcomeMessage;

function setup() {
  createCanvas(displayWidth, displayHeight);
  fill(255);
  background(20, 20, 20);

  loadFont ('../css/fonts/windsor_condensed-webfont.woff');
  textFont("windsor_condensedregular");

  welcomeGreeting = createElement('h1', 'Shadow Play', 100);
  // .style('color', 'white')
  // .style('font-size', '72px')
  // .style('font-family', 'Arial open-sans')
  // .style('text-align', 'center')
  // .style('text-shadow', '3px 3px 9px rgba(255, 255, 0, 0.9)');
  
  welcomeGreeting.position(width/2 - ((welcomeGreeting.size().width)/2), height*0.02);

  candle = createImg('../assets/candle.png');
  image(candle);
  candle.size(150, 211);
  candle.position(width/2 - ((candle.size().width)/2) + 10, welcomeGreeting.y + welcomeGreeting.size().height+ 10);
  
  //candle.position(welcomeGreeting.x - (welcomeGreeting.size().height));

  welcomeMessage = createElement('h4', 'Please turn on your flashlight');

  welcomeMessage.position(width/2 - ((welcomeMessage.size().width)/2), candle.y + candle.size().height/1.3 +  10);

  button = createButton('Let\'s play!', width - width/10);
 
 
  button.position(width/2 - ((button.size().width)/2), welcomeMessage.y + welcomeMessage.size().height + button.size().height);

  button.mousePressed(startSession);
  
}

function draw() {
  // if the waitimer is set, countDown
  
  if (pauseGame == true) {
      if (puppet != null) {
        puppet.remove();
      }
      if (instructions != null) {
        instructions.remove();      
      } //else {
        instructions = null;
      //}
  
      wait.timer = 0;
      wait.pause = 0;
      action.timer = 0;
      background(	20, 20, 20);
      textAlign(CENTER, CENTER);
      textSize(50);
      text('How to play!', width/2, height*0.2)
      if (resumeGame == null) {
        resumeGame = createButton('Resume');
        resumeGame.position(width*0.7, height*0.875);
        resumeGame.mousePressed(resumeGamePlay);
      }
      
  } 
  if (endGame == true) {
    endGameButton.remove();
    instructions.remove();
    if (puppet != null) {
      puppet.remove();
    }
    background(	20, 20, 20);
    text('Thanks for playing!', width/2, height/2);
    noLoop();
  } else {
     if (wait.timer > 0){
        background(	20, 20, 20);
        textAlign(CENTER, CENTER);
        textSize(100);
        text(wait.timer, width/2, height/2);

        if (frameCount % 60 == 0 && wait.timer > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
          wait.timer --;
        }
        if (wait.timer > 0 && wait.timer < 6) {
          textSize(30);
          text("Get ready to hop in, you're next!", width/2, height*0.7);
        }
      } 
      if (wait.timer == 0) {
        if (wait.pause > 0) {
          background(	20, 20, 20);
          textAlign(CENTER, CENTER);
          textSize(50);
          text('Get in there!', width/2, height/3).fill(255);
          text('Enter stage ' + wait.direction, width/2, height/2).fill(255);
          if (frameCount % 60 == 0 && wait.pause > 0) { // if the f	rameCount is divisible by 60, then a second has passed. it will stop at 0
            wait.pause --;
          }
          if (wait.pause == 0){
            session();
          }
        }
      }
      // if the action.timer is set, countDown;
      if (action.timer > 0 ){
        textAlign(CENTER, TOP);
        textSize(80);
        background(20, 20, 20);
        text(action.timer, width/2, height*0.02);
        textSize(40);
        puppet.position(0, height/8.5);
        text(action.verb, width/2, height*0.8);
        if (frameCount % 60 == 0 && action.timer> 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
          action.timer --;
        }
        if (action.timer == 0) {
          puppet.remove();
          waitSession();
        }
      }
    }
}

function startSession() {
  // This is the instructions page 

  button.remove();
  candle.remove();
  welcomeGreeting.remove();
  welcomeMessage.remove();

  textAlign(CENTER, CENTER);
  textSize(width/5);
  text('How to play', width/2, height*0.1);
  textSize(width/15)
  text('Wait your turn', width/2, height*0.175);
  text('\~', width/2, height*0.225);
  text('5...4...3...2...1...', width/2, height*0.275);
  text('\~', width/2, height*0.325);
  text('Jump on stage!', width/2, height*0.375);
  text('\~', width/2, height*0.425);
  text('Don\'t forget, YOU are the show!', width/2, height*0.475);
  text('\~', width/2, height*0.525);
  text('Use your imagination', width/2, height*0.575);
  text('\~', width/2, height*0.625);
  text('And interact with your fellow performers.', width/2, height*0.675);
  text('\~', width/2, height*0.725);
  text('Because teamwork makes the dreamwork!', width/2, height*0.775);


  button = createButton('Break a leg!');
  button.position(width/2 - (button.size().width/2), height*0.85);
  button.mousePressed(waitSession); 

}

function waitSession () {
  // this is the timer to get out of the page; 
  console.log(windowHeight);
  if (endGameButton == null) {
    endGameButton = createButton('X', width*0.1, height/9);
    endGameButton.position(width*0.1, height*0.875);
      endGameButton.mouseClicked(exitGame);
    } 

    if (instructions == null) {
      instructions = createButton('i', BOTTOM, LEFT);
      instructions.position(width*0.8, height*0.875);
    instructions.mousePressed(instructionsPage);
  }
  button.remove();
  wait.timer = Math.floor(Math.random()* 7) + 3;
  wait.pause = 3;
  wait.direction = direction[Math.floor(Math.random()*direction.length)];
  return wait;
}

function session() {
  // this is the session where the user is given an action and a timer;
  background(	20, 20, 20);

  puppetName = getGif(); // get the name of the gif randomly 
  puppet = createImg("../assets/"+puppetName+".gif");  // Load the image
  image(puppet);
  puppet.size(width,width);

  verb = getVerb();

  text(verb, 50, 50);
  timer = Math.floor(Math.random()* 5) + 3;

  action = {'verb': verb, 'timer': timer};

  return action;
}

function instructionsPage() {
  pauseGame = true;
  return pauseGame;
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
  background(20,20,20);
  resizeCanvas(windowWidth, displayHeight);
}

function exitGame() {
   endGame = true;
   return endGame;
}

function resumeGamePlay() {
  resumeGame.remove();
  resumeGame = null;
  pauseGame = false;
  waitSession();
  return pauseGame;
}