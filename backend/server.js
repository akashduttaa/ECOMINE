const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// We will use basic multer for receiving images, usually we'd upload to S3 or GridFS
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb' }));

// Fake Mongo Connection for mock
// mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/ecomine');

const scanController = require('./controllers/scan');

// Handle both single and multiple images
app.post('/api/scan', upload.array('images', 4), scanController.processScan);
app.post('/api/verify', scanController.verifyDropoff);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
});
