const express = require('express')
const app = express()
const path =require('path')

//EJS
app.set('view engine','ejs');
//dossier static (public)
app.use(express.static(path.join(__dirname,'public')));

//routes
const articles =require('./routes/articlesRoute')

 //controller
app.use('/liste-des-articles',articles)

app.get('/', function (req, res) {
    res.send('Hello ')
})
 
app.listen(3000,()=>{
    console.log('server ok');
})
