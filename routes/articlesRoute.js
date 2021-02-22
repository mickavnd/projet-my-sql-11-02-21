const router =require('express').Router()
const articlesController=require('../controller/articlesController')

//page des articles 
//get
router.get('/',articlesController.getArticlesPage)
router.get('/:id',articlesController.getarticle)

module.exports=router

