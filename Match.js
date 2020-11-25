const interest = require ('./HardCode/HardCode.Users')


const interest1 = interest.Interest1;
const interest2 = interest.Interest2;
const interest3 = interest.Interest3; 
const interest4 = interest.Interest4; 

var array = [interest1,interest2,interest3,interest4];

var match1 = undefined; 
var match2 = undefined;
var match3 = undefined; 
var match4 = undefined; 
var match5 = undefined; 
var match6 = undefined; 
var match7 = undefined; 
var match8 = undefined; 
var match9 = undefined; 
var match10 = undefined; 
var match11 = undefined; 
var match12 = undefined; 

var array1 = [];
var array2 = [];
var array3 = [];
var array4 = [];


//Loop for Anders And og Mickey Mouse

for (i=2;i<array.length; i++){

  
    if (array[0]){

  
    
    if (array[0].hobbies === array[i].hobbies){
        match1 = (array[0].user.username + "  " + "Matches with" + "  " + array[i].user.username);
        array1.push (match1);
    }
    

    
    if (array[0].favoriteSport === array[i].favoriteSport){
        match2 = (array[0].user.username + "  " + "Matches with" + "  " + array[i].user.username);
        array1.push (match2);
    }
    
    

    if (array[0].favoriteFood === array[i].favoriteFood){
        match3 = (array[0].user.username + "  " + "Matches with" + "  " + array[i].user.username);
        array1.push (match3);
    }
    
    
        }


   





    if (array[1]){
        if (array[1].hobbies === array[i].hobbies){
            match4 = (array[1].user.username + "  " + "Matches with" + "  " + array[i].user.username);
            array2.push(match4);
            }
            
            
        if (array[1].favoriteSport === array[i].favoriteSport){
            match5 = (array[1].user.username + "  " + "Matches with" + "  " + array[i].user.username);
            array2.push(match5);
            }
            
           

            if (array[1].favoriteFood === array[i].favoriteFood){
            match6 = (array[1].user.username + "  " + "Matches with" + "  " + array[i].user.username);
            array2.push(match6); 
            }
            
    }

   
}


//Loop for Andersine And og Minnie Mouse

for (i=0;i<2; i++){

  
    if (array[2]){

  
    
    if (array[2].hobbies === array[i].hobbies){
        match7 = (array[2].user.username + "  " + "Matches with" + "  " + array[i].user.username);
        array3.push (match7);
    }
    

    
    if (array[2].favoriteSport === array[i].favoriteSport){
        match8 = (array[2].user.username + "  " + "Matches with" + "  " + array[i].user.username);
        array3.push (match8);
    }
    
    

    if (array[2].favoriteFood === array[i].favoriteFood){
        match9 = (array[2].user.username + "  " + "Matches with" + "  " + array[i].user.username);
        array3.push (match9);
    }
    
    
        }


   





    if (array[3]){
        if (array[3].hobbies === array[i].hobbies){
            match10 = (array[3].user.username + "  " + "Matches with" + "  " + array[i].user.username);
            array4.push(match10);
            }
            
            
        if (array[3].favoriteSport === array[i].favoriteSport){
            match11 = (array[3].user.username + "  " + "Matches with" + "  " + array[i].user.username);
            array4.push(match11);
            }
            
           

            if (array[3].favoriteFood === array[i].favoriteFood){
            match12 = (array[3].user.username + "  " + "Matches with" + "  " + array[i].user.username);
            array4.push(match12); 
            }
            
    }

   
}



exports.array1 = array1;
exports.array2 = array2;
exports.array3 = array3; 
exports.array4 = array4; 




