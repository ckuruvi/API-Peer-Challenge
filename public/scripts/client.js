var app = angular.module('giphyApp', []);

app.controller('giphyController', function(giphyService) {
  console.log('Giphy Controller loaded!')



  var ctrl = this;
  // function handles button click for random Giphy search
  ctrl.randomGiphy=function(){
    giphyService.getRandomGiphy().then(function(image_url){
      console.log('inside success from randomGiphy function call');
      ctrl.imageUrl=image_url;
    });
  }

 // function handles user search for Giphys
  ctrl.searchGiphy=function(){
    giphyService.getSearchGiphy(ctrl.search).then(function(giphyList){
      console.log('inside success from searchGiphy function call',giphyList);
      ctrl.giphyList=giphyList;
    });
  }


});
