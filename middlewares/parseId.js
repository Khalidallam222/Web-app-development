const parsedIdMiddleware = (req, res, next) => {
    console.log("starting middleware ......")
    const id = req.params.id
    const parsedId = parseInt(req.params.id)
    if (isNaN(parsedId)){
        res.send({message: "Please enter a valid ID (number)"})
    }
    req.parsedId = parsedId
    console.log("finishing middleware logic....")
    next()
}

module.exports = parsedIdMiddleware;