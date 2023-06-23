//Dependencies
const express = require ('express');
const morgan = require('morgan');

//configure express
require('dotenv').config();
const PORT = process.env.PORT
const app = express();

app.use(morgan('tiny'));

// MIDDLEWARE
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

//routes
app.get('/', (req, res) => {
    res.send('Welcome to the breads app!')
})

//bread routes
const breadsController = require('./controllers/breads_controller.js');
app.use('/breads', breadsController);

//listen
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
    console.log(`http://localhost:${PORT}/breads`)
})