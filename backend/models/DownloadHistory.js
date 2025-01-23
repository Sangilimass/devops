const mongoose = require('mongoose');

const downloadHistorySchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  platform: { type: String, required: true },
  fileType: { type: String, required: true },
  resolution: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('DownloadHistory', downloadHistorySchema);