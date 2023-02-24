const express = require('express')
const cors = require('cors')

const app = express()
const port = 5000

//config json response
app.use(express.json())

//ajudar no requisição de mesmo dominio
app.use(cors({ credentials: true, origin:'http://localhost:3000'}))

//public folder for images
app.use(express.static('public'))

//Routes
const userRoutes = require('./routes/UserRoutes')

app.use('/users', userRoutes)


//start server
app.listen(port, () => console.log(`server ativo na porta ${port}!`))