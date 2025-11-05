const {welcomController}=require('./controlleres');
const express=require('express');
const cors=require('cors');
const app=express();
const port=8200;

const corsOptions = {
    origin: 'http://localhost:8200/', // Replace with your allowed origin
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204
};

app.use(cors(corsOptions)
);

// app.use(express.static('public'));

app.use('public', express.static('public'));

// set to ejs 
app.set('view engine','ejs');
app.get('/',(req,res)=>{
    res.render('index',{ name: 'John Doe' });
});


app.listen(port,()=>{   
    console.log(`Server is running on http://localhost:${port}`);
});




