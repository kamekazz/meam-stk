const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const {mongoose} = require('./database')
const app = express();
const portURL = process.env.PORT || 3000

// settings

// middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({origin: 'http://localhost:4200'}));
// route
app.use('/api/employees',require('./routes/employee'))


app.listen(portURL, ()  => {
    console.log('express server up and running on port '+ portURL + '....');
    
})