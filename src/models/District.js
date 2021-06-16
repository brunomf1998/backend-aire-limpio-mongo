const { Schema, model } = require('mongoose');

const districtSchema = new Schema({
  _id: Number,
  name: String
}, {
  timestamps: false,
  versionKey: false
});

module.exports = model('District', districtSchema);