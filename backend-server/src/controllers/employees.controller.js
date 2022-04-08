const employees = require('../models/employees.model')

exports.getEmployeeById = (req, res) => {
    employees.getEmployeeById(req.params.id, (err, fetchData) => {
        if (err) {
            res.status(404)
        } else {
            res.status(200).json({
                employee: fetchData
            })
        }
    })
}

exports.getAllEmployees = (req, res) => {
    employees.getAllEmployees((err, fetchData) => {
        res.status(200).json({
            employee: fetchData
        })
    })
}

exports.deleteEmployeeById = (req, res) => {
    employees.deleteEmployeeById(req.params.id, (err, __) => {
        if (err) {
            res.status(404)
        } else {
            res.status(200).json({
                status: true
            })
        }
    })
}

exports.updateEmployeeById = (req, res) => {
    employees.updateEmployeeById(req.params.id, req.body, (err, fetchData) => {
        if (err) {
            res.status(404)
        } else {
            res.status(200).json({
                employee: fetchData
            })
        }
    })
}

exports.createEmployee = (req, res) => {
    employees.createEmployee(req.body, (err, fetchData) => {
        if (err) {
            res.status(309).json({
                status: false
            })
        } else {
            res.status(200).json({
                employee: fetchData
            })
        }
    })
}