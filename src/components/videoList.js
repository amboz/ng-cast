angular.module('video-player')
.component('videoList', {
  bindings: {
    videos: '<',
    onClick: '<'
  },
  controller: function() {
    // this.onClick = function() {};
  },
  templateUrl: 'src/templates/videoList.html'
});
