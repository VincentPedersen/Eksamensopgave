//imports the model for users
const User = require('../Model/Users')
//imports the model for interests
const Interest = require('../Model/Interest')

//imports images 
//const image_donald_duck = require ('/Users/vincentpedersen/Desktop/Programmering/Godkendelsesopgave 3/image/donald_duck.jpg') 

//makes a constant of each of the values in the imported array
const PaymentUser = User[0]
const FreeUser = User[1]


//hardcoding the users
let User1 = new FreeUser ("Anders And","Potato","male","American","Disney Land","female","/andersAndInterests","/andersAndMatch","/Users/vincentpedersen/Desktop/Programmering/Godkendelsesopgave 3/image/donald_duck.jpg");

let User2 = new PaymentUser ("Mickey Mouse","Pineapple","male","American","Disney Land","female","disney land card", "/mickeyMouseInterests","/mickeyMouseMatch","/Users/vincentpedersen/Desktop/Programmering/Godkendelsesopgave 3/image/mickey-mouse.jpg");

let User3 = new FreeUser ("Andersine And","Bla bla","Female","American","Disney Land","Male","/andersineAndInterests","/andersineAndMatch","/Users/vincentpedersen/Desktop/Programmering/Godkendelsesopgave 3/image/daisy_duck.jpg");

let User4 = new PaymentUser ("Minnie Mouse","Bla bla","Female","American","Disney Land","Male","Disney Land Card", "/MinnieMouseInterests","/minnieMouseMatch","/Users/vincentpedersen/Desktop/Programmering/Godkendelsesopgave 3/image/minnie_mouse.jpg");

 let Interest1 = new Interest(User1,"Dancing","Football","Taco","/user");
 let Interest2 = new Interest(User2,"Singing","Golf","Pizza","/user");

 let Interest3 = new Interest(User3,"Dancing","Curling","Pasta","/user");
 let Interest4 = new Interest(User4,"Knitting","Golf","Taco","/user");


var Array = [User1,User2,User3,User4];


//exports the array with the two hardcoded users
exports.Array = Array;
exports.Interest1 = Interest1; 
exports.Interest2 = Interest2;
exports.Interest3 = Interest3; 
exports.Interest4 = Interest4; 
