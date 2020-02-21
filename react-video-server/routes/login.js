var express = require('express');
var router = express.Router();
const mariadb = require('mariadb');
const cors = require('cors');
const hash = require('password-hash');
const app = express();

var corsOptions = {
    origin: 'http://localhost:3001/',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors(corsOptions));
/* GET users listing. */
router.get('/',function (req,res,next) {
    console.log('hallo')
});

router.post('/',function(req, res, next) {
    mariadb.createConnection({host: '127.0.0.1', database: 'netflix_db', user: 'root', password: 'root'})
        .then(conn => {
            console.log(typeof req.body.email);
            conn.query(`SELECT client_email, client_password, client_firstName, client_lastName FROM client where client_email = '${req.body.email}' `, [2])
                .then((rows) => {
                    res.setHeader('Content-Type', 'application/json');
                    if (hash.verify(req.body.password, rows[0]['client_password'])) {
                        res.json([{
                            email: rows[0]['client_email'],
                            firstName: rows[0]['client_firstName'],
                            lastName: rows[0]['client_lastName'],
                            status: true}
                            ]);
                    }else {
                        res.json([{
                            user : 'not correct',
                            status: 'false'
                        }]);
                    }
                }).then(() => {
                conn.end()
            }).catch(err => {
                res.json([{
                    user : 'no user is found with this email address',
                    status : 'noFound'
                }])
            })
        })
});
module.exports = router;