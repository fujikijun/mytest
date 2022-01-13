
function setup() {
  createCanvas(300, 300);
  text("Click on the buttons below to"+
       " play/pause the video", 20, 20);
  
  vidElement = createVideo("https://www.youtube.com/embed/eosFAIXcYAw");
  vidElement.position(20, 0);
  vidElement.size(300);
  
  playBtn = createButton("Play Video");
  playBtn.position(30, 40);
  playBtn.mouseClicked(playVideo);
  
  pauseBtn = createButton("Pause Video");
  pauseBtn.position(150, 40);
  pauseBtn.mouseClicked(pauseVideo);
}
  
function playVideo() {
  vidElement.play();
}
  
function pauseVideo() {
  vidElement.pause();
}