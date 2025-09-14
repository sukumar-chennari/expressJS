const express=require('express')
const router = require('./route')
const PORT=8100
const app=express()

app.use('/users',(req,res,next)=>{
    console.log(`${req.method} ${req.url} ${new Date()}`);
    next()
})

app.use('/users',router)

app.get('/',(req,res)=>{
    res.send('hello buddy')
})

app.get('/error',(req,res)=>{
    throw new Error('something went wrong')
})

app.use((err,req,res,next)=>{
    console.error(err.stack);
    res.status(500).send('something broke!')
})


// app.use('/user',router)

app.listen(PORT,()=>console.log(`server is running on ${PORT}`))