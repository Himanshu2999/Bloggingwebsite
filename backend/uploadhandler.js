const mlt = require("multer");
const mg = require("mongoose");
const modelk = require("./models");
const exp = require("express");
const uproute = exp.Router();


const strgcover = mlt.diskStorage({
    destination: (req, file , cb) =>{
        cb(null, "public/uploads")
    },
    filename: (req, file, cb) =>{
        cb(null , Date.now() + file.originalname)

    }
})

const coverupload = mlt({storage: strgcover})


uproute.post("/publish", coverupload.single("coverimg"), async(req,res)=>{
    let cimg;
    if(!req.file){
        cimg = "noimg.jpg";
    }else{
        cimg = req.file.filename;
    }

    let publog = new modelk.blogsmodel({Title: req.body.title, Cover: cimg, Blogtext: req.body.blog, Category: req.body.catg})
    let sv = await publog.save();
    if(sv){
        res.status(200).json({statuscode:1})
    }
    else{
        res.status(500).json({statuscode:0})
    }
})

module.exports = uproute;