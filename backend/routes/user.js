const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const router = express.Router();
let users = require('../users.json')
router.use(express.json());
router.use(bodyParser.json()); 

router.get('/', (request, response) => {
    if (request.session.user) {
      response.json({ username: request.session.user.username });
    } else {
      response.json({ username: null });
    }
  });

  module.exports = router
  