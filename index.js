const express=require('express')
const {  mainController } = require('./controllers')
const router = require('./route')
const PORT=8100
const app=express()
app.get('/',mainController)
// app.get('/user/:username',userController)
// app.get('/search',queryController)

app.use('/user',router)

app.post('/users',express.json(),(req,res)=>{
    const {username,email  }=req.body
    res.send(`user created ${username} ${email} successfully`)
})


app.put('/users/:id',express.json(),(req,res)=>{
    const { id } = req.params
    const {username,email}=req.body
    res.send(`user ${username} with ${id}  is updated`)
})

app.listen(PORT,()=>console.log(`server is running on ${PORT}`))