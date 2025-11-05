const {welcomController}=require('./controlleres');
const express=require('express');
const cors=require('cors');
const { urlencoded } = require('body-parser');
const multer = require('multer');

const upload = multer({
    storage: multer.diskStorage({
        destination: 'uploads/', // Specify the destination directory for uploaded files
        filename: (req, file, cb) => {
            cb(null, Date.now() + '-' + file.fieldname); // Create a unique filename
        }
    }),
    limits: { fileSize: 5 * 1024 * 1024 } // 5 MB file size limit
});

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

app.use(upload.single('image'));

app.use(urlencoded({ extended: true }));



app.get('/',(req,res)=>{
    console.log('Root route accessed');
    res.send('Hello World!');
});

app.post('/formData',(req,res)=>{
    console.log('Form Data route accessed',req.body);
    console.log('Uploaded Files:', req.file);
    res.send('Form Data received successfully!');
})


app.listen(port,()=>{   
    console.log(`Server is running on http://localhost:${port}`);
});

