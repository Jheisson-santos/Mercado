let nextID = 2

const model = (body, id = nextID++)=>{
    if(body.nome !='' && body.nome != undefined){
        return{
            id,
            nome: body.nome
        }
    }
}

module.exports = model