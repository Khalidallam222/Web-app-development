const express = require("express")
const router = express.Router()







const fakeproducts = [
    {
        "id": 1,
        "name": "iPhone 9",
        "price": 549,
        "url": "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg"
    },
    {
        "id": 2,
        "name": "iPhone X",
        "price": 899,
        "url": "https://cdn.dummyjson.com/product-images/2/thumbnail.jpg"
    },
    {
        "id": 3,
        "name": "Samsung Universe 9",
        "price": 1249,
        "url": "https://cdn.dummyjson.com/product-images/3/thumbnail.jpg"
    },
    {
        "id": 4,
        "name": "OPPOF19",
        "price": 280,
        "url": "https://cdn.dummyjson.com/product-images/4/thumbnail.jpg"
    },
    {
        "id": 5,
        "name": "Huawei P30",
        "price": 499,
        "url": "https://cdn.dummyjson.com/product-images/5/thumbnail.jpg"
    },
    {
        "id": 6,
        "name": "MacBook Pro",
        "price": 1749,
        "url": "https://cdn.dummyjson.com/product-images/6/thumbnail.png"
    },
    {
        "id": 7,
        "name": "Samsung Galaxy Book",
        "price": 1499,
        "url": "https://cdn.dummyjson.com/product-images/7/thumbnail.jpg"
    },
    {
        "id": 8,
        "name": "Microsoft Surface Laptop 4",
        "price": 1499,
        "url": "https://cdn.dummyjson.com/product-images/8/thumbnail.jpg"
    },
    {
        "id": 9,
        "name": "Infinix INBOOK",
        "price": 1099,
        "url": "https://cdn.dummyjson.com/product-images/9/thumbnail.jpg"
    },
    {
        "id": 10,
        "name": "HP Pavilion 15-DK1056WM",
        "price": 1099,
        "url": "https://cdn.dummyjson.com/product-images/10/thumbnail.jpeg"
    },
]






router.get('/',  async (req, res) => {
    const {filter, value} = req.query
    let finalProducts = fakeproducts;
    if (filter && value){
        finalProducts = finalProducts.filter(
            (product) => product[filter] == value
        )
    }

    // const name = req.query
    // const minPrice = req.query
    // if (name){
    //     finalProducts = fakeproducts.filter((product) => product.name.includes(name))
    // }
    // if (minPrice){
    //     finalProducts = fakeproducts.filter((product) => product.price >= minPrice)
    // }
    
    const response = await fetch('https://dummyjson.com/products')
    const productsData = await response.json()
    // console.log(productsData.products[0])



    // Clean up the data 
    /**This line iterates over an array named productsData.products using the map method.
    For each product in the original array, it creates a new object with three properties:
    name: Set to the title property of the original product.
    price: Set to the price property of the original product.
    url: Set to the thumbnail property of the original product.
    */
    const products = productsData.products.map((product) => ({
        id: product.id,
        name: product.title, 
        price: product.price,
        url: product.thumbnail,
}))

// console.log(products[0])

res.json(finalProducts)
// res.json(products)
// res.json(fakeproducts)

})

router.get('/:productId', async(req, res)=>{
    const id = req.params.productId
    const parsedId = parseInt(req.params.productId)
    if (isNaN(parsedId)){
        res.send({message: "Please enter a valid ID (number)"})
    }
    console.log("Route params, id:", parsedId, typeof id)
    const matchedproduct = fakeproducts.find((product) => product.id == parsedId)
    if (!matchedproduct){
        res.send({message: "Product not found"})
    }
    res.send(matchedproduct)
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

/*
Fetching Products:

router.get('/', async (req, res) => {...}): This route fetches product data from the DummyJSON API (https://dummyjson.com/products) using fetch.
It uses async/await for asynchronous handling.
It cleans up the fetched data by mapping the products array and 
creating a new array (products) with objects containing name, price, and url properties extracted from the original data.
It responds with the cleaned-up products data as JSON.
Product CRUD Operations (Create, Read, Update, Delete):

router.post('/', (req, res) => {...}): This route handles POST requests (likely for creating products).
It checks if name and price are present in the request body.
If valid, it can be extended to implement logic for saving the product data (potentially using a database or other persistence mechanism). 
Currently, it just logs the body for demonstration.
router.delete('/:name', (req, res) => {...}): This route handles DELETE requests with a product name parameter (/:name).
It retrieves the name from the request parameters.
If a name is provided, it can be extended to implement logic for deleting the product (from a database or elsewhere). Currently, it just logs the name for demonstration.
router.patch('/:name', (req, res) => {...}): This route handles PATCH requests with a product name parameter (/:name) and a price in the request body.
It retrieves the name from the parameters and price from the body.
If valid, it can be extended to implement logic for updating the product price (in a database or elsewhere). Currently, it just logs the name and new price for demonstration.
Exporting the Router:

module.exports = router: This line exports the entire router object for use in your main Express application.
Improvements:

Error Handling: Consider adding error handling for potential issues like failed API requests or invalid data in requests.
Data Validation: You can implement validation for incoming data to ensure expected formats (e.g., numbers for price).
Persistence: Currently, the code doesn't persist product data. You can integrate a database or other storage mechanism for CRUD operations to have a lasting impact. */