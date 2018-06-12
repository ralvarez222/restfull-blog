const express = require('express') 
const logger = require('morgan')
const errorhandler = require('errorhandler')
const bodyParser = require('body-parser')
const routes = require("./routes")

let store = {
    posts: [
      {name: 'Top 10 ES6 Features every Web Developer must know',
      url: 'https://webapplog.com/es6',
      text: 'This essay will give you a quick introduction to ES6. If you don’t know what is ES6, it’s a new JavaScript implementation.',
      comments: [
        {
        text: 'Cruel…..var { house, mouse} = No type optimization at all',
        text: 'I think you’re undervaluing the benefit of ‘let’ and ‘const’.',
        text: '(p1,p2)=>{ … } ,i understand this ,thank you !'
        }      
      ]
      }
    ]
  }

let app = express()

app.use(bodyParser.json())
app.use(logger('dev'))
app.use(errorhandler())

//esta técnica se llama "decoration". Implica crearle una propiedad al objeto req
//a fin de de tener que pasar otra información en las rutas, distintas a los objetos
//req y res
app.use((req, res, next) => {
    req.store = store
    next()
})

app.get('/posts', routes.posts.getPosts)
app.post('/posts', routes.posts.addPost)
app.put('/posts/:postId', routes.posts.updatePost)
app.delete('/post/:postid', routes.posts.removePost)

app.get('/posts/:postId/comments', routes.comments.getComments)
app.post('/posts/:postId/comments', routes.comments.addComment)
app.put('/posts/:postId/comments/:commentId', routes.comments.updateComment)
app.delete('/post/:postid/comments/:commentId', routes.comments.removeComment)

app.listen(3000)