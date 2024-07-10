const express = require('express');
const swaggerFile = require('./swagger-output.json');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const session = require('express-session');
const router = express.Router();
const port = 5000;

app.use(bodyParser.json());
router.use(express.json());
app.use(express.json());

const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true, 
};

app.use(cors(corsOptions));

app.use(session({   
  secret: 'your_secret_key',
  resave: false,
  saveUninitialized: true
}));

const loginRoute = require('./routes/login');
app.use('/login', loginRoute);

const logoutRoute = require('./routes/logout');
app.use('/logout', logoutRoute);

const userRoute = require('./routes/user');
app.use('/user', userRoute);

const planRoute = require('./routes/changeplan');
app.use('/renameplan', planRoute);

const swaggerUI = require('swagger-ui-express');
app.use('/documentation', swaggerUI.serve, swaggerUI.setup(swaggerFile, { explorer: true }));

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });