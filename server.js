const express = require('express')
const path = require('path')
const app = express()
const multer = require('multer')
const port = 3000
const upload = multer({ dest: 'uploads/' })
const { mergePDFs } = require("./merger")
const fs = require('fs')

app.use('/static', express.static('public'))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'template/index.html'))
})

app.post('/merge', upload.array('pdfs', 2), async (req, res) => {
  try {
    console.log(req.file)
    let d = await mergePDFs(path.join(__dirname, req.files[0].path), path.join(__dirname, req.files[1].path))
    res.redirect(`http://localhost:${port}/static/${d}.pdf`)

    req.files.forEach(file => {
      fs.unlink(file.path, (err) => {
        if (err)
          console.error('Error  deleting file:', file.path);
        else
          console.log('File Deleted successfully:', file.path)
      });
    });

  } catch (err) {
    console.error('Error merging PDFs:', err)
    res.status(500).send('Error mergin PDFs;')
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})