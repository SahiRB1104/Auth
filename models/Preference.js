const mongoose = require('mongoose');

const PreferenceSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', unique: true },
  theme: String,
  layout: String,
});

module.exports = mongoose.model('Preference', PreferenceSchema);
