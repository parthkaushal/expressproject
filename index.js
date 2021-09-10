const express = require("express")

const app = express()

app.get("/", (req, res, next) => {
    res.send("chant Hare Krishna and be happy!")
})

app.get("/json", (req, res, next) => {
    const data = {
        msg: "MahaMantra",
        mantra: "HareKrishna"
    }
    res.json(data)
})

app.get("/html", (req, res, next) => {
    res.send('<html><h1 style="color:red">Hare Krishna</h1></html>')
})

app.get("/login", (req, res, next) => {
    const params = req.query
    res.json(params)
})

app.listen(5050)
console.log("server running on port:5050")