var questions = require('./../controllers/questions.js');

module.exports = function(app){

	app.post('/addquestion', function(req, res){
		questions.add(req, res);
	})

	app.get('/allquestions', function(req, res){
		questions.show(req, res);
	})

	app.get('/showone/:id', function(req, res){questions.showone(req, res);
	})

	app.get('/answerquestion/:id', function(req, res){
		questions.answerquestion(req, res);
	})

	app.post('/addanswer', function(req, res){
		questions.addans(req, res);

	})

	app.get('/allanswers', function(req, res){
		questions.allans(req, res)
	})

	app.post('/addlike', function(req, res){
		questions.addlike(req, res)
	})
}