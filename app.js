const express = require('express')
const path = require('path')

const indexRouter = require('./routes/indexRouter')

const app = express()
const PORT = 8080

app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")

const assetsPath = path.join(__dirname, "public")
app.use(express.static(assetsPath))

app.use("/", indexRouter)


app.listen(PORT, () => {
    console.log(`Listening at Port: ${PORT}`)
})