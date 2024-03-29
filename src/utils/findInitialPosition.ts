import validFirstStep from './validFirstStep';
import PositionInfo from '../types/index';

const findInitialPosition = (inputStep:string):PositionInfo|undefined => {
  const isValidFirstStep = validFirstStep(inputStep);
  const findPositionInString = inputStep.match(/\d+/g);
  const findFacingDirection = inputStep.match(/\b((?:NORTH|SOUTH|EAST|WEST))\b/i);
  if (isValidFirstStep && findPositionInString && findFacingDirection) {
    const positionAsNumber = findPositionInString.map((position) => parseInt(position, 10));
    return {
      xPos: positionAsNumber[0],
      yPos: positionAsNumber[1],
      facingDirection: findFacingDirection[0].toUpperCase(),
    };
  }
  return undefined;
};

export default findInitialPosition;
