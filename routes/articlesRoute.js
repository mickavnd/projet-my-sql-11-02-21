const router =require('express').Router()
const articlesController=require('../controller/articlesController')

//page des articles 
//get
router.get('/',articlesController.getArticlesPage)

module.exports=router