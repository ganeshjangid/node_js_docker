const {PORT}=require('./config');

const express=require('express');
const app=express();

app.get('/',(req,res)=>{
    res.send("Helloo");
});

app.listen(PORT,()=> console.log(`This Server is running ${PORT}`));
