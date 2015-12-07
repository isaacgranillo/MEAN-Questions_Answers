console.log('question factory loaded')

questionsAppModule.factory('questionFactory', function($http, $location){
	var factory = {};

	//quesions

	factory.addQuestion = function(newQuestion, callback){
		$http.post('/addquestion', newQuestion).success(function(output){
			$location.path('/home')
			callback();
		})
	}

	factory.getQuestions = function(callback){
		$http.get('/allquestions').success(function(output){
			callback(output);
		})
	}

	factory.showQuestion = function(questionID, callback){
		$http.get('/showone/' + questionID).success(function(output){
			$location.path('/question/' + questionID)
			callback(output);

		})
	}

	//answers

	factory.answerQuestion = function(questionID, callback){
		$http.get('/answerquestion/' + questionID).success(function(output){
			$location.path('/question/'+ questionID +'/new_answer')
			callback(output);
		})

	}

	factory.addAnswer = function(newAnswer, callback){
		$http.post('/addanswer', newAnswer).success(function(output){
			$location.path('/home')
			callback();

		})
	}

	factory.getAnswers = function(callback){
		$http.get('/allanswers').success(function(output){
			callback(output);
		})
	}

	factory.addLike = function(x, callback){
		$http.post('/addlike', {_id: x} ).success(function(output){
			callback(output);
		})
	}

	return factory
})