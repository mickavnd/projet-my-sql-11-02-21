const router = require('express').Router()
const authLoginController = require('../controller/authLoginController')
const authLogupController = require('../controller/authLogupController')

//page connexion
router.get('/login', authLoginController.getLogin)
router.post('/login',authLoginController.postLogin)

//page inscrption
router.get('/logup', authLogupController.getAuthLogup)
router.post('/logup', authLogupController.postAuthLogup)

//deconnexion
router.get('/logout',authLoginController.getLogout)
module.exports = router