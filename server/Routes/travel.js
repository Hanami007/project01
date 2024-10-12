const express = require('express')
const router = express.Router()

const {
    list,
    create,
} = require('../Controllers/product')



//http://localhost:3000/api/product
router.get('/travel', list)
router.post('/travel', create)





module.exports = router