// https://github.com/shafin22115/assainment-3

// kilometar To Meter
function kilometerToMeter(kilometar){
    var converter = kilometar * 1000;
    return converter
}
var kilometar = kilometerToMeter(6)
console.log(kilometar)


// budgetCalculator
function budgetCalculator(watch, phone, laptop){
    var totalPrice = (watch*50) + (phone*100) + (laptop*500);
    return totalPrice;
}
var totalprice = budgetCalculator(2,4,5);
console.log(totalprice);

// hotelcost
function hotelCost(number){
    var day = 0;
    if(number <= 10){
        day = 10 * 100;
    }
    else if(number <= 20) {
        var firstPart = 10 * 100;
        var remainingDay = number - 10;
        var secondPart = remainingDay * 80;
         day = firstPart + secondPart;
    }
    else{
        var firstPart = 10 * 100;
        var secondPart = 10 * 80;
        var remainingDay = number - 20;
        var thirdpart = remainingDay * 50;
        day = firstPart + secondPart + thirdpart;
    }
    return day
}
var totalprice = hotelCost(30);
console.log(totalprice);

// mega friend
function megaFriend(friendName){
var largestNameLength = 0;
var largestNameIndexInArray;
for(var i = 0; i < friendName.length; i++){
    if(friendName[i].length > largestNameLength){
        largestNameLength = friendName[i].length;
        largestNameIndexInArray = i;
    }
}
return friendName[largestNameIndexInArray];
}
var FriendsNameArry = ["tamim iqbal","sha fin", "neimar", "aminul rahat", "saimon"]
console.log(megaFriend(FriendsNameArry))