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

app.use((req,res,next)=>{
    console.log('Middleware executed');
    console.log(`${req.method} ${req.url} - ${new Date().toISOString()}`);
    next();
    res.on('finish',()=>{
        console.log(`Response Status: ${res.statusCode}`);
    });
});
app.get('/',(req,res)=>{
    console.log('Root route accessed');
    res.send('Hello World!');
});


app.get('/error', (req, res) => {
    throw new Error('Intentional Error for Testing');

});


app.use((err, req, res, next) => {
    console.error('Error encountered:', err.message);
    res.status(500).send('Internal Server Error');
});

app.get('/welcome',welcomController);

app.listen(port,()=>{   
    console.log(`Server is running on http://localhost:${port}`);
});

