const express = require('express');
const mongoose = require('mongoose');

const path = require('path');
const configRouter = require('./route/config');
const fs = require('fs');

const userRouter = require('./route/user');
const gamesRouter = require('./route/games');
const bodyParser = require('body-parser');

const decorationRouter = require('./route/decoration');
const mailboxRouter = require('./route/mailbox');
const payRouter = require('./route/pay');
const clanRouter = require('./route/clan');

const databaseConfig = require('./config/database');
const friendRouter = require('./route/friend');
const shopRouter = require('./route/shop');

const app = express();
const port = 3000;

const staticDir = path.join(__dirname, 'static');

// Serve static files with caching headers
app.use('/static', express.static(staticDir, {
  maxAge: '1y', // Browser cache for 1 year (adjust as needed)
  immutable: true, // Indicate files are immutable (can be cached aggressively)
  setHeaders: (res, filePath) => {
    // You can add more custom headers here if needed
    res.setHeader('X-Content-Type-Options', 'nosniff'); // Security header
    res.setHeader('X-Frame-Options', 'DENY');        // Security header
    // Example: Cache CSS and JS for a shorter duration if needed
    if (path.extname(filePath) === '.css' || path.extname(filePath) === '.js') {
      res.setHeader('Cache-Control', 'public, max-age=31536000, immutable'); // 1 year
    } else {
      res.setHeader('Cache-Control', 'public, max-age=31536000, immutable'); // 1 year for other assets
    }
  }
}));

mongoose.connect(databaseConfig.databaseType)
  .then(() => {
    console.log(`The connection to database ${databaseConfig.databaseType} is made and working`);
  })
  .catch((error) => {
    console.log('Error connecting to MongoDB Atlas:', error);
});

app.use(express.json());

app.use('/config', configRouter);
app.use('/user', userRouter);
app.use('/game', gamesRouter);
app.use('/pay', payRouter);
app.use(bodyParser.json());
app.use('/clan', clanRouter);

app.use('/decoration', decorationRouter);
app.use('/friend', friendRouter);

app.use('/mailbox', mailboxRouter);
app.use('/shop', shopRouter);



// Load initial data from JSON files

app.get('/', function(req, res) {
  res.status(200).send("uhh how did you get here");
});

app.listen(port, () => {
  console.log(`Success your server is available at http://localhost:${port}`);
});