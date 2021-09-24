var ball;
//Declare variable for database & position

function setup()
{
    createCanvas(500,500);
    //Link our code with database

    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";

    //write code to refer database


}

function draw()
{
    background("white");

    if(keyDown(LEFT_ARROW))
    {
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW))
    {
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW))
    {
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW))
    {
        writePosition(0,+1);
    }
    drawSprites();
}

//Declare function to writePosition



//Declare function to readPosition



//Declare function to showError


