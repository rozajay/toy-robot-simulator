import validInput from './validInput';
import PositionInfo from '../types/index';
import findInitialPosition from './findInitialPosition';
import findNewPosition from './findNewPosition';

const findFinalPosition = (instructions:string[]):PositionInfo|undefined => {
  const isValidInput = validInput(instructions);
  if (isValidInput) {
    let currentPosition = findInitialPosition(instructions[0]);
    instructions.forEach((instruction:string, index: number) => {
      if (index > 0) {
        if (currentPosition) {
          currentPosition = findNewPosition(currentPosition, instruction);
        }
      }
    });
    return currentPosition;
  }
};

export default findFinalPosition;
