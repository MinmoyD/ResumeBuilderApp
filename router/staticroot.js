const express = require('express')
const router = express.Router();

router.get("/",(req,res)=>{

    return res.render("app")
})

router.get("/resume",(req,res)=>{

    return res.render("resume")
})

router.get("/generate-pdf",(req,res)=>{

    return res.render("resume")
})

module.exports = router