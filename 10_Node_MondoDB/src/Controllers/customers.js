const CustomerModel = require("../Models/customers")
const { crypto } = require('../Utils/password')


function index(req, res) {
   res.render('register', {
      title: 'Cadastro de cliente'
   })
}
async function add(req, res) {
   const {
      name,
      age,
      email,
      password,
   } = req.body

   const passwordCrypto = await crypto(password)

   const register = new CustomerModel({
      name,
      age,
      email,
      password: passwordCrypto,
   })



   register.save()
   res.redirect('/list')
}


async function listUsers(req, res) {
   const users = await CustomerModel.find()


   res.render("listUsers", {
      title: 'Listagem de usuarios',
      users,
   })
} 


async function indexEdit(req, res) {

   const { id } = req.query

   const user = await CustomerModel.findById(id)
   res.render('edit', {
      title: 'Editar usuario',
      user
   })
}

async function edit(req, res) {
   const {
      name,
      age,
      email,
   } = req.body

   const { id } = req.params
   const user = await CustomerModel.findById(id)
   user.name = name
   user.age = age
   user.email = email

   user.save()

   res.render('edit', {
      title: 'Editar Usuario',
      user,
      message: 'Usuario alterado com sucesso!',
   })
}

async function remove(req,res){
const {id}  = req.params

const remove = await  CustomerModel.deleteOne({_id: id})

   res.redirect('/list')


}


module.exports = {
   add,
   index,
   listUsers,
   indexEdit,
   edit,
   remove,
}