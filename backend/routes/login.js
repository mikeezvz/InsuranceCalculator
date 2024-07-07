const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const router = express.Router();
let users = require('../users.json');

router.use(express.json());
router.use(bodyParser.json());

router.post('/', (request, response) => {
    const { username, password } = request.body;
    const user = users.find(user => user.username === username && user.password === password);
    if (user) {
        request.session.user = { username: user.username };
        response.send('Login successful!');
    } else {
        response.status(401).send('Invalid credentials');
    }
});

module.exports = router;
