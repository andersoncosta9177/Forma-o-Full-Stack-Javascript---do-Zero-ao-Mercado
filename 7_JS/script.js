// const clientes = [
//     {name: 'Miguel', lastname: 'costa'},
//     {name: 'Andreson', lastname: 'costa'},
//     {name: 'Maria', lastname: 'cruz'},
//     {name: 'Vanda', lastname: 'ancheski'},
//     {name: 'Bruno', lastname: 'silva'},

const { JSON } = require("sequelize/types")

// ]
// let clientesFinal = []

// clientes.forEach(function(cliente){
//     clientesFinal.push(cliente.name + ' ' + cliente.lastname)
// })

// console.log(clientesFinal)


// const clientesFinal = clientes.map( (cliente)=>{
//     return cliente.name +  ' ' + cliente.lastname
// })

// console.log(clientesFinal)

// const clientesMaior =  clientes.filter( (cliente)=>{
//     return cliente.age >= 45 && cliente.name == 'Bruno'
// })
//   console.log(clientesMaior)


// const clientes = [
//     {name: 'Miguel', lastname: 'costa', score: 58},
//     {name: 'Andreson', lastname: 'costa', score: 23},
//     {name: 'Maria', lastname: 'cruz', score: 90},
//     {name: 'Vanda', lastname: 'ancheski', score: 09},
//     {name: 'Bruno', lastname: 'silva', score: 78},
// ]

// const clientesFinal = clientes.reduce(( acumulador, current)=>{
//   if(current.score > 50){
//     acumulador.pass.push(current)
//   }else{
//     acumulador.fail.push(current)
//   }

//   return acumulador
// },{
//     pass: [],
//     fail: []
// })


// console.log(clientesFinal)


localStorage.setItem('TAREFA','ESTUDAR JAVA')
