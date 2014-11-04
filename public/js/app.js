//app.js
angular.module("myApp",[])
.controller('mainCtrl',function($scope){
	$scope.books =[];
	$http.get('/api/book').success(function(data){
		$scope.books = data;
	})
})