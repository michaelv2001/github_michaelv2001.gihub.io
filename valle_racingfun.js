 var x1 = 60;
var y1 = 100;
var speed =random(1,5);

var x2= 100;
var y2= 400;

var x3=50;
var y3=200;


var drawBitmoji= function() {
    background(255, 255, 255);  
    noStroke();
    
    fill(210, 153, 108); //skin tone
    ellipse(x1,y1,83,100); //head
    
    fill(250, 250, 250);
    arc(x1 ,y1-100,28,55,0,361); // left chisel
    arc(x1+46,y1-37,28,9,0,361); //right chisel
    
    fill(10, 10, 10);
    quad(x1-45,y1-0,x1-34,y1-40,x1-15,y1-50,x1-34,y1+1); //left hair
    quad(x1+44,y1-2,x1+35,y1-38,x1+18,y1-50,x1+35,y1-3); // right hair
    ellipse(x1-1,y1-37,62,28); // top hair
    
    fill(69, 41, 0);
    ellipse(x1-10,y1,10,11); //left eye
    ellipse(x1+11,y1,9,11); // right eye
    
    fill(168, 108, 62); //skin tone
    bezier (x1-2,y1+4,x1+17,y1+17,x1-5,y1+20,x1-3,y1+15); //nose 
    
    fill(255, 255, 255);
    arc(x1,y1+26,30,6,1,176); //mouth
    
    fill(12, 12, 235);
    rect(x1-32,y1+45,69,88,2); // tee shirt
    
    fill(10, 9, 9);
    arc(x1-18,y1+24,71,-13,14,64); //mustace
   
};

    var drawBunny = function(){
    //Bunny face
    fill(255, 34, 0);
    ellipse(x2+0, y2-200, 40, 71);  // left ear
    ellipse(x2+60, y2-200, 40, 71);  // right ear
    
    ellipse(x2+30, y2-110, 120, 150);    // face
    
    fill(0, 0, 0);
    ellipse(x2+10, y2-129, 10, 10);  // left eye
    ellipse(x2+40, y2-129, 10, 10);  // right eye
    
    stroke(0, 0, 0);
    line(x2+-7, y2+-82, x2+65, y2+-82);   // mouth
    
    noFill();
    rect(x2+15, y2-80, 9, 10); // left tooth
    rect(x2+30, y2-80, 9, 10); // right tooth
};
    var drawFrog = function(){   
    //Frog
    noStroke();
    fill(15, 186, 75); // a nice froggy green!
    
    ellipse(x3 + 150, y3 + 199, 200, 100); // face
   
    ellipse(x3 + 117, y3 + 135, 40, 40); // left eye     socket
    ellipse(x3 + 187, y3 + 135, 40, 40); // right eye     socket  
    
    fill(255, 230, 0); // for the whites of the eyes!
    ellipse(x3 +187, y3 + 135, 30, 30); // left         eyeball
    ellipse(x3 +117, y3 + 135, 30, 30); // right         eyeball
 };
    fill(5, 5, 5);
    ellipse (x3 + 150,y3 + 200,120,50);



    x3=x3+ speed;

    x2=x2+ speed;
   
   x1=x1+ speed;
   
drawBitmoji();
drawBunny();
drawFrog();




