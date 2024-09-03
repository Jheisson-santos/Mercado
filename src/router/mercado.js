const express = require('express')
const router = express.Router()
const mercado = require('../controllers/mercado.js')
const cep = require('../middlewares/cep_enderco.js')
const up = require('../middlewares/toUpCase.js')


router.get('/', (req, res)=>{
    res.json(mercado.index())
})

router.get('/:id', (req,res)=>{
    res.json(mercado.show(req.params.id))
})
router.post('/',cep, up ,(req, res)=>{
    const code = mercado.store(req.body)
    res.status(code).json()
})

router.put('/:id',cep,up, (req,res)=>{
    const code = mercado.update(req.body, req.params.id)
    res.status(code).json()
})

router.delete('/:id', (req, res)=>{
    const code = mercado.destroy(req.params.id)
    res.status(code).json()
})

module.exports = router