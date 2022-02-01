canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

rover_width= 100 ;
rover_height= 90 ;

rover_x = 10;
rover_y = 10;
hole_y = 400;
hole_x = 800;

function add(){
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src ="Grass.jpg";


    rover_imgTag = new Image();
    rover_imgTag.onload = uploadrover;
    rover_imgTag.src ="ball.png";

    golf_imgTag = new Image();
    golf_imgTag.onload = golf;
    golf_imgTag.src ="golf-h.png"; 

}


function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function golf() {
    ctx.drawImage(golf_imgTag, 700, 500, 60, 60);
}
function uploadrover() {
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
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
    console.log(keyPressed);
    if(keyPressed == '40')
    {

        down();
        console.log("down");
    }
    console.log(keyPressed);
    if(keyPressed == '37')
    {

        left();
        console.log("left");
    }
    console.log(keyPressed);
    if(keyPressed == '39')
    {

        right();
        console.log("right");
    }
}

    function up()
    {
        if(rover_y >=0)
        {
            rover_y = rover_y-10;

            console.log("when up arrow is pressed, x="+ rover_x + " | y =" + rover_y);
            uploadBackground();
            uploadrover();

            golf();

        }
    }

    function down()
    {
        if(rover_y <=500)
        {
            rover_y = rover_y+10;
            console.log("when up arrow is pressed, x="+ rover_x + " | y =" + rover_y);
            uploadBackground();
            uploadrover();
golf();
        }
    }

    function left()
    {
        if(rover_x >=0)
        {
            rover_x = rover_x-10;
            console.log("when up arrow is pressed, x="+ rover_x + " | y =" + rover_y);
            uploadBackground();
            uploadrover();
            golf();

        }
    }

    function right()
    {
        if(rover_x <=700)
        {
            rover_x = rover_x +10;
            console.log("when up arrow is pressed, x="+ rover_x + " | y =" + rover_y);
            uploadBackground();
            uploadrover();
            golf();
        }
    }