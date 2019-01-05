const mongoose = require('mongoose');
const { Schema } = mongoose;

const voteSchema = new Schema({
  photoId: String,
  count: { type: Number, default: 0 }
});

mongoose.model('votes', voteSchema);
