const up = (req, res, next)=>{
    if(req.body.nome != '' && req.body.nome != undefined){
        req.body.nome = req.body.nome.toUpperCase()
        next()
    }
  
}
module.exports = up