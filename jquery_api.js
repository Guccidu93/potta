$.get("http://hp-api.herokuapp.com/api/characters").then(function(data){

data.forEach(function(characters){
	console.log(characters);
	$("#items").append('<div class="card" style="width: 18rem;"><img class="card-img-top" src="'+characters.image+'" alt="Card image cap"><div class="card-body"><p class="card-text">' + characters.name + '<br/>' + characters.house + '</p></div></div>')

});

  
});