import findNewPosition from '../utils/findNewPosition';

describe('Find the initial position for the robot', () => {
  it.each([
    [{ facingDirection: 'NORTH', xPos: 0, yPos: 0 }, 'MOVE', { facingDirection: 'NORTH', xPos: 0, yPos: 1 }],
    [{ facingDirection: 'NORTH', xPos: 0, yPos: 0 }, 'LEFT', { facingDirection: 'WEST', xPos: 0, yPos: 0 }],
    [{ facingDirection: 'NORTH', xPos: 0, yPos: 4 }, 'MOVE', { facingDirection: 'NORTH', xPos: 0, yPos: 4 }],
    [{ facingDirection: 'SOUTH', xPos: 0, yPos: 0 }, 'MOVE', { facingDirection: 'SOUTH', xPos: 0, yPos: 0 }],
    [{ facingDirection: 'WEST', xPos: 0, yPos: 0 }, 'MOVE', { facingDirection: 'WEST', xPos: 0, yPos: 0 }],
    [{ facingDirection: 'EAST', xPos: 4, yPos: 0 }, 'MOVE', { facingDirection: 'EAST', xPos: 4, yPos: 0 }],
  ])('Valid input', (currentPosition, instruction, expected) => {
    expect(findNewPosition(currentPosition, instruction)).toEqual(expected);
  });
});
