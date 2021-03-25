export function getRandomThrow(someNum) {
    if (someNum < .33) {
        return 'rock';
    } else if (someNum > .66) {
        return 'scissors';
    } else {
        return 'paper';
    }
}            

// export function doesUserWin(user, comp) {
    

// }   