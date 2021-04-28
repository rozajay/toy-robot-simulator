import { clear } from 'console';
import chalk from 'chalk';
import figlet from 'figlet';

import readline from 'readline';
import findFinalPosition from './utils/findFinalPosition';

clear();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Print out the application name
console.log(
  chalk.yellow(
    figlet.textSync('Toy \nRobot \nSimulator', { horizontalLayout: 'full' }),
  ),
);

console.log('Please enter what you would like to do with the Robot.');
console.log("Starting with 'PLACE X,Y,F' where X and Y are the coordinates in numbers. F is the direction your robot is facing (NORTH, SOUTH, EAST, WEST)");
console.log("Valid moves are 'MOVE', 'RIGHT' and 'LEFT'");
console.log('Finally REPORT when you are ready to find out the final location');

const instructions:string[] = [];

rl.on('line', (input) => {
  if (input === 'REPORT') {
    console.log(`All received instructions: [ ${instructions} ]`);
    const finalPosition = findFinalPosition(instructions);
    if (finalPosition) {
      console.log(`${finalPosition.xPos},${finalPosition.yPos},${finalPosition.facingDirection}`);
    } else {
      console.log('Invalid Input, please refer to instructions and reEnter.');
    }
    rl.close();
  } else {
    instructions.push(input);
    console.log(
      chalk.yellow(`Received instructions:[ ${instructions} ]`),
    );
  }
});
