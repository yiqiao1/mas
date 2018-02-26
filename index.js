const express = require('express');
const path = require('path');

const app = express();

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// Put all API endpoints under '/api'
app.get('/api', (req, res) => {
//   const count = 5;

//   // Generate some passwords
//   const passwords = Array.from(Array(count).keys()).map(i =>
//     generatePassword(12, false)
//   )

//   // Return them as json
//   res.json(passwords);
    res.send('hello')
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.js file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/public/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`mas listening on ${port}`);