export function getRandomThrow(someNum) {
    if (someNum < .32) {
        return 'rock';
    } else if (someNum > .65) {
        return 'scissors';
    } else {
        return 'paper';
    }
}       

export function doesUserWin(user, comp) {
    if (user === comp) return 'draw';
    
    if (user === 'rock' && comp === 'scissors') return 'win';
    
    if (user === 'rock' && comp === 'paper') return 'lose';
    
    if (user === 'paper' && comp === 'scissors') return 'lose';
    
    if (user === 'paper' && comp === 'rock') return 'win';
    
    if (user === 'scissors' && comp === 'paper') return 'win';
    
    if (user === 'scissors' && comp === 'rock') return 'lose';

}

// export function doesUserWin(user, comp) {
    

// }   