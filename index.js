const express=require('express')
const {  mainController, userController, queryController } = require('./controllers')
const PORT=8100
const app=express()
app.get('/',mainController)
app.get('/user/:username',userController)
app.get('/search',queryController)
app.listen(PORT,()=>console.log(`server is running on ${PORT}`))