const router = require('express').Router()
const CustomersController  = require('../Controllers/customers')
const IndexController = require('../Controllers/index')

//  =======ROTAS=========
router.get('/', IndexController.index)




// registro
router.get("/register",CustomersController.index)



router.post('/register/add', CustomersController.add)

router.get('/list', CustomersController.listUsers)


// EDITAR DADOS
router.get('/edit', CustomersController.indexEdit)
router.post('/edit/:id', CustomersController.edit)
router.get('/remove/:id', CustomersController.remove)

module.exports =  router
