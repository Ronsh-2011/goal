

	var canvas = new fabric.Canvas("myCanvas");

XPlayer = 500;
YPlayer = 275;

blockwidth = 30;
blockheight = 30;

var player = "";
var block = "";

function playerupdate() {
fabric.Image.fromURL("ball.png",function(img) {
player = img;
player.scaleToWidth(150);
player.scaleToHeight(140);

player.set({
    top: YPlayer,left:XPlayer

});
canvas.add(player); 
} )

}

function blockupdate(get_image) {
    fabric.Image.fromURL(get_image,function(img) {
    block = img;
    block.scaleToWidth(blockwidth);
    block.scaleToHeight(blockheight);
    
    block.set({
        top: YPlayer,left:XPlayer
    
    });
    canvas.add(block);
    } )
    
    }


window.addEventListener("keydown",keydown);
function keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(e.shiftKey == true && keyPressed == "80") {
        console.log("pshift pressed");
        blockwidth = blockwidth + 5;
        blockheight = blockheight + 5;
        
        document.getElementById("width").innerHTML = blockwidth;
        document.getElementById("height").innerHTML = blockheight;
    }
    if(e.shiftKey == true && keyPressed == "77") {
        console.log("mshift pressed");
        blockwidth = blockwidth - 5;
        blockheight = blockheight - 5;
        
        document.getElementById("width").innerHTML = blockwidth;
        document.getElementById("height").innerHTML = blockheight;
    }

if (keyPressed == "38") {
   up();
   console.log("up");
}
if (keyPressed == "40") {
    down();
    console.log("down");
 }
 if (keyPressed == "37") {
    left();
    console.log("left");
 }
 if (keyPressed == "39") {
    right();
    console.log("right");
 }
   
 
 if (keyPressed == "73") {
blockupdate("iron.png");
   console.log("i");
}
if (keyPressed == "74") {
    blockupdate("jug.png");
       console.log("j");
    }
    if (keyPressed == "76") {
        blockupdate("lucky.png");
           console.log("l");
        }
 if (keyPressed == "67") {
            blockupdate("chest.png");
               console.log("c");
            }
     if (keyPressed == "87") {
                blockupdate("wood.png");
                   console.log("w");
                }
   if (keyPressed == "71") {
                    blockupdate("grenade.jpg");
                       console.log("g");
                    }
         if (keyPressed == "66") {
         blockupdate("brick.jpg");
          console.log("b");
              }
}

function up()   {

    if(YPlayer >=0) {
    YPlayer = YPlayer-blockheight;
    console.log("Block image height is" +blockheight);
    console.log("When up key is pressed, X="+XPlayer+",Y="+YPlayer);
    
    canvas.remove(player);
    playerupdate();
    }
    
    }
    
    function down()   {
    
        if(YPlayer <=500) {
        YPlayer = YPlayer+blockheight;
        console.log("Block image height is" +blockheight);
        console.log("When down key is pressed, X="+XPlayer+",Y="+YPlayer);
        
        canvas.remove(player);
        playerupdate();
        }
        
        }
    
        function left()   {
    
            if(XPlayer >0) {
            XPlayer = XPlayer-blockwidth;
            console.log("Block image hwidth is" +blockwidth);
            console.log("When left key is pressed, X="+XPlayer+",Y="+YPlayer);
            
            canvas.remove(player);
            playerupdate();
            }
            
            }
            
        function right()   {
    
            if(XPlayer <=850) {
            XPlayer = XPlayer+blockwidth;
            console.log("Block image width is" +blockwidth);
            console.log("When right key is pressed, X="+XPlayer+",Y="+YPlayer);
            
            canvas.remove(player);
            playerupdate();
            }
            
            }

