const express=require('express');
const app=express();
app.get('/',(req,res)=>{
    res.send('Maa Ki Chut Mere Bete');
})
const PORT=process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log(`Server started on Port ${PORT}`);
})