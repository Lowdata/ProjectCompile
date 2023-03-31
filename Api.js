const express = require("express")

const app = express()
const bodyP = require("body-parser")
app.use(bodyP.json())
app.use("/", function(res, req){
    res.sendFile("C:/Users/AYUSH/Desktop/ProjectCompile/index.html")
})

app.listen(8000)
