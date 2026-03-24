const mdl = require("../backend/models")

exports.createuser = async(req, res) =>{
    let user = new mdl.usermodel({Username: req.body.uname, Email: req.body.email , Password: req.body.pass})
    let sv = await user.save()
    if(sv){
        res.status(200).json({statuscode:1})
    }else{
        res.status(500).json({statuscode: 0})
    }
}

exports.login = async(req,res)=>{
    let user = await mdl.usermodel.findOne({$or : [{Username: req.body.uname , Password: req.body.pass}, 
        {Email: req.body.email , Password: req.body.pass} ]})
    if(user!==null){
        res.status(200).json({statuscode: 1, udata : user})
    }else{
        res.status(500).json({statuscode: 0})
    }
}

exports.getblogs = async(req,res) =>{
    let blogs = await mdl.blogsmodel.find();
    if(blogs!==null){
        res.status(200).json({statuscode: 1, blgs: blogs})
    }else{
        res.status(500).json({statuscode: 0})
    }
}





exports.getblogbyid = async(req, res) => {
    let blg = await mdl.blogsmodel.findOne({_id: req.params.bid})
    if(blg !== null){
        res.status(200).json({statuscode: 1, wblog: blg})
    } else {
        res.status(404).json({statuscode: 0})
    }
}

exports.addcommt = async(req, res) => {
    let blg = await mdl.blogsmodel.updateOne({_id: req.params.bid}, { $push: {Comments: req.body.comt}})
    if(blg.modifiedCount==1){
        res.status(200).json({statuscode: 1}) 
    } else {
        res.status(404).json({statuscode: 0})
    }
}