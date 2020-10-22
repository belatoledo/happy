
//importar dependencia
//const { static } = require('express'); apareceu aqui
const express = require('express');
const path = require('path');
const pages = require('./pages.js');

//iniciar o express
const server = express()

//utilizar body do req
.use(express.urlencoded({ extended:true}))

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
.post('/save-orphanage', pages.saveOrphanage)

//ligar o server 
server.listen(5500, () => {
    console.log("Server started");
  });

