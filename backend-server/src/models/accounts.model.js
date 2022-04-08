let dbconnect = require('../../config/db.config')

class accounts {
    static createManagementAccount(data, result) {
        dbconnect.query('INSERT INTO accounts SET ?', data, (err, res) => {
            console.log(data)
            result(err, data)
        })
    }
}

module.exports = accounts