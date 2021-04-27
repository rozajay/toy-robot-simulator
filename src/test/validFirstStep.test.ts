import { readFileSync } from 'fs';
import path from 'path';
import validFirstStep from '../utils/validFirstStep';

const testData01 = readFileSync(path.resolve(__dirname, './testData/testData02.txt'), 'ascii');
const testData02 = readFileSync(path.resolve(__dirname, './testData/testData02.txt'), 'utf-8');
const testData03 = readFileSync(path.resolve(__dirname, './testData/testData03.txt'), 'utf-8');
const testData04 = readFileSync(path.resolve(__dirname, './testData/testData04.txt'), 'utf-8');
const invalidTestData01 = readFileSync(path.resolve(__dirname, './testData/invalidTestData01.txt'), 'utf-8');
const invalidTestData02 = readFileSync(path.resolve(__dirname, './testData/invalidTestData02.txt'), 'utf-8');

describe('Checks that the initial place is set for the robot', () => {
  it.each([
    ['PLACE 1,2,EAST', true],
    ['PLACE 0,0,NORTH', true],
    ['PLACE 1,2,EAST', true],
    ['place 1,2,east', true],
    ['place 0,0,north', true],
    ['place 1,2,east', true],
  ])('Valid input', (inputString, expected) => {
    expect(validFirstStep(inputString)).toBe(expected);
  });

  it.each([
    ['PLACE 1,2', false],
    ['0,0,NORTH', false],
    ['random text', false],
  ])('Invalid inputs', (inputString, expected) => {
    expect(validFirstStep(inputString)).toBe(expected);
  });
});
