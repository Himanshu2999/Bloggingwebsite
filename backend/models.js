const mg = require('mongoose')

let userchema = new mg.Schema({Username: {type: String}, Email: {type: String}, Password: {type: String}},{
    versionKey: false
})

let blogschma = new mg.Schema({Title: {type: String}, Cover: {type: String}, Blogtext: {type: String}, Author: {type: String}, Category: {type: String},
    Comments: [Object],
}, {versionKey: false})

let sitemodel = {
    usermodel : mg.model("user", userchema),
    blogsmodel: mg.model("blog", blogschma),
}

module.exports = sitemodel;