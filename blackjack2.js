function Card (suit, number) {
var suit = suit; 
var number = number; 
this.getSuit = function() { return suit; };
this.getNumber = function() { return number; };
this.getValue = function() { 
    if (number >=11 && number <= 13){
        return 10 ;}
    else if (number == 1){
            return 11;}
    else {return number;}
};// Make your card constructor again here, but make sure to use private
};// variables!



// Make a deal function here.  It should return a new card with a suit
// that is a random number from 1 to 4, and a number that is a random
// number between 1 and 13
function deal(){
    var suit = Math.floor(Math.random()*4+1);
    var number = Math.floor(Math.random()*13+1);
    return new Card(suit,number);
};
function Hand(){
    this.card1 = deal();
    this.card2 = deal();
    this.score = function(){
        return this.card1.getValue() + this.card2.getValue();}
};

// examples of the deal function in action
var card1 = deal();
var card2 = deal();

var myHand = new Hand(); 
var yourHand = new Hand();

console.log("I scored a "+myHand.score()+" and you scored a "+ yourHand.score());

if(yourHand.score() > myHand.score()) 
console.log("you win!"); 
else if(yourHand.score() < myHand.score()) console.log("I win!"); 
else console.log("We tied!");