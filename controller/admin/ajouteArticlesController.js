exports.getAjouteArticle = async (req,res)=>{
    const listeAuteur= await querysql('select*from auteur')
        res.render('admin/ajoute-articles',{auteur:listeAuteur})
}



exports.postAjouteArticles= async (req,res)=>{
     //const {imageUrl}=req.file;
    const {titre,description, auteurId,}=req.body
    
    try{
        await querysql("insert into article(titre,description,auteurId) values('"+ titre +"','"+ description +"','"+auteurId +"');",
        (err,result) => {
            if (err) {
                res.send(err)
                
            }else{
                return res.redirect ('/tableau-de-bord/liste-des-articles/')
            }

        }
        )

    }
    catch(err){

    }
}