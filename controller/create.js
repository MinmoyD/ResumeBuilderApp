const Template = require("../model/newModel")

async function createtemplate(req,res){
    const {name , fild, number,email,phn } = req.body

   
    await Template.create({
        name:name,
        fild:fild,
        number:number,
        email:email,
        phn:phn
    })
    console.log("create susscessfull")
    return res.render("resume")
}

module.exports = {
    createtemplate,
}