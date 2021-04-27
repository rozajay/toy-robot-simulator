import validInput from '../utils/validInput';

describe('Checks that the initial place is set for the robot', () => {
  it.each([
    [['PLACE 1,2,EAST', 'RIGHT'], true],
    [['PLACE 1,2,EAST', 'LEFT'], true],
    [['PLACE 1,2,EAST', 'MOVE'], true],
  ])('Valid input', (inputString, expected) => {
    expect(validInput(inputString)).toBe(expected);
  });

  it.each([
    [['PLACE 1,2,EAST', 'dsg'], false],
    [['PLACE 1,2,EAST', 'ds'], false],
    [['PLACE 1,2,EAST', 'MdsfOVE'], false],
    [['random', 'move'], false],
  ])('Invalid inputs', (inputString, expected) => {
    expect(validInput(inputString)).toBe(expected);
  });
});
