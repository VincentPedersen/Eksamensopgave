//Classes of models used for the Users (important for the Hardcode)

class User {
    constructor (username,password,gender,nationality,location,prefferedSex,interests,match,image){
        this.username = username; 
        this.password = password; 
        this.gender = gender; 
        this.nationality = nationality; 
        this.location = location; 
        this. prefferedSex = prefferedSex; 
        this.interests = interests; 
        this.match = match;
        this.image = image; 
    }
}

class PaymentUser extends User {
    constructor (username,password,gender,nationality,location,prefferedSex,CreditCard,interests,match,image){
    super(username,password,gender,nationality,location,prefferedSex,interests,match,image);
    this.CreditCard = CreditCard; 
    }
}

class FreeUser extends User {
    constructor (username,password,gender,nationality,location,prefferedSex,interests,match,image){
        super(username,password,gender,nationality,location,prefferedSex,interests,match,image);
    }

    //Could include some function that limits the amount of likes/matches
    like_limit(likes){
        
        

    }

}


   
//Conjoins the two users in an array
var Array = [PaymentUser,FreeUser];



//Allows the array to be found in the other files 

module.exports = Array; 
 