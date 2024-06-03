const express = require('express');
const app = express();
const port = 3000;

// Use cors for cross-origin requests (required)
const cors = require('cors');
app.use(cors());

// Import the routes
const scrapeRoutes = require('./routes/scrape');

// Use the routes
app.use('/', scrapeRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

/*// Define the POST endpoint
app.post('/scrape', (req, res) => {
  const data = req.body;
  //console.log('Received Data:', data);
  //console.log('Received all data!')
  res.send(data)
  res.send('Data received successfully!');
});

app.get('/scrape', (req, res) => {
  // Handle GET request logic here
  const data = req.body
  //res.send("hello world!");
  //console.log('Received Data:', data);
  //res.json(data);
  res.send(data);
});*/
