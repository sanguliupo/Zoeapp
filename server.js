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
	const comments = await Comment.find({})
		.select('user message dateSent -_id')
		.sort({ dateSent: -1 });

	res.send(comments);
});

app.post('/api/comment', async (req, res) => {
	const { user, message } = req.body;

	const comment = new Comment({
		user,
		message,
		dateSent: Date.now()
	});

	try {
		await comment.save();
		const comments = await Comment.find({})
			.select('user message dateSent -_id')
			.sort({ dateSent: -1 });

		res.send(comments);
	} catch (error) {
		res.status(422).send(error);
	}
});

// return all votes
app.get('/api/vote', async (req, res) => {
	const votes = await Vote.find({})
		.select('photoId count -_id')
		.sort({ photoId: 1 });
	console.log('votes', votes);
	res.send(votes);
});

app.post('/api/vote', async (req, res) => {
	const { votedPhotoIds } = req.body;

	votedPhotoIds.map(photoId => {
		Vote.findOneAndUpdate(
			{ photoId },
			{ $inc: { count: 1 } },
			{ upsert: true, new: true, runValidators: true }
		).exec();
	});

	try {
		const votes = await Vote.find({})
			.select('photoId count -_id')
			.sort({ photoId: 1 });
		res.send(votes);
	} catch (err) {
		res.status(422).send(err);
	}
});

app.listen(port, () => console.log(`Listening on port ${port}`));
