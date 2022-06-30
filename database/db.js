const mongoose = require('mongoose');
mongoose.connect(process.env.URI)
.then(()=>{console.log('Conected to database')})
.catch((err)=>{console.log('Faile to conected database '+err)})