const express= require('express')

const router = require('./peopleRoute')
const app = express()
app.use(express.json());

app.use('/people',router)

app.listen(5000,()=>{
  console.log("the sever is listening to port 5000")
})