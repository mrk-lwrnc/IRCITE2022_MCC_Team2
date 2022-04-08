const express = require('express')
const router = express.Router()
const accountsController = require('../controllers/accounts.controller')

router.post('/', accountsController.createManagementAccount)

module.exports = router