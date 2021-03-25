// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { getRandomThrow } from '../utils.js';

const test = QUnit.test;

test('should return "ROCK" if someNum is less than .33', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'ROCK';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getRandomThrow(.3);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('should return "PAPER" if someNum is less than .33 and more than .66', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'PAPER';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getRandomThrow(.38);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('should return "SCISSORS" if someNum is more than .66', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'SCISSORS';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getRandomThrow(.7);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
