// Dependencies
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

require('dotenv').config()

// Import Routes
const contactRoutes = require('./routes/contact')

// App
const app = express()

// Middleware
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use('/api', contactRoutes);
app.post('/contact',function(req,res){
    res.send("hello")
   })

// App Listener
const PORT = process.env.PORT || 8000
app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));