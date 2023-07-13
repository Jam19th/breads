//Dependencies
const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');
const mongoose = require('mongoose');

//configure express
require('dotenv').config();
const PORT = process.env.PORT
const app = express();

app.use(morgan('tiny'));

// MIDDLEWARE
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

//routes
app.get('/', (req, res) => {
    res.send('Welcome to the breads app!')
})

//bread routes
const breadsController = require('./controllers/breads_controller.js');
app.use('/breads', breadsController);

//baker routes
const bakersController = require('./controllers/bakers_controller.js');
app.use('/bakers', bakersController);

// 404 route
app.get('*', (req, res) => {
    res.render('404error')
})

//listen
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
    console.log(`http://localhost:${PORT}/breads`)
    console.log(`http://localhost:${PORT}/bakers`)
    console.log(`http://localhost:${PORT}/breads/new`)
    console.log(`http://localhost:${PORT}/breads/0/edit`)
    console.log(`http://localhost:${PORT}/404test`)
})

//connect to mongoose
// mongoose.connect('mongodb://localhost:27017/breads', { useNewUrlParser: true, useUnifiedTopology: true },
// () => { console.log('connected to mongo: ', process.env.MONGO_URI) }
// );
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true },
    // () => { console.log('connected to mongo: ', process.env.MONGO_URI) }
);