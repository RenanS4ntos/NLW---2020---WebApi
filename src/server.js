// importar dependencias
const express = require('express');
const path = require('path');
const pages = require('./pages');

// iniciando o express
const server = express()

// utilizando arquivos estáticos
server.use(express.static('public'))

//config tamplate engine
server.set('views',path.join(__dirname,"views"))
server.set('view engine', 'hbs')

//criar rotas
server.get('/', pages.index)
server.get('/orphanage', pages.orphanage)
server.get('/orphanages', pages.orphanages)
server.get('/create-orphanage', pages.createOrphanage)

//ligar o servidor
server.listen(5500)