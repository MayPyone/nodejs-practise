const express = require('express');
const app = express()

const { products } = require('./expressTutorial/data')


app.get('/',(req, res)=>{
    res.send('<h1>Home Page</h1> <a href="/api/products">Products</a>')
})

app.get('/api/products',(req,res)=>{
    const updateProducts = products.map((product)=>{
        const {id, name, image} = product;
        return {id, name, image}
    })
    res.json(updateProducts)
})

app.get('/api/products/:productID',(req,res)=>{
    const { productID } = req.params;
    console.log('hello',productID)
      const singleProduct = products.find(
        (product)=> {
            return product.id === Number(productID)
        }
      )
      if(!singleProduct){
        return res.status(404).send("Product doesn't exist")
      }
      return res.json(singleProduct)
})
app.listen(5000,()=>{
  console.log('5000 port is listening')
})