const express = require("express")
const cors = require("cors")
const db = require("./database/db")
const routes = require("./routes/routes")


const app = express()


db.connect()

const allowedOrigins = [
    'http://127.0.0.1:2337',
    'http://127.0.0.1:2030',
    'http://127.0.0.1:4337',
]

// app.use(cors({
//     origin: function (origin, callback) {
//         let allowed = true

//         if (!origin) allowed = true
//         if (!allowedOrigins.includes(origin)) allowed = false

//         callback(null, allowed)
//     }
// }))


// habilita cors 
app.use(cors())


app.use(express.json())


// rotas 
app.use('/api', routes)



app.listen(1337, () => {
    console.log('Servidor ok')
})