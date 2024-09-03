const express = require('express')
const router = express.Router()
const produto = require('../controllers/produto.js')
const up = require('../middlewares/toUpCase.js')


router.get('/', (req, res)=>{
    res.json(produto.index())
})

router.get('/:id', (req,res)=>{
    res.json(produto.show(req.params.id))
})
router.post('/',up, (req, res)=>{
    const code = produto.store(req.body)
    res.status(code).json()
})

router.put('/:id',up, (req,res)=>{
    const code = produto.update(req.body, req.params.id)
    res.status(code).json()
})

router.delete('/:id', (req, res)=>{
    const code = produto.destroy(req.params.id)
    res.status(code).json()
})

module.exports = router