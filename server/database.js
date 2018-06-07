const mongoose = require('mongoose')
const urlDataBese =  process.env.MONGOURL ||  'mongodb://localhost:27017/mean-crud' 
mongoose.connect(urlDataBese)
.then(db =>console.log('DB is up and running'))
.catch(err => console.error(err))
module.exports=mongoose;