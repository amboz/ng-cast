angular.module('video-player')
 
.component('search', {
  bindings: {
    result: '<'
  },
  controller: function() {
    // this.onChange = function() {
    //   _.debounce(this.result, 1000)(this.searchInput);
    // };
    this.onEnter = function() {
      this.result(this.searchInput);
    };
  },
  templateUrl: 'src/templates/search.html'
});
