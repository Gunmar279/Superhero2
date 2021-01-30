var canvas = new fabric.Canvas("myCanvas");
var width_block = 30;
var height_block = 30;
var Player_X = 10;
var Player_Y = 10;
var Player_object = "";

var block_image_object = "";

function player_update()
{
    fabric.Image.fromURL("PLAYER.png", function(Img){
        Player_object = Img;
        Player_object.scaleToWidth(150);
        Player_object.scaleToHeight(150);
        Player_object.set({
          top : Player_Y,
          left : Player_X  
        });
        canvas.add(Player_object);
    })
}

function new_image(get_image)
{
    fabric.Image.fromURL(get_image, function(Img){
      block_image_object = Img;
        block_image_object.scaleToWidth(150);
        block_image_object.scaleToHeight(150);
        block_image_object.set({
          top : Player_Y,
          left : Player_X  
        });
        canvas.add(block_image_object);
    })
}

window.addEventListener("keydown", my_keydown);
function my_keydown(e)
{
  keypressed = e.keyCode;
  console.log(keypressed);
  if(e.shiftKey == true && keypressed == "80"){
    console.log("P and Shift pressed together inccreases the width and height of the block");
    width_block = width_block + 10;
    height_block = height_block + 10;
    document.getElementById("current_width").innerHTML = width_block;
    document.getElementById("current_height").innerHTML = height_block;
  }
  if(e.shiftKey == true && keypressed == "77"){
    console.log("M and Shift pressed together decreases the width and height of the block");
    width_block = width_block - 10;
    height_block = height_block - 10;
    document.getElementById("current_width").innerHTML = width_block;
    document.getElementById("current_height").innerHTML = height_block;
  }
  if(keypressed == "38"){
    up();
    console.log("up");
  }
  if(keypressed == "40"){
    down();
    console.log("down");
  }
  if(keypressed == "37"){
    left();
    console.log("left");
  }
  if(keypressed == "39"){
    right();
    console.log("right");
  }
  if(keypressed == "66"){
    new_image("BRICK.jpg");
    console.log("b");
  }
  if(keypressed == "68"){
    new_image("dark_green.png");
    console.log("d");
  }
  if(keypressed == "71"){
    new_image("GLOWSTONE.jpg");
    console.log("g");
  }
  if(keypressed == "82"){
    new_image("ground.png");
    console.log("r");
  }
  if(keypressed == "71"){
    new_image("NETHERACK.jpg");
    console.log("g");
  }
  if(keypressed == "76"){
    new_image("light_green.png");
    console.log("l");
  }
  if(keypressed == "84"){
    new_image("trunk.jpg");
    console.log("t");
  }
  if(keypressed == "83"){
    new_image("STONE.jpg");
    console.log("s");
  }
  if(keypressed == "75"){
    new_image("BRICK.jpg");
    console.log("k");
  }
  if(keypressed == "89"){
    new_image("yellow_BRICK.png");
    console.log("y");
  }
}

function up()
{
if(Player_Y > 0)
{
Player_Y = Player_Y - height_block;
console.log("Block image height = " + Player_Y);
console.log("When up arrow is pressed x = " + Player_X + "y = " + Player_Y);
canvas.remove(Player_object);
player_update()
}
}

function down()
{
if(Player_Y < 550 )
{
Player_Y = Player_Y + height_block;
console.log("Block image height = " + Player_Y);
console.log("When up arrow is pressed x = " + Player_X + "y = " + Player_Y);
canvas.remove(Player_object);
player_update()
}
}

function left()
{
if(Player_X > 0)
{
Player_X = Player_X - width_block;
console.log("Block image width = " + Player_X);
console.log("When up arrow is pressed x = " + Player_X + "y = " + Player_Y);
canvas.remove(Player_object);
player_update()
}
}

function right()
{
if(Player_X < 900)
{
Player_X = Player_X + width_block;
console.log("Block image width = " + Player_X);
console.log("When up arrow is pressed x = " + Player_X + "y = " + Player_Y);
canvas.remove(Player_object);
player_update()
}
}
