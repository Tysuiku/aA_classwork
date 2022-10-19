/***********************************************************************
Write a function winningHand(hand1, hand2) that takes in two strings
representing a hand of 4 cards. Return the string of the hand with the
higher total score. If there is a tie, return 'DRAW'. Possible cards are
J, Q, K.

J = 1 point
Q = 2 points
K = 3 points

Examples:

winningHand('JQKJ', 'QQJJ'); // => 'JQKJ'
winningHand('KJKJ', 'QQQK'); // => 'QQQK'
winningHand('JKJJ', 'QQJJ'); // => 'DRAW'
winningHand('KJKJ', 'QQQQ'); // => 'DRAW'
***********************************************************************/
function handScore (hand){
    let score = 0;
    let points = {
        J: 1, 
        Q: 2, 
        K: 3 
    };
    for(let i = 0; i < hand.length; i++){
        let char = hand[i];
        if(points[char]){
            score += points[char];
        } 
    }
    return score;
}
//console.log(handScore('JQKJ'));
function winningHand(hand1, hand2) {
   let hand1Score = handScore(hand1);
   let hand2Score = handScore(hand2);
   let hand = '';
   if(hand1Score > hand2Score){
    hand += hand1;
   } else if (hand1Score === hand2Score){
    hand += 'DRAW';
   } else {
    hand += hand2;
   }
   return hand;
}
console.log(winningHand('JQKJ', 'QQJJ')); // => 'JQKJ'
console.log(winningHand('KJKJ', 'QQQK')); // => 'QQQK'
console.log(winningHand('JKJJ', 'QQJJ')); // => 'DRAW'
console.log(winningHand('KJKJ', 'QQQQ')); // => 'DRAW'
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = winningHand;
