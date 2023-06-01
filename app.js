const express = require('express');
const mongosse = require('mongoose');
const app = express();

const router = require('./routes/routers')
const PORT = process.env.PORT | 8080
const cors = require('cors');

app.use(cors());


// fazendo o node ler json / milderels
app.use(
    express.urlencoded({
        extended: true,
    })
)
app.use(express.json())


//criando a rotas dos servidor

app.get("/", async (req,res) => {
    
    res.json({message: "oi express"})
})

app.use('/person', router)

//conectando o servidor ao mongose
mongosse.connect('mongodb+srv://alexlopes:orquideas1809@cluid1.ekh4puk.mongodb.net/?retryWrites=true&w=majority')
.then(() => {
    console.log("mongodb conectado")

    //iniciando o servidor na porta 8080
    app.listen(PORT, () => {
        console.log("servidor rodando na porta 8080: http://localhost:8080");
    })
})

.catch(() => { console.log("error")})

