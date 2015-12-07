var mongoose = require('mongoose');
var path = require('path');
var Schema = mongoose.Schema;

var QuestionSchema = new mongoose.Schema({
	question: String,
	description: String,
	name: String,
	created: {type: Date, default: Date.now},
	answers: [{type: Schema.Types.ObjectId, ref: 'Answer'}]
});

QuestionSchema.path('question').required(true);

var Question = mongoose.model('Question', QuestionSchema);

var AnswerSchema = new mongoose.Schema({
	answer: String,
	support: String,
	name: String,
	like: {type: Number, default: 0},
	created: {type: Date, default: Date.now},
	_question: {type: Schema.Types.ObjectId, ref: 'Question'}

});

AnswerSchema.path('answer').required(true);

var Answer = mongoose.model('Answer', AnswerSchema);