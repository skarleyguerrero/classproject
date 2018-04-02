

window.onload = function () {
    fetch('http://example.com/movies.json')
  .then(function(response) {
    return response.json();
  })
  
  .catch(function(){
     console.log("Error!!");
  });
}