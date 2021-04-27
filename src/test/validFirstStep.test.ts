import validFirstStep from '../utils/validFirstStep';

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
