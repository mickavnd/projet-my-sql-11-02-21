const router=require('express').Router()
const tableauDeBordController= require('../controller/admin/tableauDebordController')
const artilcesAdminController=require('../controller/admin/artilcesAdminController')
const ajouteArticlesController= require('../controller/admin/ajouteArticlesController')
//page admin 
 router.get('/',tableauDeBordController.getTableauDeBord)

 //liste des article
 router.get('/liste-des-articles/',artilcesAdminController.getArticlesAdmin)

 //ajout article
 router.get('/ajoute-articles/',ajouteArticlesController.getAjouteArticle)

router.post('/ajoute-articles',ajouteArticlesController.postAjouteArticles)


 module.exports=router

 
