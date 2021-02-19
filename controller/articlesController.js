const { query } = require("express")

exports.getArticlesPage=async(req,res)=>{
        const listeDesArticles= await querysql('select *from article')
      //  console.log('articles:', listeDesArticles[0].titre);
        res.render('articles',{articles:listeDesArticles})
}
//get affiche un article

exports.getarticle =async(req,res)=>{
        const id = req.params.id
        const articleSingle = await  querysql("select*from article where articleId='"+ id + "';")
        //console.log(articleSingle);
        res.render('articleSingle',{article:articleSingle[0]})
}
