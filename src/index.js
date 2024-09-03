const express = require('express')
const app = express()
const port = 3000
const mercado = require('./router/mercado.js')
const fornecedor = require('./router/fornecedor.js')
const produto = require('./router/produto.js')

app.use(express.json())

app.use('/mercado', mercado)

app.use('/fornecedor', fornecedor)

app.use('/produto', produto)

app.listen(port, ()=>{
    console.log(`Porta ${port} ativa`);
})