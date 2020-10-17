
//importar dependencia
//const { static } = require('express'); apareceu aqui
const express = require('express');
const path = require('path');
const pages = require('./pages.js');

//iniciar o express
const server = express()

server
//utilizando arquivos estaticos
.use(express.static('public'))

//configurar template engine
.set('views', path.join(__dirname, "views"))
.set('view engine', 'hbs')

//rotas da aplicação
server
.get('/', pages.index)
.get('/orphanage', pages.orphanage)
.get('/orphanages', pages.orphanages)
.get('/create-orphanage', pages.createOrphanage)

//ligar o server 
server.listen(5500)

