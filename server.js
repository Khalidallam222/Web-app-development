const express = require('express')
const app = express()

app.set('view engine', 'ejs')

app.get('/',  (req, res) => {
    console.log("Hello World")
    res.send("Hi")
    // res.json({message: "Hello"})
    // res.download("server.js")
    // res.render('index', {text: 'World'})
   
})

/*
 app.get('/users', (req, res) => {
     res.send("User List")
 })

 app.get('/users/new', (req, res) => {
     res.send("User new form")
 })
 */

const postRouter = require('./routers/posts')
const productRouter= require('./routers/products')

app.use('/products', productRouter)
app.use('/posts', postRouter)


// Start the server
const port =  3000;
app.listen(port, () => {
//   console.log(`Server listening on port ${port}`);
});