require('dotenv').config()
const exp = require('express')
const app = exp()
const cors = require('cors')
app.use(exp.urlencoded({extended: false}))
app.use(exp.json())
const router = require("../backend/routes")
const upld = require("../backend/uploadhandler")
const mg = require('mongoose')

mg.connect('mongodb://127.0.0.1:27017/blogweb').then(()=>console.log("Connected to mongodb"))

mg.set("strictQuery", false)


app.use(cors({origin: 'http://localhost:3000'}))

const PORT = process.env.PORT || 9000

app.use("/api", router)
app.use("/api", upld)

app.get("/", (req,res)=>{
    res.send("Welcome to our website")
})

app.listen(PORT, (req,res)=>{
    console.log("Server is running")
})
