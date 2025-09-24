const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Health check endpoint for AWS Elastic Beanstalk
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'healthy', timestamp: new Date().toISOString() });
});

// Route for the email signature - serve the signature.html as the main page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'signature.html'));
});

// Route specifically for signature
app.get('/signature', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'signature.html'));
});

// 404 handler
app.use((req, res) => {
  res.status(404).send('Page not found');
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

app.listen(port, () => {
  console.log(`Email signature server is running on port ${port}`);
  console.log(`Visit http://localhost:${port} to view the email signature`);
});

module.exports = app;