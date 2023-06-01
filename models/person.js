const mongosse = require('mongoose');

//criano o que a ape vai pegar do servidor
const carro = mongosse.model('Person', {
    name: String,
    valor: Number,
    marca: String,
    url: String,
})

module.exports = carro;