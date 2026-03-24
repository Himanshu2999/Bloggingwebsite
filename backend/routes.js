const exp = require("express")
const routk = exp.Router()
const cont = require("../backend/controls")

routk.post("/adddata", cont.createuser)
routk.post("/getdata", cont.login)
routk.get("/getblogs", cont.getblogs)
routk.get("/viewblog/:bid", cont.getblogbyid)
routk.put("/addcomment/:bid", cont.addcommt)

module.exports = routk;