const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const http = require('http') 

const routes = require('./routes')
const { setupWebsocket } = require('./websocket')

const app = express()
const server = http.Server(app)

setupWebsocket(server)

mongoose.connect('mongodb+srv://roberlan:bd_roberlan@cluster0-mkbxu.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

app.use(cors()) 
app.use(express.json())//Vem antes das rotas (routes)
app.use(routes)

server.listen(3333)
