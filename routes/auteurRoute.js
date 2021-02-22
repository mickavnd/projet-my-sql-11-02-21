const router =require('express').Router()
const auteurController=require('../controller/auteurController')

//page des articles 
//get
router.get('/', auteurController.getauteurPage)
router.get('/:id', auteurController.getauteurSingle)



module.exports = router