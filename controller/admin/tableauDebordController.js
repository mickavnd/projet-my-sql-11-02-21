 exports.getTableauDeBord = async (req, res) => {
    const user =req.session.user
	console.log(user);
 	res.render('admin/tableau-de-bord',{user})

 }
