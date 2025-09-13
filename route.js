const express= require('express')
const { userLogin, userSignUp } = require('./controllers')
const router=   express.Router()

router.get('/login',userLogin)   
router.get('/signup',userSignUp)

module.exports=router