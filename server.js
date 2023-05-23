const express = require('express')
const path = require('path')
const app = express()
const multer = require('multer')
const port = 3000
const upload = multer({dest: 'uploads/'})
const {mergePDFs} = require("./merger")

app.use('/static',express.static('public'))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,'template/index.html'))
})

app.post('/merge', upload.array('pdfs',2),async (req,res)=>{
    const uploadedFiles = req.files;
    console.log(uploadedFiles);
    
    if (!uploadedFiles || uploadedFiles.length === 0) {
        return res.status(400).json({message:'No files were uploaded. '});
    }
    try {
        const mergeFileName = await mergePDFs(uploadedFiles[0].path, uploadedFiles[1].path)
        res.redirect(`http://localhost:${port}/static/${mergeFileName}.pdf`)

    } catch (error) {
        console.error('Error while merging the PDF fils:',error);
    }
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})