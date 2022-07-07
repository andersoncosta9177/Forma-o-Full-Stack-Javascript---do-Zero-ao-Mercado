const express = require('express')
const path = require("path")
const app = express()
const Model = require('./Models/customers')
const routes = require("./routes")
const db = require('./database')

// conexao com o banco
db.connect()



// ====DEFININDO TEMPLATES ENGINE
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

// ====DEFININDO ARQUIVOS PUBLICOS
app.use(express.static(path.join(__dirname, 'public')))

// ===HABILITA SERVER PARA RECEBER DADOS VIA POST (FORMULARIO)===
app.use(express.urlencoded({ extended: true }))


app.use('/', routes)



// ===404 ERROR (NOT FOUND)
app.use((req, res) => {
    res.send("Pagina não encontrada!")
})


// ===EXECUTANDO O SERVIDOR ====
app.listen(1337, () => {
    console.log('servidor executando!')
})