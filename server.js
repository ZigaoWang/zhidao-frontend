/**
 * ZhiDao (知道) Frontend Server
 * This is a simplified server that connects to the ZhiDao backend API
 * It doesn't contain any of the proprietary algorithms
 * 
 * The main feature is the Research Engine, with Subscriptions as a bonus feature
 */

const express = require('express');
const axios = require('axios');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

// Backend API URL (should be set in .env)
const BACKEND_API_URL = process.env.BACKEND_API_URL || 'http://localhost:3000';

// Add middleware to parse JSON bodies
app.use(express.json());

// Enable CORS for all routes
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});

// Serve static files from 'public' directory
app.use(express.static('public'));

/**
 * CORE FEATURE: Research Engine API Endpoints
 */

/**
 * Proxy endpoint for /question
 * Forwards requests to the backend API
 */
app.get('/question', async (req, res) => {
  try {
    const response = await axios.get(`${BACKEND_API_URL}/question`, {
      params: req.query
    });
    res.json(response.data);
  } catch (error) {
    console.error('Error proxying to backend:', error.message);
    res.status(500).json({ error: 'Failed to connect to backend service' });
  }
});

/**
 * Proxy endpoint for /stream-question
 * Forwards streaming requests to the backend API
 */
app.get('/stream-question', (req, res) => {
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');
  
  const backendUrl = `${BACKEND_API_URL}/stream-question?query=${encodeURIComponent(req.query.query)}`;
  
  const backendRequest = axios({
    method: 'get',
    url: backendUrl,
    responseType: 'stream'
  })
  .then(response => {
    response.data.pipe(res);
  })
  .catch(error => {
    console.error('Error connecting to backend stream:', error.message);
    res.write(`data: ${JSON.stringify({ error: 'Failed to connect to backend service' })}\n\n`);
    res.end();
  });
});

/**
 * BONUS FEATURE: Subscription API Endpoints
 */

/**
 * Proxy endpoint for /stream-daily-digest
 * Forwards streaming requests to the backend API
 */
app.get('/stream-daily-digest', (req, res) => {
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');
  
  const backendUrl = `${BACKEND_API_URL}/stream-daily-digest?topics=${encodeURIComponent(req.query.topics)}`;
  
  const backendRequest = axios({
    method: 'get',
    url: backendUrl,
    responseType: 'stream'
  })
  .then(response => {
    response.data.pipe(res);
  })
  .catch(error => {
    console.error('Error connecting to backend stream:', error.message);
    res.write(`data: ${JSON.stringify({ error: 'Failed to connect to backend service' })}\n\n`);
    res.end();
  });
});

/**
 * Proxy endpoint for /api/daily-article
 * Forwards requests to the backend API
 */
app.get('/api/daily-article', async (req, res) => {
  try {
    const response = await axios.get(`${BACKEND_API_URL}/api/daily-article`, {
      params: req.query
    });
    res.json(response.data);
  } catch (error) {
    console.error('Error proxying to backend:', error.message);
    res.status(500).json({ error: 'Failed to connect to backend service' });
  }
});

/**
 * Health check endpoint
 */
app.get('/health', (req, res) => {
  res.json({ status: 'ok', frontend: 'healthy' });
});

// Start the server
app.listen(port, () => {
  console.log(`ZhiDao Frontend Server is running on port ${port}`);
  console.log(`Frontend available at http://localhost:${port}`);
  console.log(`Research Engine (Main Feature): http://localhost:${port}/research-engine.html`);
  console.log(`Subscriptions (Bonus Feature): http://localhost:${port}/subscription.html`);
  console.log(`Backend API configured at ${BACKEND_API_URL}`);
});
