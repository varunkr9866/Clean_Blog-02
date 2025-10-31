const express = require('express')
const path = require('path')

const app = express();

/*WITH THIS CODE,EXPRESS WILL ACCESS ALL 
THE FOLDERS IN STATIC ASSETS IN THE PUBLIC DIRECTORY */
app.use(express.static('public'));

app.listen(4000,()=>{
    console.log('App is Running in 4000 port');
    
});


app.get('/',(req,res) =>{
    res.sendFile(path.resolve(__dirname,'pages/index.html'))
});

app.get('/about',(req,res) =>{
    res.sendFile(path.resolve(__dirname,'pages/about.html'))
});

app.get('/content',(req,res) =>{
    res.sendFile(path.resolve(__dirname,'pages/content.html'))
});
app.get('/post',(req,res) =>{
    res.sendFile(path.resolve(__dirname,'pages/post.html'))
});
