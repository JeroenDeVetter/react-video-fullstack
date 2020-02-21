var express = require('express');
var router = express.Router();
const mariadb = require('mariadb');
const cors = require('cors');
const app = express();
const hashPass = require('password-hash');

var corsOptions = {
    origin: 'http://localhost:3000/',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors(corsOptions));
/* GET users listing. */
router.get('/',function (req,res,next) {
   console.log('hallo')
});

router.post('/',function(req, res, next){
    console.log(req.body);
    if ( req.body.email === ''|| req.body.password === '' || req.body.passwordTwo === '' || req.body.password !== req.body.passwordTwo) {
        res.setHeader('Content-Type', 'application/json');

        res.send('no valid');
    }else {
        mariadb.createConnection({host: '127.0.0.1',database: 'netflix_db' , user: 'root', password: 'root'})
            .then(conn => {
               if (req.body.password === req.body.passwordTwo) {
                   res.setHeader('Content-Type', 'application/json');
                   conn.query(`INSERT INTO client(client_email, client_password, client_firstName, client_lastName) VALUES('${req.body.email}', '${hashPass.generate(req.body.password)}', '${req.body.firstname}', '${req.body.lastname}')`, [2]);
                   res.send('Welcome to the movie club');
               }
                conn.end();
            })
            .catch(err => {
                //handle connection error
                console.log(err);
            });
    }
});



module.exports = router;
