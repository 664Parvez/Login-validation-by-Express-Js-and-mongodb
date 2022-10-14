const router = require('express').Router()
const { getLogin, postLogin } = require('../controllers/login.controllers')


router.get('/login', getLogin)
router.post('/login', postLogin)


module.exports = router