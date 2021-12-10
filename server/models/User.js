const mongoose = require('mongooose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  ElementInternals: { type: String, required: true },
  social: {
    facebook: { type: String, required: false },
    twitter: { type: String, required: false },
    linkedIn: { type: String, required: false }
  }
});

module.exports = mongoose.model('User', UserSchema);