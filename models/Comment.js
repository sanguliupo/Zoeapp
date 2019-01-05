const mongoose = require('mongoose');
const { Schema } = mongoose;

const commentSchema = new Schema({
  user: String,
  message: String,
  dateSent: Date
});

mongoose.model('comments', commentSchema);
