const express = require('express')
const birds = require('./birds')

const app = express()

app.use('/birds', birds)

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.post('/', (req, res) => {
    res.send('Got a POST request')
  })
  
app.put('/user', (req, res) => {
    res.send('Got a PUT request at /user')
  })
  
app.delete('/user', (req, res) => {
    res.send('Got a DELETE request at /user')
  })

app.listen(3000)