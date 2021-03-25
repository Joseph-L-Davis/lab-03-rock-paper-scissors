// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { getRandomThrow } from '../utils.js';

const test = QUnit.test;

test('should return "rock" if someNum is less than .33', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'rock';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getRandomThrow(.3);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('should return "paper" if someNum is less than .33 and more than .66', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'paper';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getRandomThrow(.38);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('should return "scissors" if someNum is more than .66', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'scissors';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getRandomThrow(.7);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
