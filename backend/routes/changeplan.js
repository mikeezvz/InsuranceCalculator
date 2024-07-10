const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const router = express.Router();
let usersPath = require('../users.json')
router.use(express.json());
router.use(bodyParser.json()); 

const readFile = () => {
    const data = fs.readFileSync(usersPath, 'utf8');
    return JSON.parse(data);
  };
  
  const writeFile = (data) => {
    fs.writeFileSync(usersPath, JSON.stringify(data, null, 2), 'utf8');
  };

router.patch('/', (request, response) => {
    if (!request.session.username) {
        response.status(401).json({ error: 'Unauthorized' });
    }
  
    const username = request.session.username;
    const { plan } = request.body;
  
    if (!plan) {
        response.status(400).json({ error: 'Please choose a new plan' });
    }
  
    const users = readFile();
    const user = users.find(user => user.username === username);
  
    if (!user) {
        response.status(404).json({ error: 'User not found' });
    }
  
    user.plan = plan;
    writeFile(usersPath);
  
     response.status(200).json({ message: 'Subscription updated successfully', user });
  });

  module.exports = router;