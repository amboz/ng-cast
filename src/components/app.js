angular.module('video-player')

.component('app', {
  controller: function (youTube) {
    console.log('youtube', youTube);
    this.$onInit = function () {
      this.search('');
    };
    this.videos = exampleVideoData;
    //initial val = [0], set current to clicked on video otherwise
    this.currentVideo = this.videos[0];
    
    //click on tge videoList entries
    this.onClick = function(videoObj) {
      this.selectVideo(videoObj);
      //this.currentVideo = videoObj;
    }.bind(this);
    
    this.selectVideo = function(videoObj) {
      this.currentVideo = videoObj;
    };
    
    this.searchResults = function(returnedData) {
      this.videos = returnedData;
      this.currentVideo = returnedData[0];
    }.bind(this);
   
    //when search button is clicked
    this.search = function(query) {
      youTube.search(query, this.searchResults);
    }.bind(this);

  },
  templateUrl: 'src/templates/app.html'
});
