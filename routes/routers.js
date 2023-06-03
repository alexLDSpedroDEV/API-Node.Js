const router = require('express').Router()
const carro = require('../models/person');


//create - criação de dados
router.post('/', async (req, res) => {
    
    // pegando os dado da req.body
    const {name, valor, marca, url} = req.body

    !name ? res.status(422).json({error: "O nome é obrigatorio"}) : ""
     
    //criando um objeto que vai receber todos os parametros para poder ser enviado ao banco de dados
    const newCar = {
        name, 
        valor,
        marca,
        url
    }

    //usando o metodo created
    try{
        //salvando o dado no banco de dado
        await carro.create(newCar)
        res.status(201).json({message: "pessoa inserido no servidor com sucesso"})


    } catch (error) {
        res.status(500).json({error: error})
    }
})


// Read - ler todos os dados do banco de dado
router.get('/', async (req, res) => {
    try{
        //find - buscando os dados
        const peaple = await carro.find();

        res.status(200).json(peaple)

    } catch (error) {
        res.status(500).json({error: error})
    }
})


router.get('/:id', async (req,res) => {
    //extrair os dados da requisição
    const id = req.params.id

    try{
        const newCar = await carro.findOne({name: id})
        res.status(200).json(newCar)
        console.log(id)

    } catch (error) {
        res.status(500).json({error: error})
    }
})


router.delete('/:id', async (req, res) => {
    const id = req.params.id

    const newCar = await carro.findOne({_id: id})
    
    if (!newCar) {
        res.status(422).json({message: "pessoa Não encontrada em nosso servidores"});
        return
    }

    try{
        await carro.deleteOne({_id: id})
        res.status(200).json({message: "Usúario removido com sucesso"})

    } catch (error) {
        res.status(500).json({error: error})
    }
})

module.exports = router