let dbconnect = require('../../config/db.config')

class payroll {
    static timeIn(id, punchTime, result) {
        dbconnect.query('INSERT INTO payroll (employeeID, timeInDate) VALUES (?,?)', [id, punchTime], (err, res) => {
            result(err, res)
        })
    }

    static timeIn(id, punchTime, result) {
        dbconnect.query('INSERT INTO payroll (employeeID, timeOutDate) VALUES (?,?)', [id, punchTime], (err, res) => {
            result(err, res)
        })
    }
}

module.exports = payroll