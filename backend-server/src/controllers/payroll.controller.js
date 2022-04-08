const payrollModel = require('../models/payroll.model')

var date = new Date()
var punchTime = date.toLocaleTimeString()
var punchDate = date.toLocaleDateString()
var punch = punchTime.concat('&', punchDate)

exports.timeIn = (req, res) => {
    payrollModel.timeIn(req.params.id, punch, (err, result) => {
        if (err) {
            res.status(404).send(result)
        } else {
            res.status(200).send(result)
        }
    })
}

exports.timeout = (req, res) => {
    payrollModel.timeout(req.params.id, punch, (err, result) => {
        if (err) {
            res.status(404)
        } else {
            res.status(200).send(result)
        }
    })
}