const express = require('express')
const morgan = require('morgan')
const {mongoose} = require('./database')
const app = express();
const portURL = process.env.PORT || 3000

// settings

// middlewares
app.use(morgan('dev'));
app.use(express.json());
// route
app.use('/api/employees',require('./routes/employee'))


app.listen(portURL, ()  => {
    console.log('express server up and running on port '+ portURL + '....');
    
})