// models/BinLocation.js
const mongoose = require('mongoose');

const BinLocationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  imagePath: { type: String, required: true },
  latitude: { type: Number, required: true },
  longitude: { type: Number, required: true },
  addedBy: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('BinLocation', BinLocationSchema);