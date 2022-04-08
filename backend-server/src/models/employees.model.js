let dbconnect = require('../../config/db.config')

class employees {

    static getEmployeeById(id, result) {
        dbconnect.query('SELECT * FROM employees WHERE id=?', id, (err, res) => {
            result(err, res)
        })
    }

    static getAllEmployees(result) {
        dbconnect.query('SELECT * FROM employees', (err, res) => {
            result(err, res)
        })
    }

    static deleteEmployeeById(id, result) {
        dbconnect.query('DELETE FROM employees WHERE id=?', id, (err, res) => {
            result(err, res)
        })
    }

    static updateEmployeeById(id, data, result) {
        dbconnect.query('UPDATE employees SET ? WHERE id=?', data, id, (err, res) => {
            result(err, data)
        })
    }

    static createEmployee(data, result) {
        dbconnect.query('INSERT INTO employees SET ?', data, (err, res) => {
            result(err, data)
        })
    }
}

module.exports = employees