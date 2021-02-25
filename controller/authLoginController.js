const bcrypt = require('bcrypt')

//affiche la page de connexion
exports.getLogin = async (req, res) => {
     res.render('login', {
          message: req.flash("message")
     })
}
//connecter au compte utilisateur
exports.postLogin = async (req, res) => {

     const {
          email,
          password
     } = req.body;

     //si email existe pas 
     const findEmail = await querysql('SELECT COUNT(*) as cnt from user where email=?', email)

     if (!findEmail[0].cnt > 0) {
          req.flash("message", "aucun utilistateur ")
          return res.redirect('/auth/login')
     }


     // si l'email existe
     //verifier le mot de passe

     const user = await querysql('SELECT userId,firstname,lastname,email,password FROM user WHERE email=?', email)
     //console.log(user);
     const passwordCheck = await bcrypt.compare(password, user[0].password)
     if (!passwordCheck) {
          req.flash("message", "mot de passe incorrect")
          return res.redirect('/auth/login')
     } else {
          req.session.userId = user[0].userId;
          req.session.user = {
               id: user[0].userId,
               firstname: user[0].firstname,
               lastname: user[0].lastname,
               email: user[0].email
          };
          
          //console.log("session", res.session.user);
          return res.redirect('/tableau-de-bord')
     }
}


exports.getLogout=async(req,res)=>{
     req.session.destroy( function(err){
          res.redirect("/auth/login")

     })
}