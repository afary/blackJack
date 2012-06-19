// Card Constructor
function Card(param1, param2){
    var suit = param1;
    var number = param2;
    this.getNumber = function (){
        return number;
    };
    this.getSuit = function (){
        return suit;
    };
    this.getValue = function (){
         if (param2 > 10) {
            return 10;
        } else if (param2 < 2) {
            return 11;
        } else {
            return number;
        }
    };
}
function deal() {
var n = Math.floor(Math.random()*4+1);
var m = Math.floor(Math.random()*13+1);
var card = new Card(n,m);
return card;
}

function Hand(){
    var myHand = [deal(), deal()];
    this.getHand = function(){
        return myHand;
    };
    this.score = function(){
        var acesNum = 0;
        var sum =0;
        for (i=0; i< myHand.length; i++){
            if (myHand[i].getValue() === 11){
                acesNum+=1;
                
            }
            sum += myHand[i].getValue();
        }
        while (sum > 21 && acesNum > 0){
        sum -= 10;
        acesNum--;
    }
       return sum;
    };
    this.printHand = function(){
        var string = "";
        for (i=0; i<myHand.length; i++){
            string = string + myHand[i].getNumber() + " of suit "+myHand[i].getSuit() +"\n";
            }
            return string;
    };
    this.hitMe = function(){
        var newCard = deal();
        myHand.push(newCard);
    };
}
function playAsDealer(){
    var dealerHand = new Hand();
    while (dealerHand.score < 17){
        dealerHand.hitMe();
    }
    return dealerHand;
}
function playAsUser(){
    var userHand = new Hand();
    var decision = confirm("Your hand is "+ userHand.printHand() + ": Hit OK to hit (take another card) or Cancel to stand");
    while (decision){
        userHand.hitMe();
        decision = confirm("Your hand is "+ userHand.printHand() + ": Hit OK to hit (take another card) or Cancel to stand");
        
    }
    return userHand;
}
function declareWinner(userHand, dealerHand){
   
     if(userHand.score()>21 && dealerHand.score()>21) {
         return "You tied!";
         }
        else if(userHand.score()>21){
            return "You lose!";}
        else if(dealerHand.score()>21){
            return "You win!";}
        else if(userHand.score()>dealerHand.score()){
            return "You win!";}
        else if(userHand.score()<dealerHand.score()){
            return "You lose!";}
        else if(userHand.score()===dealerHand.score()){
            return "You tied!";}
}
function playGame(){
    var userHand = playAsUser();
    var dealerHand = playAsDealer();
    var winMessage = declareWinner(userHand, dealerHand);
    console.log("Dealer has "+dealerHand.printHand());
    console.log("User has "+userHand.printHand());
    console.log(winMessage);
}
playGame();