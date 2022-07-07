const mongoose = require("mongoose")

function connect() {
    mongoose.connect('mongodb://localhost:27017/projeto_crud?directConnection=true')

    const db = mongoose.connection
    db.once('open', () => {
        console.log('Conectou!')
    })

    db.on('error', (console.error.bind(console, 'Erro de conexao')))


} 

module.exports = {
    connect
}