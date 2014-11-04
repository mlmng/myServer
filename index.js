//code in server
var express = require('express')
var app = express()

app.use(express.static(__dirname + '/public'));

app.get('/api/book',function(req,res){
	var books = [
		{title: 'Hello Kitty', price: 800},
		{title: 'My melody', price: 600},
		{title: 'Doraemon', price: 400}
	];
	res.send(books);
})

var server = app.listen(3000, function () {

  	console.log("server is running")

})