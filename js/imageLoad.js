var brickPic=document.createElement("img");
var paddlePic=document.createElement("img");
var ballPic=document.createElement("img");
var skyPic=document.createElement("img");
var lifePic=document.createElement("img");


var picsToLoad = 0;

function countLoadedImageAndLaunchIfReady() {
  picsToLoad--;
  if(picsToLoad == 0) { // last image loaded?
    loadingDoneSoStartGame();
  }
}

function beginLoadingImage(imgVar, fileName) {
  imgVar.onload=countLoadedImageAndLaunchIfReady;
  imgVar.src="images/"+fileName;
}

function loadImages() {

  var imageList = [
    {varName:ballPic, theFile:"ball.png"},
    {varName:paddlePic, theFile:"paddle.png"},
    {varName:brickPic, theFile:"brick.png"},
    {varName:skyPic, theFile:"sky.png"},
    {varName:lifePic, theFile:"life.png"}
  ];

  picsToLoad = imageList.length;

  for(var i=0;i<imageList.length;i++) {
    
      beginLoadingImage(imageList[i].varName, imageList[i].theFile);
   
  } // end of for imageList

} // end of function loadImages
