const users = require ('../HardCode/HardCode.Users')
var jwt = require ('jsonwebtoken')
const fs = require ('fs')



function loginController (req,res) {
    var user = users; 
    let privateKey = fs.readFileSync('./private.pem','utf8');
    let token = jwt.sign({user},privateKey, {algorithm: 'HS256'});
    res.json({
        token: token
    })
}

module.exports = loginController