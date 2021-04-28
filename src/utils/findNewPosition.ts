import PositionInfo from '../types/index';
import validRemainingSteps from './validRemainingSteps';

const findNewPosition = (
  currentPosition:PositionInfo, instruction: string,
):PositionInfo|undefined => {
  const { xPos, yPos, facingDirection } = currentPosition;
  const isValidInstruction = validRemainingSteps(instruction);

  if (isValidInstruction) {
    const instructionUpper = instruction.toUpperCase();
    let newPosition:PositionInfo;
    let newYPos:number;
    let newXPos:number;

    switch (facingDirection) {
      case 'NORTH':
        switch (instructionUpper) {
          case 'MOVE':
            newYPos = yPos + 1;
            newPosition = {
              xPos,
              yPos: (newYPos > 4) ? 4 : newYPos,
              facingDirection,
            };
            return newPosition;
          case 'RIGHT':
            newPosition = {
              xPos,
              yPos,
              facingDirection: 'EAST',
            };
            return newPosition;
          case 'LEFT':
            newPosition = {
              xPos,
              yPos,
              facingDirection: 'WEST',
            };
            return newPosition;
          default:
            break;
        }
        break;
      case 'SOUTH':
        switch (instructionUpper) {
          case 'MOVE':
            newYPos = yPos - 1;
            newPosition = {
              xPos,
              yPos: (newYPos < 0) ? 0 : newYPos,
              facingDirection,
            };
            return newPosition;
          case 'RIGHT':
            newPosition = {
              xPos,
              yPos,
              facingDirection: 'WEST',
            };
            return newPosition;
          case 'LEFT':
            newPosition = {
              xPos,
              yPos,
              facingDirection: 'EAST',
            };
            return newPosition;
          default:
            break;
        }
        break;
      case 'EAST':
        switch (instructionUpper) {
          case 'MOVE':
            newXPos = xPos + 1;
            newPosition = {
              xPos: (newXPos > 4) ? 4 : newXPos,
              yPos,
              facingDirection,
            };
            return newPosition;
          case 'RIGHT':
            newPosition = {
              xPos,
              yPos,
              facingDirection: 'SOUTH',
            };
            return newPosition;
          case 'LEFT':
            newPosition = {
              xPos,
              yPos,
              facingDirection: 'NORTH',
            };
            return newPosition;
          default:
            break;
        }
        break;
      default:
        switch (instructionUpper) {
          case 'MOVE':
            newXPos = xPos - 1;
            newPosition = {
              xPos: (newXPos < 0) ? 0 : newXPos,
              yPos,
              facingDirection,
            };
            return newPosition;
          case 'RIGHT':
            newPosition = {
              xPos,
              yPos,
              facingDirection: 'NORTH',
            };
            return newPosition;
          case 'LEFT':
            newPosition = {
              xPos,
              yPos,
              facingDirection: 'SOUTH',
            };
            return newPosition;
          default:
            break;
        }
    }
  }

  return undefined;
};

export default findNewPosition;
