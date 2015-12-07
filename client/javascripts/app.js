console.log('App.js loaded')

var questionsAppModule = angular.module('questionsApp', ['ngRoute']);

questionsAppModule.config(function ($routeProvider){
	$routeProvider
	.when('/home', {
		templateUrl: 'partials/home.html'
	})

	.when('/new_question', {
		templateUrl: 'partials/new_question.html'
	})

	.when('/question/:id', {
		templateUrl: 'partials/question.html'
	})

	.when('/question/:id/new_answer', {
		templateUrl: 'partials/new_answer.html'
	})

	.otherwise({
		redirectTo:'/home'
	})

})