
//imports the hardcoded users
const hardCode = require ('../HardCode/HardCode.Users')
const array = hardCode.Array;
const interest1 = hardCode.Interest1;
const interest2 = hardCode.Interest2;
const interest3 = hardCode.Interest3; 
const interest4 = hardCode.Interest4; 

const match = require ('../Match')
const match1 = match.array1;
const match2 = match.array2;
const match3 = match.array3; 
const match4 = match.array4; 


//makes the hardcoded users to json files
function userController(req,res){
    
    res.json(array)
    
}

function interest1Controller(req,res){
    res.json(interest1)
}

function interest2Controller(req,res){
    res.json(interest2)
}

function interest3Controller (req,res){
    res.json(interest3)
}
function interest4Controller (req,res){
    res.json(interest4)
}
function match1Controller (req,res){
    res.json(match1)
}
function match2Controller(req,res){
    res.json(match2)
}
function match3Controller(req,res){
    res.json(match3)
}
function match4Controller(req,res){
    res.json(match4)
}

//exports the json files
exports.userController = userController;
exports.interest1Controller = interest1Controller;
exports.interest2Controller = interest2Controller; 
exports.interest3Controller = interest3Controller; 
exports.interest4Controller = interest4Controller; 
exports.match1Controller = match1Controller; 
exports.match2Controller = match2Controller;
exports.match3Controller = match3Controller;
exports.match4Controller = match4Controller;