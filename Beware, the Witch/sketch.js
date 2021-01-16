var gameState = "start";
var formBack;
var gameBack, game_back;
var witch, witchImg;

function preload(){
	formBack = loadImage("images/Form back.jpg");
	gameBack = loadImage("images/game_back.jpg");
	witchImg = loadImage("images/Witch.png");
}

function setup(){
	createCanvas(1100, 800);
}

function draw(){
	background("black");

	if(gameState == "start"){
		background(formBack);
		
		textSize(45);
		fill("red");
		text("Beware, The Witch", 330, 150);

		textSize(35);
		text("Press Space to play", 540, 650);

		if(keyDown("SPACE") && gameState == "start"){
			gameState = "play";
		}
	}

	if(gameState == "play"){
		background("white");

		game_back = createSprite(550, 400);
		game_back.addImage(gameBack);
		game_back.scale = 3;
		game_back.velocityX = 3;

		witch = createSprite(80, 660);
		witch.addImage(witchImg);
		witch.scale = 0.3;

	}

	drawSprites()
}
