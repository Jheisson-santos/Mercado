const express = require('express')
const router = express.Router()
const fornecedor = require('../controllers/fornecedor.js')
const up = require('../middlewares/toUpCase.js')


router.get('/', (req, res)=>{
    res.json(fornecedor.index())
})

router.get('/:id', (req,res)=>{
    res.json(fornecedor.show(req.params.id))
})
router.post('/', up,(req, res)=>{
    const code = fornecedor.store(req.body)
    res.status(code).json()
})

router.put('/:id', up,(req,res)=>{
    const code = fornecedor.update(req.body, req.params.id)
    res.status(code).json()
})

router.delete('/:id', (req, res)=>{
    const code = fornecedor.destroy(req.params.id)
    res.status(code).json()
})

module.exports = router