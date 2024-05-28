const express= require('express')
const logger = require ('./logger')
const authenticate = require('./authenticate')
const app = express()

app.use([logger, authenticate]);

app.get('/',(req,res)=>{
  res.send("Home page")
  console.log("home")
})

app.get('/about',(req,res)=>{
  res.send('About')
  console.log("about")
})

app.get('/products',(req,res)=> {
  res.send('Received all products')
  console.log('products')
})

app.get('/products/query',(req,res)=>{
  res.send('detail product')
  console.log('detail product')
  console.log(req.query)
})
app.listen(5000,()=>{
  console.log("the sever is listening to port 5000")
})