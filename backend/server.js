const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());

let users = require('./users.json');

app.post('/login', (request, response) => {
    const { username, password } = request.body;
    const user = users.find(user => user.username === username && user.password === password);
  
    if (user) {
      response.status(200).send('Login successful');
    } else {
      response.status(401).send('Invalid credentials');
    }
  });
  
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });