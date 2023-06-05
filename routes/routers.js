const router = require('express').Router()
const carro = require('../models/person');


//create - criação de dados
router.post('/', async (req, res) => {
    
    // pegando os dado da req.body
    const {name, valor, marca, url, ano} = req.body

    

    !name ? res.status(422).json({error: "O nome é obrigatorio"}) : ""
     
    //criando um objeto que vai receber todos os parametros para poder ser enviado ao banco de dados
    const newCar = {
        name, 
        valor,
        marca,
        ano,
        url,
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
    //pegando dados que vei do front-end
    const id = req.params.id; 

    

    console.log(id)
    try {

        // Atualiza o documento no MongoDB
        const result = await carro.deleteOne({ _id: id });

        if (result.deletedCount === 1) {
            res.send('Carro deletado com sucesso');
        } else {
            res.status(404).send('Carro não encontrado');
        }
    } 
    catch (error) {
        console.log(error);
        res.status(500).send('Erro interno do servidor.');
  }
})


//requisiçao put -  editar os dados da api
router.put('/:id', async (req, res) => {

    //pegando dados que vei do front-end
    const id = req.params.id; 

    //pegando os dados que vinheram da requisição
    const dados = req.body; 

    console.log(dados)
    try {

        // Atualiza o documento no MongoDB
        const result = await carro.updateOne({ _id: id }, { $set: dados });

        if (result.modifiedCount === 1) {
            res.send('Carro atualizado com sucesso.');
        } else {
            res.status(404).send('Carro não encontrado.');
        }
    } 
    catch (error) {
        console.log(error);
        res.status(500).send('Erro interno do servidor.');
  }
})

module.exports = router