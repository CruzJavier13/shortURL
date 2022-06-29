const express = require('express');
const {create} = require('express-handlebars');
const app = express();


//instance of handlerbars
const hbs = create({
    extname : ".hbs",
    partialsDir:["views/components"],
});


app.engine(".hbs",hbs.engine);
app.set("view engine",".hbs");
app.set("views","./views");

const port = 3000;


app.use('/',require('./routes/home'));
app.use('/auth',require('./routes/auth'));
app.use(express.static(__dirname +'/public'));

app.listen(port,()=>{
    console.log('Server listenning at port '+port);
    console.log(__dirname)
});