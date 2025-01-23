const DownloadHistory = require('../models/DownloadHistory');

exports.processDownload = async (req, res) => {
  const { url, userId } = req.body;

  try {
    // Simulate download processing
    const download = new DownloadHistory({
      userId,
      platform: 'YouTube', // Extract platform from URL
      fileType: 'mp4',
      resolution: '1080p',
      date: new Date(),
    });
    await download.save();

    res.status(200).json({ message: 'Download started', download });
  } catch (err) {
    res.status(500).json({ error: 'Failed to process download' });
  }
};