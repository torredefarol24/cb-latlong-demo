var mysql_dbinfo = require('./source/keys/mysql_connection_vals')

module.exports = {
    "type": "mysql",
    "host": mysql_dbinfo.DB_HOST,
    "port": mysql_dbinfo.DB_PORT,
    "username": mysql_dbinfo.DB_USER,
    "password": mysql_dbinfo.DB_PASS,
    "database": mysql_dbinfo.DB_NAME,
    "synchronize": true,
    "logging": false,
    "entities": [
        "build/models_mysql/**/*.js"
    ],
    "migrations": [
        "build/migrations/**/*.js"
    ],
    "subscribers": [
        "build/subscriber/**/*.js"
    ]
}