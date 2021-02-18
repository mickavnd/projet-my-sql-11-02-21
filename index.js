const express = require('express')
const app = express()
const path =require('path')
const mysql =require('mysql')
const util = require('util')

//dotenv
require('dotenv').config()

//mysql
const db =mysql.createConnection(
    {
        host:process.env.DB_HOST,
        user:process.env.DB_USER,
        password:process.env.DB_PASS,
        database:process.env.DB_NAME

    }
)
db.connect(
    (err)=>{
        if (err){throw err}
        console.log('connecter au server sql');
    }
)
//variable global querysql
global.querysql=util.promisify(db.query).bind(db)


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
