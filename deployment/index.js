const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/about', (req, res) => {
    res.send('About: https://socialshare-6fee3.web.app/')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})