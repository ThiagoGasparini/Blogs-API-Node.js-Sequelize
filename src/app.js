const express = require('express');
const { validateLogin, validateUser, validateToken } = require('./middlewares/validations');
const userController = require('./controllers/user');

// ...

const app = express();

app.use(express.json());

app.post('/login', validateLogin, userController.login);
app.post('/user', validateUser, userController.userCreate);
app.get('/user', validateToken, userController.getUsers);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
