const express = require('express')
const dotnev = require('dotnev')
const products = require('./data/products')

dotnev.config();
const app=express()

app.get('/',(req,res) => {
    res.send('API is running...')
})

app.get('/api/products',(req,res) => {
    res.json(products)
})

app.get('/api/product/:id',(req,res) => {
    const product=products.find(p=>p._id===req.params.id)
    res.json(product)
})
const PORT=process.env.PORT || 5000
app.listen(PORT,console.log(`Server running on port ${process.env.PORT}`))