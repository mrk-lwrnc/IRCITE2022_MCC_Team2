const accountsModel = require('../models/accounts.model')

exports.createManagementAccount = (req, res) => {
    accountsModel.createManagementAccount(req.body, (err, status) => {
        if (err) {
            res.status(403)
        } else {
            res.status(200).json({
                account: status
            })
        }
    })
}