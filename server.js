const express = require('express')

const server = express()

const port = 3000

const userController = require('./Controller/Usercontroller')

const user = userController.userController;
const interest1 = userController.interest1Controller; 
const interest2 = userController.interest2Controller;
const interest3 = userController.interest3Controller; 
const interest4 = userController.interest4Controller; 
const match1 = userController.match1Controller; 
const match2 = userController.match2Controller;
const match3 = userController.match3Controller; 
const match4 = userController.match4Controller; 

const isAuthorized = require ('./Middleware/ensureToken')

const loginController = require ('./Controller/loginController');
const ensureToken = require('./Middleware/ensureToken');
const protectedController = require ('./Controller/protectedController');

server.post ('/login',loginController)


server.get('/user',ensureToken, protectedController)
server.get('/andersAndInterests',interest1)
server.get('/mickeyMouseInterests',interest2)
server.get('/andersineAndInterests',interest3)
server.get('/minnieMouseInterests',interest4)
server.get('/andersAndMatch',match1)
server.get('/mickeyMouseMatch',match2)
server.get('/andersineAndMatch',match3)
server.get('/minnieMouseMatch',match4)

server.get('/secret',isAuthorized,(req, res)=> {
    res.json ({"Message":"Super Secret Message"});
})

server.get('/readme',(req, res)=> {
    res.json ({"Message":"Hello world"});
})




//If you want to delete Anders Ands interests
server.delete('/andersAndInterests',interest1)


server.listen(port,()=>{

    console.log(`Server-applikation lytter på http://localhost:${port}`)
})