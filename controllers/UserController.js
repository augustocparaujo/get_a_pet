const User = require('../models/User')

module.exports = class UserConstroller {
    static async register(req, res){
        res.json('Olá Get A Pet')
    }
}