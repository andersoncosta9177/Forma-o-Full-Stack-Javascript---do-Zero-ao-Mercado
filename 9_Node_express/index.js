const express = require('express')
const app = express()
const port = process.env.PORT || 1337
const path = require('path')
const fs = require('fs')

app.use(express.urlencoded({
    extends: true
}))
app.set('view engine', 'ejs')
app.use(express.json())
//mvc  -  model view controler
// app.use(express.static(path.join(__dirname, 'views')))

app.use(express.static(path.join(__dirname, 'public')))



// ROTAS
app.get('/', (req, res) => {
    res.render('index', {
        title: 'Digital tech home'
    })
})


app.get("/cadastro-posts", (req, res) => {
   const {c} = req.query
    // console.log(req.query)
    res.render('cadastro', {
        title: "Digital tech -  Cadastros",
        cadastrado: c
    })
})


app.post("/salvar-post", (req, res) => {
    const { titulo, texto } = req.body

    const data = fs.readFileSync('./store/posts.json')
    const posts = JSON.parse(data)


    posts.push({
        titulo,
        texto
    })

    const postString = JSON.stringify(posts)

    fs.writeFileSync('./store/posts.json', postString)
res.redirect('/cadastro-posts?c=1')

})



app.get('/posts', (req, res) => {
    res.render('posts', {
        title: 'Posts',
        posts: [
            {
                title: 'Tecnologias de 2022',
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem amet doloremque fugit, id ratione dolorem quibusdam omnis a, alias laborum nesciunt quasi ducimus qui vel. In maiores accusamus nam blanditiis.',
                star: 4
            },
            {
                title: 'Os melhores salarios de TI',
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem amet doloremque fugit, id ratione dolorem quibusdam omnis a, alias laborum nesciunt quasi ducimus qui vel. In maiores accusamus nam blanditiis.',
                star: 5
            },

            {
                title: 'As maiores invençoes',
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem amet doloremque fugit, id ratione dolorem quibusdam omnis a, alias laborum nesciunt quasi ducimus qui vel. In maiores accusamus nam blanditiis.',
                star: 2
            },
        ]

    })
})





//404 error (not found)
app.use((req, res) => {
    res.send("pagina não encontrada")
})




app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})