let a;

function preload()
{
  a = loadImage( "data\\background.png" );
}

function setup() {
  const canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("test");
  /*
  vidElement = createVideo("https://www.youtube.com/embed/eosFAIXcYAw");
   vidElement.position(20, 0);
   vidElement.size(300);
   
   playBtn = createButton("Play Video");
   playBtn.position(30, 40);
   playBtn.mouseClicked(playVideo);
   
   pauseBtn = createButton("Pause Video");
   pauseBtn.position(150, 40);
   pauseBtn.hide();
   pauseBtn.mouseClicked(pauseVideo);
   */
  /*
  var canvas = document.getElementById("myimage");
   document.getElementById('myimage').addEventListener('mousemove', function(e) {
   console.log(e.pageX, e.pageY, e.clientX, e.clientY, e.offsetX, e.offsetY);
   if ( e.clientX < 200 && e.clientX > 0 && e.clientX < 200 )
   {
   console.log("link");
   //link( 'https://youtu.be/1MkUP4F_qaE', '_blank' );
   }
   });
   */
}

function draw()
{
  clear();

  noStroke();
  fill( 255 );
  text("link", 100, 100);
  //image( a, 0, 0 );

  ellipse( mouseX, mouseY, 100, 100 );
}
/*
function playVideo() {
 vidElement.play();
 }
 
 function pauseVideo() {
 vidElement.pause();
 }
 */
function link( url, winName, options )
{
  winName && open( url, winName, options ) || (location = url);
}


function mousePressed()
{
  console.log("on");

  console.log( mouseX, mouseY );
  if ( mouseX < 200 && mouseX > 0 && mouseY < 200 )
  {
    console.log("link");
    link( 'https://youtu.be/1MkUP4F_qaE', '_blank' );
  }
}