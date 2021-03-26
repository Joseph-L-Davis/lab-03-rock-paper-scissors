// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { getRandomThrow, doesUserWin } from '../utils.js';

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

//  TDD doesUserWin func

test('should return "win" if users throws rock and comp throws scissors', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'win';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = doesUserWin('rock', 'scissors');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('should return "win" if users throws paper and comp throws rock', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'win';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = doesUserWin('rock', 'scissors');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('should return "win" if users throws scissors and comp throws paper', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'win';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = doesUserWin('scissors', 'paper');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('should return "lose" if users throws rock and comp throws paper', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'lose';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = doesUserWin('rock', 'paper');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('should return "lose" if users throws paper and comp throws scissors', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'lose';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = doesUserWin('paper', 'scissors');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('should return "lose" if users throws scissors and comp throws rock', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'lose';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = doesUserWin('scissors', 'rock');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});