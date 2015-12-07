console.log('questions controller loaded')

questionsAppModule.controller('QuestionsController', function(questionFactory, $routeParams){
	
	name = '';
	while(name =='' || name == undefined){
	var name = prompt('Enter Your Name');
	}
	
	this.name = name;

	var self = this;

	//questions 

	this.addQuestion = function(newQuestion){
		if(newQuestion){
			newQuestion.name = this.name;
			questionFactory.addQuestion(
				newQuestion, function(){
					questionFactory.getQuestions(
						function(data){
							self.questions = data;
			alert('Question Added!')
						})
				})
			this.newQuestion = {};
		}
	}

	questionFactory.getQuestions(function(data){
		self.questions = data;
	})

	this.showQuestion = function(questionID){
		questionFactory.showQuestion(questionID, function(output){
			self.question = output;
		});
	}

	//answers

	this.answerQuestion = function(questionID){
		questionFactory.answerQuestion(questionID, function(output){
			self.question = output;
		})
	}

	this.addAnswer = function(newAnswer){
		if(newAnswer){
		newAnswer.name = this.name;
		newAnswer._question = self.question._id
		questionFactory.addAnswer(
			newAnswer, function(){
				questionFactory.getQuestions(function(data){
					self.questions = data;
				})
			})
			this.newAnswer = {};
		}
	}
	
	questionFactory.getAnswers(function(data){
		self.answers = data;
	})

	this.addLike = function(x){
		var urlID = $routeParams.id
		questionFactory.addLike(x, function(){
			questionFactory.showQuestion(urlID, function(output){
			self.question = output;
			
			})
		})

	}

})

