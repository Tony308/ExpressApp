const mysql = require('mysql')

const dbConn = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB
})  

const searchByTitle = () => {   
    return new Promise((resolve, reject) => {   
        dbConn.query(`SELECT * FROM books WHERE id = 1`, (err, rows, fields) => {
            if (err) {
                reject(err)
                throw err
            }
            resolve(rows)
        });
    })
}

module.exports = {
    searchByTitle
}