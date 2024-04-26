const express = require("express")
const router = express.Router()

const fakeusers = [
    {
        "id": 1,
        "name": "Khalid",
    },
    {
        "id": 2,
        "name": "Samy",
    },
    {
        "id": 3,
        "name": "Allam",
   },
    
]


router.get('/', (req, res) => {
    res.send(fakeusers)
1})


const parsedIdMiddleware = require('/workspaces/HTML-course/middlewares/parseId.js');
router.get('/:id', parsedIdMiddleware, (req, res) => {
    const parsedId = req.parsedId
    console.log("parsedId", parsedId)
    const matcheduser = fakeusers.find((user) => user.id == parsedId)
    if (!matcheduser){
        res.send({message: "user not found"})
    }
    res.send(matcheduser)    
})



module.exports = router

/*
import and Router Creation:

express is imported to create the router.
router is an instance of express.Router(), a dedicated object for managing routes within your application.
Post Routes:

router.get('/', (req, res) => {...}): This defines a route handler for GET requests to the root path (/) of the router.
 When a request reaches this path (usually prefixed with another path in the main app), it responds with "posts".
  This could potentially be used to list existing posts.

router.get('/new', (req, res) => {...}): Similar to the previous route,
 this handles GET requests to the /new path. It responds with "new posts", which might be used for a new post creation form.
Exporting the Router:

module.exports = router: This line exports the entire router object,
 making it available for import and use in other parts of your Express application.
How to Use This Router:

This router doesn't handle requests directly. You'll need to import it into your main app and mount it on a specific path. Here's an example:

JavaScript
    const express = require('express')
    const postRouter = require('./routers/posts') // Assuming this file is saved as posts.js in a routers folder

    const app = express()

    // Mount the post router at the /posts path
    app.use('/posts', postRouter)

    // Other app routes...

    // Start the server
    const port = 3000
    app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
    })
In this example, the postRouter is mounted at the /posts path. 
Any routes defined in the router (/ and /new in this case) will be prefixed with /posts. 
So, accessing http://localhost:3000/posts/ would trigger the first route handler (res.send("posts")).
*/