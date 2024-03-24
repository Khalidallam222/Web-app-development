const express = require("express")
const router = express.Router()

router.get('/', async (req, res) => {

    const response = await fetch('https://dummyjson.com/products')
    const productsData = await response.json()
    // console.log(productsData.products[0])



    // Clean up the data 
    const products = productsData.products.map((product) => ({
        name: product.title, 
        price: product.price,
        url: product.thumbnail,
}))
console.log(products[0])

res.json(products)

})


router.post('/', (req, res) =>{
    const body = req.body
    if (body.name && body.price){
        // save product
        console.log(body)
    }
})

router.delete('/:name', (req, res) =>{
    const name = req.params.name
    if (name){
        // delete the product
        console.log(name)
    }
})

router.patch('/:name', (req, res) =>{
    const name = req.params.name
    const new_price = req.body.price
    if (name && new_price){
        // uodate the product
        console.log({name: name, price: new_price})    
    }
})



module.exports = router