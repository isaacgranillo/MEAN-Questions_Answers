var mongoose = require('mongoose');
var Question = mongoose.model('Question');
var Answer = mongoose.model('Answer');

module.exports = (function(){
	return {
		add: function(req, res){
			var question = new Question(req.body);
			question.save(function(err){
				if(err){
					console.log('NOT POSTED');
				}
				else{
					console.log('POSTED');
					res.json(true)
				}
			}) 
		},

		show: function(req, res){
			Question.find({}, function(err, results){
				if(err){
					console.log(err);
				}
				else{
					res.json(results)

				}
			})
		},

		showone: function(req, res){
			Question.findOne({_id: req.params.id}).populate('answers').exec(function(err, question){
				res.json('question', {fullinfo: question});
			})
		},

		answerquestion: function(req, res){
			Question.findOne({_id: req.params.id}, function(err, result){
				if(err){
					console.log('ERROR')
				}
				else{
					console.log('SUCCESS')
					return res.json(result)
				}
			})
		},

		addans: function(req, res){
			Question.findOne({_id: req.body._question}, function(err, question){
			var answer = new Answer(req.body);
			answer._question = question._id;
			question.answers.push(answer);
				answer.save(function(err){
					question.save(function(err){
						if(err){
						console.log('ERROR')
						}
						else{
						console.log('SUCCESS')
						res.json(question)
						}
					})
				})
			})
		},

		allans: function(req, res){
			Answer.find({}, function(err, results){
				if(err){
					console.log('ERROR')
				}
				else{
					console.log('SUCCESS')
				}
			})
		},

		addlike: function(req, res){
			Answer.findByIdAndUpdate(req.body, {$inc: {like: 1}}, {new:true}, function(err, results){
				if(err){
					console.log(err);
				}
				else{
					res.json(results);
				}

			})
			
		}
	}	
	
})();


		







