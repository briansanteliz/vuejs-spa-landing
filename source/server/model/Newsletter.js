const mongoose = require('mongoose')

const emailSchema = mongoose.Schema({
    email: String
})

module.exports = mongoose.model('email', emailSchema)