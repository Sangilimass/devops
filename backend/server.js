const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');
const downloadRoutes = require('./routes/download');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.static('public'));

// Routes
app.use('/auth', authRoutes);
app.use('/download', downloadRoutes);

// Database connection
mongoose.connect('mongodb://localhost:27017/video-downloader', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Database connection error:', err);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});