const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const router = express.Router();
let users = require('../users.json')
router.use(express.json());
router.use(bodyParser.json()); 

router.get('/', (request, response) => {
  const username = request.session.username;
  
  if (!username) {
      return response.status(401).send('User not logged in');
  }

  const userInfo = users.find(user => user.username === username);

  if (!userInfo) {
      return response.status(404).send('User not found');
  }

  response.json(userInfo);
});

  module.exports = router
  