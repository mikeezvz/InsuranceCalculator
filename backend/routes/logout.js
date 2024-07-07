const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const router = express.Router();
router.use(express.json());
router.use(bodyParser.json()); 

router.delete('/', (request, response) => {
    request.session.destroy((err) => {
      if (err) {
        return response.status(500).send('Could not log out.');
      } else {
        response.send('Logout successful!');
      }
    });
  });

module.exports = router