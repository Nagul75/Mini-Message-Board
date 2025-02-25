const {Router, text} = require('express')
const indexRouter = Router()

const messages = [
    {
        text: "Hi there!",
        user: "Amando",
        added: new Date()
    },
    {
        text: "Hello World!",
        user: "Charles",
        added: new Date()
    },
    {
        text: "Greetings!",
        user: "Nagul",
        added: new Date(),
    }
]

indexRouter.get("/", (req, res) => {
    res.render("index", {messages: messages})
})

indexRouter.get("/new", (req, res) => {
    res.render("form")
})

indexRouter.post("/new", (req, res) => {
    const user = req.body.user
    const message = req.body.message
    messages.push({user: user, text: message})
    res.redirect("/")
})

indexRouter.get("/message/:name", (req, res) => {
    const {name} = req.params
    let message = messages.find(message => message.user === name)
    res.render("messageDetails", {name: message.user, message: message.text, date: message.added } )
})

module.exports = indexRouter