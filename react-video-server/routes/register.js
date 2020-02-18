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
    if ( req.body.Email === ''|| req.body.Password === '' || req.body.PasswordTwo === '' || req.body.Password !== req.body.PasswordTwo) {
        console.log('no valid');
        res.redirect('http://localhost:3000/register')
    }else {
        mariadb.createConnection({host: '127.0.0.1',database: 'netflix_db' , user: 'root', password: 'root'})
            .then(conn => {
                conn.query(`INSERT INTO klant(email, klant_password, profile_image ) VALUES('${req.body.Email}', '${hashPass.generate(req.body.Password)}', '${req.body.profilePic}' )`, [2]);
                        console.log("success");
                        conn.end();
            })
            .catch(err => {
                //handle connection error
                console.log(err);
            });

        res.redirect('http://localhost:3000/login')
    }
});



module.exports = router;
