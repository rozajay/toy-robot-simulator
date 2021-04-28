import findFinalPosition from '../utils/findFinalPosition';

describe('Find the final position for the robot', () => {
  it.each([
    [['PLACE 0,0,NORTH', 'MOVE'], { facingDirection: 'NORTH', xPos: 0, yPos: 1 }],
    [['PLACE 0,0,NORTH', 'LEFT'], { facingDirection: 'WEST', xPos: 0, yPos: 0 }],
    [['PLACE 1,2,EAST', 'MOVE', 'MOVE', 'LEFT', 'MOVE'], { facingDirection: 'NORTH', xPos: 3, yPos: 3 }],
  ])('Valid input', (inputString, expected) => {
    expect(findFinalPosition(inputString)).toEqual(expected);
  });

  it.each([
    [['PLACE 1,2'], undefined],
    [['0,0,NORTH'], undefined],
    [['random text'], undefined],
    [['PLACE -1,2,EAST'], undefined],
    [['PLACE 1,5,EAST'], undefined],
    [['PLACE 5,1,EAST'], undefined],
    [['PLACE 5,1,EAST'], undefined],
    [['PLACE 1,2,EAST', 'MOVE', 'MOVE', 'LEFT', 'fd'], undefined],
  ])('Invalid inputs', (inputString, expected) => {
    expect(findFinalPosition(inputString)).toBe(expected);
  });
});
