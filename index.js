const express = require('express')
const path = require("path")
const app = express();
const PORT = 8000;
const createResume = require("./router/create")
const starticRout = require("./router/staticroot")
const {connectToMongodb } = require("./connection/moogose")
// const generatePDF = require('./controller/createpdf');
const puppeteer = require('puppeteer');
const bodyParser = require('body-parser');

app.set("view engine", "ejs")
app.set("views", path.resolve("./views"))

app.use(express.json())
app.use(express.urlencoded({ extended:false }))
app.use(express.static('public'));
app.use(bodyParser.json());

app.post('/generate-pdf', async (req, res) => {
    const { content } = req.body;

    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.setContent(content);
        const pdfBuffer = await page.pdf({ format: 'A4' });
        await browser.close();

        res.setHeader('Content-Type', 'application/pdf');
        res.send(pdfBuffer);
    } catch (error) {
        console.error('Error generating PDF:', error);
        res.status(500).send('Error generating PDF');
    }
});


connectToMongodb("mongodb://127.0.0.1:27017/crete-resume")


app.use("/",starticRout)
app.use("/resume",createResume)

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`)
})




