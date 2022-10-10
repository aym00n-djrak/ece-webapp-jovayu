const express = require('express')
const birds = require('./birds')

const app = express()

const faker = require('faker')
const bodyParser= require('body-parser')

const users = []

app.use(bodyParser.urlencoded({extends: false}))
app.use(bodyParser.json())

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

for(let i=0; i<10; i++){
  users.push({
        email: faker.internet.email()
  })
}

app.get('/users', (req,res)=>{
  res.json({
    data: users
  })
});

app.get('/users/:id', (req,res)=>{
  const id = req.params.id -1
  
  res.json({
    data: users[id] || null
  })

});


app.post('/users', (req,res) => {
  const data= req.body

  console.log(data)

  res.json({
    data: undefined
  })
})



app.listen(3000)