const {Router} = require('express')
const newRouter = Router()

newRouter.get("/", (req, res) => {
    res.send("New Message Default")
})

module.exports = newRouter