angular.module('video-player')

.component('app', {
  controller: function () {
    this.videos = exampleVideoData;
    //initial val = [0], set current to clicked on video otherwise
    this.video = this.videos[0];

    this.onClick = function(videoObj) {
      //update the player view
      this.selectVideo(videoObj);
    }.bind(this);
    
    this.selectVideo = function(videoObj) {
      this.video = videoObj;
    };

    this.searchResults = function() {
    
    };
    
  },
  templateUrl: 'src/templates/app.html'
});
