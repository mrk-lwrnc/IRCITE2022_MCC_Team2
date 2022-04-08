const express = require('express')
const router = express.Router()
const employeesController = require('../controllers/employees.controller')
const payrollController = require('../controllers/payroll.controller')

// Payroll
// router.post('/:id/timein/', payrollController.timeIn)
// router.post('/:id/timeout', payrollController.timeout)

// Employees
router.get('/:id', employeesController.getEmployeeById)
router.get('/', employeesController.getAllEmployees)
router.delete('/:id', employeesController.deleteEmployeeById)
router.put('/:id', employeesController.updateEmployeeById)
router.post('/', employeesController.createEmployee)

module.exports = router