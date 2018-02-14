const express = require('express')
router = express.Router();
const usersController = require('./controllers/usersController')

router.route('signup')
    .post(usersController.signup)

// router.route()

module.exports = router