const express = require('express')
const birds = require('./birds')
const faker = require('faker')
const bodyParser= require('body-parser')

const users = []

//list users

for(let i=0; i<10; i++){
  users.push({
      nom: faker.internet.userName,
        email: faker.internet.email()
  })
}

const app = express()

app.use(bodyParser.urlencoded({extends: false}))
app.use(bodyParser.json())
app.use('/birds', birds)


//GET MAIN

app.get('/', function (req, res) {
  res.json({
    message: 'Coucou'
  })
})

//GET

app.get(`/remy`, (req,res) =>{
  res.json({
    data: [
      { prénom:'Rémy',
        nom:'Jovanovic',
        email: 'remyj@outlook.fr'
      }
    ]
  })
}
)


app.get(`/shihao`, (req,res) =>{
  res.json({
    data: [
      { prénom:'ShiHao',
        nom:'Yu',
        email: 'shihao@outlook.fr'
      }
    ]
  })
}
)

app.get('/users', (req,res)=>{
  res.json({
    data: users
  })
});

//GET ID

app.get('/users/:id', (req,res)=>{
  const id = req.params.id -1
  
  res.json({
    data: users[id] || null
  })

});


//POST

app.post('/users', (req,res) => {
  const data= req.body

  users.push(data)

  res.json({
    index: users.length,
    data: users[users.length-1]
  })
})

//PUT

app.put('/users/:id', (req,res) =>{
  const id= req.params.id -1
  const data= req.body

  users[id] = Object.assign(users[id], data)

  res.json({
    data: users[id]
  })
})

//DELETE A REVOIR

app.delete('/users/:id', (req,res)=>{
  const id= req.params.id -1
  
  users.splice(id,1)

  console.log(users.length)

  res.sendStatus(200)
})

app.listen(3000)