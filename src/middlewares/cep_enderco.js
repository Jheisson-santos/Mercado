const axios = require('axios')

const cep_endereco = (req, res, next)=>{
    req.body.cep = req.body.cep.replaceAll('.','').replaceAll('-', '')
    if(req.body.cep != '' && req.body.cep != undefined && !isNaN(Number(req.body.cep))){
        axios.get(`https://viacep.com.br/ws/${req.body.cep}/json/`).then((resposta)=>{
        
        req.body.endereco = resposta.data
      
        delete req.body.endereco.siafi
        delete req.body.endereco.gia
        delete req.body.endereco.ibge
        delete req.body.endereco.complemento
        delete req.body.endereco.unidade
        delete req.body.cep

        next()
    })
} else {

res.status(400).json()

}}
module.exports = cep_endereco
