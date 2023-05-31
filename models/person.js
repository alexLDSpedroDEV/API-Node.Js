const mongosse = require('mongoose');

//criano o que a ape vai pegar do servidor
const person = mongosse.model('Person', {
    name: String,
    salary: Number,
    appoved: Boolean,
})

module.exports = person;