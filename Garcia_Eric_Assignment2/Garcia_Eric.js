//alert("JavaScript works!");

//Eric Garcia
//SDI 1303
//Project 2
//Arrays, Numbers, Strings

//Variable
var myName = "Eric";
var baits = ["super fluke", "spinerbait", "soft bait"];
var timeToFish = 30;
var temp = 70;

//Procedure function
var prepareToFish = function (name){
    console.log ("My name is " + name + ", and I like to fish.");
    if (timeToFish > 45) {
        console.log ("If I have a lot of time, I'll grab my boat and take it out to the lake.");
    } else {
        console.log ("If I don't have much time, I'll just grab my pole and head to a local lake.")
    }
};
//Boolean function
var whereToStart = function (log, foliage, shade){
    if ((log && foliage) || shade){
        return true
    } else {
        return false
    }
};
//Number function
var getNumOfCasts = function (numberOfCasts){
        while (numberOfCasts > 0) {
        numberOfCasts--;
        if (numberOfCasts > 0) {
            console.log ('Let\'s try another cast')
        } else {
            console.log ("It's probably a good time to change it up")
        } //if / else
    }//while
    return numberOfCasts
};
//String Function
var whatNext = function (lure, location){
    var choice = ("I can either " + lure + " or " + location)
    return choice
};
//Array function
var nextLure = function(casts, bait){
    console.log ("I don't have much time left so I'm going to try few different lures " 
        + casts + " times each");
    for (var i=0, lures=bait.length; i > lures; i++){
        console.log ( bait[i] ) //I'm not sure why this one wont console out?
        //can you please explain?
    }
};

//Procedure
prepareToFish(myName);
console.log ("Once I get to the lake I'll asses where would be best to start fishing");

//Boolean
var startFishing = whereToStart (true, true, false);
if (startFishing === true){
    console.log ("I'll start fishing under that foliage")
    } else {
    console.log ("I'll start in deeper waters")
};

//Number
var numberOfCasts = getNumOfCasts(10);
console.log ("I usually cast at least 10 times per lure, so for this one I have " 
    + numberOfCasts + " left, time to try something new");

//String
var next = whatNext("change lure", "change location");
console.log (next);
console.log ("I like this spot a lot so I'm just going to change lures");

//Array
nextLure(5 ,baits);
