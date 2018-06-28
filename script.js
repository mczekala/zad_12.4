var url = 'httdp://api.icndb.com/jokes/random';
getJoke();
var button = document.getElementById('get-joke');
button.addEventListener('click', function(){
  getJoke();
});

var paragraph = document.getElementById('joke');

function getJoke() {
	// if (request.status == 200) {
	// 	paragraph.innerHTML = "200";
	// }czemu nie moge ifa
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.onerror = function(event){
  	paragraph.innerHTML = "error";
  };
  xhr.addEventListener('load', function(){
    var response = JSON.parse(xhr.response);
    paragraph.innerHTML = response.value.joke;
  });
  xhr.send();
}

var response = JSON.parse(xhr.response);