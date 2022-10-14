const mongoose = require('mongoose')

const createSchema = new mongoose.Schema({
    email : {
        type : String
    },
    password : {
        type : String,
        min : 5
    }
})

const CreateModel = new mongoose.model('login', createSchema)

module.exports = CreateModel