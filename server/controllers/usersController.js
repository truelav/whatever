const User = require('.../db/models/user')
const bcrypt = require('bcrypt')

module.exports = {
    signup: (req, res) => {
        User.query({where: {username: req.body.user}})
            .then()
    }
}