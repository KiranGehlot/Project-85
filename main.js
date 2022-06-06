//Create a reference for canvas 
canvas=document.getElementById("myCanvas");
ctx.getContext("2d");

//Give specific height and width to the car image

greencar_width=75;
greencar_height=100;
background_image = "parkingLot.jpg";
greencar_image = "car2.png";

//Set initial position for a car image.
greencar_x=5;
greencar_y=225;

function add() {
	background_imaTag= new Image();
	background_imaTag.onload = uploadbackground;
	background_imaTag.src = background_image;

	greencar_imgTag= new Image();
	greencar_imgTag.onload= uploadbackground;
	background_imaTag.src= greencar_image;
}

function uploadBackground() {
	//Define function ‘uploadBackground’
	ctx.drawimage(background_imaTag, 0 , 0, canvas.height, canvas.width);
   

}

function uploadgreencar() {
	//Define function ‘uploadgreencar’.
	ctx.drawimage(greencar_image, greencar_x, greencar_y, greencar_height, greencar_width);

	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	//Define function to move the car upward
	if(greencar_y >=0){
		greencar_y= greencar_y - 10;
		console.log("when up arrow key is pressed, x = "+ greencar_x + "| y = "+greencar_y);
	}
}

function down()
{
	//Define function to move the car downward
	if(greencar_y <=0){
		greencar_y= greencar_y + 10;
		console.log("when down arrow key is pressed, x = "+ greencar_x + "| y = "+greencar_y);
	}
}

function left()
{
	//Define function to move the car left side
	if(greencar_x>=0){
		greencar_x= greencar_x - 10;
		console.log("when left arrow key is pressed, x = "+ greencar_x + "| y = "+greencar_y);
	}
}

function right()
{
	//Define function to move the car right side
	if(greencar_x<=0){
		greencar_x= greencar_x - 10;
		console.log("when right arrow key is pressed, x = "+ greencar_x + "| y = "+greencar_y);
	}
}
