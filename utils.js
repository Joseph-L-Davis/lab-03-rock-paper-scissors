export function getRandomThrow(someNum) {
    if (someNum < .33) {
        return 'ROCK';
    } else if (someNum > .66) {
        return 'SCISSORS';
    } else {
        return 'PAPER';
    }
}            

// export function doesUserWin(user, comp) {
    

// }   