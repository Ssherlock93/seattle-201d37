// assignment prep demo given from the Google Chrome console

var imgs = ['cat.png', 'hat.png'];
var imgObjs = [];

function ImageTracker(img) {
  this.name = img.split('.')[0];
  this.path = img;
  this.totalClicks = 0;
}

for( var i=0; i < imgs.length; i++) {
  imgObjs.push(new ImageTracker(imgs[i]));
}