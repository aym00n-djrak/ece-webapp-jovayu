const express = require('express')
const birds = require('./birds')

const app = express()

app.use('/birds', birds)

app.get('/', function (req, res) {
  res.json({
    message: 'Coucou'
  })
})

app.get(`/remy`, (req,res) =>{
  res.json({
    data: [
      {
        firstname: 'Rémy',
        lastname: 'JOVANOVIC',
        email: 'remyj@outlook.fr'
      }
    ]
  })
})


app.listen(3000)