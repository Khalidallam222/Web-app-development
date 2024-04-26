const express = require('express')
const app = express()

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
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



const middleware = require('./middlewares/logging.js');

app.use(middleware) // this middlewara will be used by the server and will be excuted at any time a get request is called on route /




const usersRouter = require('./routers/users')
const productRouter = require('./routers/products')
app.use('/products', productRouter)
app.use('/users', usersRouter)


// Start the server
const port = 3000;
app.listen(port, () => {
    //   console.log(`Server listening on port ${port}`);
});



/* 
Imports and Setup:

express is imported to create the Express application.
app is an instance of the Express application.
ejs is set as the view engine, indicating you'll be using EJS templates for dynamic content.
Homepage Route (/):

This route handles GET requests to the root path (/).
When a request comes in, it logs "Hello World" to the console.
You've commented out different response options:
res.send("Hi") sends a plain text response "Hi".
// res.json({message: "Hello"}) sends a JSON response with a message property.
// res.download("server.js") would download the server.js file (if uncommented).
// res.render('index', {text: 'World'}) would render an EJS template named "index" with a variable "text" set to "World" (if uncommented).
Commented-out User Routes (/users and /users/new):

These commented-out routes demonstrate how to handle requests for user-related functionalities.
You can uncomment them and define the logic for handling user lists and new user forms.
Router Usage:

postRouter and productRouter are likely imported from separate files (./routers/posts and ./routers/products) containing routes specific to posts and products.
app.use('/products', productRouter) mounts the productRouter middleware at the /products path. This means any routes defined in productRouter will be prefixed with /products. Similarly, for postRouter.
Server Start:

The server listens on port 3000. You can access the app in your browser at http://localhost:3000.
Accessing the /users Route:

Since the user routes (/users and /users/new) are currently commented out, you cannot access them directly. To access them, uncomment the relevant lines and define the logic in the route handlers ((req, res) => {...}) for these routes.

Additional Notes:

Consider adding logging for the user routes once uncommented to track requests.
Remember to create the ./routers/posts and ./routers/products files and define the routes for posts and products within them.*/