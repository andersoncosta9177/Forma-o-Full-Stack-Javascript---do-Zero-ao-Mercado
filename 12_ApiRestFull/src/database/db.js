const mongoose = require("mongoose")

function connect(){
    mongoose.connect('mongodb://localhost:27017/api_restFull?directConnection=true')
    const db = mongoose.connection

    db.once("open", ()=>{
        console.log("conectou ao banco!")
    })

    db.on("'error", console.error.bind(console, 'Conection error'))

}

module.exports = {
    connect
}