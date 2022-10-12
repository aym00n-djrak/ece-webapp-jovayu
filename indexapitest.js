const express = require('express')
const apitest = require('./apitest')
const faker = require('faker')
const bodyParser= require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({extends: false}))
app.use(bodyParser.json())
app.use('/apitest', apitest)


//GET MAIN

app.get('/', function (req, res) {
  res.json({
    message: 'article'
  })
})

//GET



app.get(`/articles`, (req,res) =>{
    res.json({
      data: [
        { id: '6ec0bd7f-11c0-43da-975e-2a8ad9ebae0b',
        title: 'My article',
        content: 'Content of the article.',
        date: '04/10/2022',
        author: 'Liz Gringer'
        }
      ]
    })
  }
  )


  app.get(`/articles/comments`, (req,res) =>{
    res.json({
      data: [
        { id: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
        timestamp: 1664835049,
        content: 'Content of the comment.',
        articleId: '6ec0bd7f-11c0-43da-975e-2a8ad9ebae0b',
        author: 'Bob McLaren'
        }
      ]
    })
  }
  )


app.listen(4000)