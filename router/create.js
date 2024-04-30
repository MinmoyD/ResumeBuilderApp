const express = require("express")

const router = express.Router();

const { createtemplate } = require("../controller/create")

router.post("/",createtemplate)

module.exports = router