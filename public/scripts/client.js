var app = angular.module('giphyApp', []);

app.controller('giphyController', function(giphyService) {
  console.log('Giphy Controller loaded!')

//var url = 'http://api.giphy.com';

var ctrl = this;

ctrl.randomGiphy=function(){
giphyService.getRandomGiphy().then(function(image_url){
console.log('inside success from randomGiphy function call');
ctrl.imageUrl=image_url;
});
}

ctrl.searchGiphy=function(){
giphyService.getSearchGiphy(ctrl.search).then(function(giphyList){
  console.log('inside success from searchGiphy function call',giphyList);
  ctrl.giphyList=giphyList;
});
}
// $http.get(url + '/v1/gifs/random', {
//     params: {
//       api_key: 'dc6zaTOxFJmzC'
//     }
// }).then(function(response) {
//   console.log('grabbing random giphy: ', response);
// }).catch(function(err){
//   console.log('error getting data', err);
// })


// ctrl.randomGiphy = function() {
//
//   ctrl.imageUrl=
//   console.log('Random button was clicked!')
//   $http.get(url + '/v1/gifs/random', {
//       params: {
//         api_key: 'dc6zaTOxFJmzC'
//       }
//   }).then(function(response) {
//     console.log('grabbing random giphy: ', response.data.data.image_url);
//     ctrl.imageUrl = response.data.data.image_url;
//   }).catch(function(err){
//     console.log('error getting data', err);
//   })
// }



// ctrl.searchGiphy = function() {
//   console.log('search field was used!');
//   console.log(ctrl.search);
//   $http.get(url + '/v1/gifs/search', {
//       params: {
//         api_key: 'dc6zaTOxFJmzC',
//         q: ctrl.search
//       }
//   }).then(function(response) {
//     ctrl.giphyList = response.data.data;
//     response.data.data.forEach(function(obj){
//       console.log(obj.images.original.url);
//     })
//     console.log('grabbing random giphy: ', response.data.data);
//     // ctrl.imageUrl = response.data.data.image_url;
//   }).catch(function(err){
//     console.log('error getting data', err);
//   })
// }


});
