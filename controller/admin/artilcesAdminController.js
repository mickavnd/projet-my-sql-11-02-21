const { query } = require("express")

exports.getArticlesAdmin= async (req,res)=>{
    const articleAdmin= await querysql('select titre,image,auteurId,description from article')
    //console.log(articleAdmin);
     res.render('admin/admin-liste-article',{articles:articleAdmin})
}