const express = require('express');
const mongoose = require('mongoose');

const bodyParser = require('body-parser');
const keys = require('./config/dev');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require('./models/Comment');
require('./models/Vote');
const Comment = mongoose.model('comments');
const Vote = mongoose.model('votes');

mongoose.connect(
	keys.mongoURI,
	{ useNewUrlParser: true }
);

app.get('/api/comment', async (req, res) => {
	// find all comments
	const comments = Comment.find({}, (error, allComments) => {
		console.log('allComments', allComments);
		res.send(comments);
	});
});

app.post('/api/comment', async (req, res) => {
	const { user, message } = req.body;

	const comment = new Comment({
		user,
		message,
		dataSent: Date.now()
	});

	try {
		await comment.save();
		const comments = Comment.find({});
		res.send(comments);
	} catch (error) {
		res.status(422).send(error);
	}
});

app.listen(port, () => console.log(`Listening on port ${port}`));
