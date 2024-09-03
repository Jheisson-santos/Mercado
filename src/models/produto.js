let nextID = 2

const fornecedor = require('../controllers/fornecedor.js')
const mercado = require('../controllers/mercado.js')
const model = (body, id = nextID++)=>{
    if(body.nome !='' && body.nome != undefined &&
    fornecedor.show(body.fornecedor_id) && mercado.show(body.mercado_id)
&& body.quantidade > 0 && !isNaN(Number(body.quantidade))){
        return{
            id,
            nome: body.nome,
            quantidade: body.quantidade,
            fornecedor_id: body.fornecedor_id,
            mercado_id: body.mercado_id
        }
    }
}

module.exports = model