const express = require('express');
const { exec } = require('child_process');
const router = express.Router();

router.get('/scrape', (req, res) => {
  // Execute the Python script as a child process
  exec('python3 scrapper.py', (error, stdout, stderr) => {
    if (error) {
      console.error('Error executing script:', error);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }
    // Log the script's output
    console.log('Script output:', stdout);
    // Parse the JSON output
    const jsonData = JSON.parse(stdout);
    // Send the JSON data as a response
    res.json(jsonData);
  });
});

module.exports = router;
