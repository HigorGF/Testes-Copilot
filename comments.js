// Create web server
// Create server
const express = require('express');
const app = express();
const port = 3000;
// Create body parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());
// Create comments array
const comments = [];
// Create POST request to add comments
app.post('/comments', (req, res) => {
    // Get the comment from the body of the request
    const comment = req.body.comment;
    // Add the comment to the comments array
    comments.push(comment);
    // Send the comment back in the response
    res.send(comment);
});
// Create GET request to get all comments
app.get('/comments', (req, res) => {
    // Send the comments array in the response
    res.send(comments);
});
// Start server
app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});
// Run the server with node comments.js
// Send a POST request to http://localhost:3000/comments with a JSON body like {"comment": "Hello, world!"}
// Send a GET request to http://localhost:3000/comments to get all comments
// Send a POST request to http://localhost:3000/comments with a JSON body like {"comment": "Hello, world!"}
// Send a GET request to http://localhost:3000/comments to get all comments
// Send a POST request to http://localhost:3000/comments with a JSON body like {"comment": "Hello, world!"}
// Send a GET request to http://localhost:3000/comments to get all comments