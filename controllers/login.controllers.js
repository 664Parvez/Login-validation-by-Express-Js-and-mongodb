const CreateModel = require('../models/login.model')

const getLogin = (req, res) => {
    res.render('login')
}

const postLogin = async (req, res) => {
    
    const email = req.body.email
    const password = req.body.password

    const userData = await CreateModel.findOne({ email : email })

    if (userData.password === password) {
        res.render('home')
    } 
    else {
        res.render("login")
    }
}

module.exports = {getLogin, postLogin}