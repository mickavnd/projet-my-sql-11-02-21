const router=require('express').Router()
const tableauDeBordController= require('../controller/admin/tableauDebordController')
const artilcesAdminController=require('../controller/admin/artilcesAdminController')

//page admin 
 router.get('/',tableauDeBordController.getTableauDeBord)

 //liste des article
 router.get('/liste-des-articles/',artilcesAdminController.getArticlesAdmin)


 module.exports=router

