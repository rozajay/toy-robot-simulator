import findInitialPosition from '../utils/findInitialPosition';

describe('Find the initial position for the robot', () => {
  it.each([
    ['PLACE 1,2,EAST', { facingDirection: 'EAST', xPos: 1, yPos: 2 }],
    ['PLACE 0,0,NORTH', { facingDirection: 'NORTH', xPos: 0, yPos: 0 }],
    ['PLACE 1,2,EAST', { facingDirection: 'EAST', xPos: 1, yPos: 2 }],
    ['place 1,2,east', { facingDirection: 'east', xPos: 1, yPos: 2 }],
    ['place 0,0,north', { facingDirection: 'north', xPos: 0, yPos: 0 }],
    ['place 1,2,east', { facingDirection: 'east', xPos: 1, yPos: 2 }],
  ])('Valid input', (inputString, expected) => {
    expect(findInitialPosition(inputString)).toEqual(expected);
  });

  it.each([
    ['PLACE 1,2', undefined],
    ['0,0,NORTH', undefined],
    ['random text', undefined],
    ['PLACE -1,2,EAST', undefined],
    ['PLACE 1,5,EAST', undefined],
    ['PLACE 5,1,EAST', undefined],

  ])('Invalid inputs', (inputString, expected) => {
    expect(findInitialPosition(inputString)).toBe(expected);
  });
});
