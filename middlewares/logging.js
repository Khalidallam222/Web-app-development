const middleware = (req, res, next)=> {
    console.log("this is a middleware....")
    next()
}
module.exports = middleware;