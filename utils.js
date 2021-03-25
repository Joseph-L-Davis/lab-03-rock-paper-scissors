export function getRandomThrow() {
    const randomThrow = Math.random();
    if (randomThrow > .33) {
        return 'ROCK';
    } else if (randomThrow < .66) {
        return 'SCISSORS';
    } else {
        return 'PAPER';
    }
}            

export function doesUserWin {

}   