app.service('giphyService',function($http){

  var url = 'http://api.giphy.com';


  this.getRandomGiphy=function(){

    console.log('Inside giphy-service randomGiphy function!');
    return   $http.get(url + '/v1/gifs/random', {
      params: {
        api_key: 'dc6zaTOxFJmzC'
      }
    }).then(function(response) {
      console.log('grabbing random giphy: ', response.data.data.image_url);
      return response.data.data.image_url;
    }).catch(function(err){
      console.log('error getting data', err);
    })

  }// end of getRandomGiphy function



  this.getSearchGiphy = function(search) {

    console.log('search field entry:: ',search);
    return $http.get(url + '/v1/gifs/search', {
      params: {
        api_key: 'dc6zaTOxFJmzC',
        q: search
      }
    }).then(function(response) {

      response.data.data.forEach(function(obj){
        //console.log(obj.images.original.url);
        console.log(obj);
      })
      console.log('grabbing random giphy: ', response.data.data);
      // ctrl.imageUrl = response.data.data.image_url;
      return response.data.data;
    }).catch(function(err){
      console.log('error getting data', err);
    })
  } // end of searchGiphy function


});
