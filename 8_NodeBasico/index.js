// const {soma,divisao} = require('./cal.js')

// console.log(soma(3,5))
// console.log(divisao(18,4))

// const fs = require('fs')


// fs.readFileSync('./clientes.json', function (err, content) {
//     if(err) {
//         console.log(err)
//     }else{
//         console.log(JSON.parse(content))
//     }
// })


const fs = require('fs')
const http = require('http')

const server = http.createServer(function (req, res) {
    if (req.url === "/") {
        fs.readFile('./client/index.html', function (error, content) {
            res.end(content)
        })
    }

    if(req.url === '/teste'){
        res.end('ok funcionou')
    }

})


server.listen(1337, () => {
    console.log("okk")
})