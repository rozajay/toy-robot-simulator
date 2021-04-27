import validRemainingSteps from '../utils/validRemainingSteps';

describe('Checks that the initial place is set for the robot', () => {
  it.each([
    ['RIGHT', true],
    ['LEFT', true],
    ['MOVE', true],
  ])('Valid input', (inputString, expected) => {
    expect(validRemainingSteps(inputString)).toBe(expected);
  });

  it.each([
    ['UP', false],
    ['DOWN', false],
    ['random text', false],
  ])('Invalid inputs', (inputString, expected) => {
    expect(validRemainingSteps(inputString)).toBe(expected);
  });
});
