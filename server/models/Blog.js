const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BlogSchema = new Schema({
  title: { type: String, require: true },
  article: { type: String, require: true },
  published: { type: Date, require: true },
  featured: { type: Boolean, require: true },
  author: { type: Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Blog', BlogSchema);