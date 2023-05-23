const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('This is the testing for the project setup')
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})