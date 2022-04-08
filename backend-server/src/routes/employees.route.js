const express = require('express')
const router = express.Router()
const employeesController = require('../controllers/employees.controller')

router.get('/:id', employeesController.getEmployeeById)
router.get('/', employeesController.getAllEmployees)
router.delete('/:id', employeesController.deleteEmployeeById)
router.put('/:id', employeesController.updateEmployeeById)
router.post('/', employeesController.createEmployee)

module.exports = router