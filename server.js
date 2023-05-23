const express = require('express')
const path = require('path')
const app = express()
const multer = require('multer')
const port = 3000
const upload = multer({dest: 'upload/'})

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,'template/index.html'))
})
app.post('/upload', upload.array('pdfFiles',5),(req,res)=>{
    const uploadedFiles = req.files;

    if (!uploadedFiles || uploadedFiles.length === 0) {
        return res.status(400).json({message:'No fies were uploaded. '});
    }
    res.status(200).json({message: 'Files Uploaded successfully.'})
})
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})