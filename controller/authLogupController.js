 const bcrypt = require('bcrypt');

 //affiche la page authentification
 exports.getAuthLogup = async (req, res) => {
   res.render('logup',{message:req.flash("message")})
 }


 //enregistrer un utilisateur
 exports.postAuthLogup = async (req, res) => {
  
   const {
     firstname,
     lastname,
     email,
     password
   } = req.body

   //email existantt
   const findEmail = await querysql('SELECT COUNT(*) as cnt from user where email=?', email)
   
   if (findEmail[0].cnt > 0) {
     req.flash("message","lemail deja utiliser")
     res.redirect('/auth/logup')
   }
 
   //ajout un utilisateur
   try {

     //hash
     const salt = await bcrypt.genSalt(10);
     const hash = await bcrypt.hash(password, salt)
     await querysql(
       'INSERT INTO user (firstname, lastname, email, password) values (?,?,?,?)',
       [firstname, lastname, email, hash],

       (err, result) => {
         if (err) {
          req.flash("message",`il y a une erreur ${err}`)
           return res.redirect('/auth/logup')

         }
         req.flash("message",`inscription reussi!`)
         return res.redirect('/auth/login')
       }

     )

   } catch (err) {
     res.status(400).json({
       message: err
     })
   }
 }