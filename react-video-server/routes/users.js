var express = require('express');
var router = express.Router();
const mariadb = require('mariadb');



/* GET users listing. */
router.get('/', function(req, res, next) {
    mariadb.createConnection({host: '127.0.0.1',database: 'netflix_db' , user: 'root', password: 'root'})
        .then(conn => {
            conn.query("select * from client", [2])
                .then(rows => {
                       res.json(rows);
                     // [{ "1": 1 }]
                    conn.end();
                })
                .catch(err => {
                    res.json(

                            err

                    )
                });
        })
        .catch(err => {
            //handle connection error
        });
});

module.exports = router;
