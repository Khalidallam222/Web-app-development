const express = require("express")
const router = express.Router()

router.get('/', (req, res) => {
    res.send("posts")
})

router.get('/new', (req, res) => {
    res.send("new posts")
})

module.exports = router