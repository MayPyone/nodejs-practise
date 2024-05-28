const express= require('express')
const app = express()

function logger(req,res,next) {
  const method = req.method
  const url = req.url
  const time = new Date().getFullYear()
  console.log(method, url, time)
  next()
 
}

app.get('/',logger,(req,res)=>{
  res.send("Home page")
 
})

app.get('/about',(req,res)=>{
  res.send('About')
})

app.listen(5000,()=>{
  console.log("the sever is listening to port 50000")
})