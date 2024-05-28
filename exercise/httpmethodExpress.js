const express = require('express')
const app = express()

app.get('/',(req,res)=>{

})

app.all('*',(req,res)=>{
    res.status(404).send('resource was not found')
})
app.listen(5000,()=>{
    console.log("5000 port is listening")
})