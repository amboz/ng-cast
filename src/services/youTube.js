angular.module('video-player')
.service('youTube', function($http) {
  
  var search = function (query, callback) {
    // console.log(query);
    var queryObj = {
      url: 'https://www.googleapis.com/youtube/v3/search',
      method: 'GET',
      params: {
        part: 'snippet',
        q: query,
        maxResults: 5,
        key: window.YOUTUBE_API_KEY,
        type: 'video',
        videoEmbeddable: true,
      }
    };
    
    $http(queryObj).then(function successCallback(response) {
      //once we get the query result call callback on it
      // console.log(response);
      // console.log(callback);
      callback(response.data.items);
    }, function errorCallback(response) {
    
    });
  };
  return ({search: search});
});


