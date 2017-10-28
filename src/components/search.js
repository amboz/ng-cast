angular.module('video-player')
 
.component('search', {
  bindings: {
    result: '<'
  },
  templateUrl: 'src/templates/search.html'
});
