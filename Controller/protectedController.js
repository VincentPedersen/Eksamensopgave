users = require('../HardCode/HardCode.Users')
var jwt = require('jsonwebtoken');
const fs = require ('fs')


function loginController(req, res) {
    //man kunne også tjekke her om token findes. 
    let privateKey = fs.readFileSync('./private.pem','utf8');
    jwt.verify(req.token,privateKey, function(err, data){
        if(err){
            res.sendStatus(403);
        } else{
            res.json({
                msg: "Det her er top hemmeligt",
                data: data
            })
        }
    }) 
}

module.exports = loginController