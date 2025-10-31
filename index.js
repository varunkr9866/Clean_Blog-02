const express = require('express')
const path = require('path')

const app = express();

/*WITH THIS CODE,EXPRESS WILL ACCESS ALL 
THE FOLDERS IN STATIC ASSETS IN THE PUBLIC DIRECTORY */
app.use(express.static('public'));

app.listen(4000,()=>{
    console.log('App is Running in 4000 port');
    
}
)