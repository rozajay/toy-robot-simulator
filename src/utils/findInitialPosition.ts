import validFirstStep from "./validFirstStep";

const findInitialPosition = (inputStep:string):number[]|undefined => {
  const findPositionInString = inputStep.match(/\d+/g);
  const isValidFirstStep = validFirstStep(inputStep);
  if (isValidFirstStep && findPositionInString) {
    const positionAsNumber = findPositionInString.map((position) => parseInt(position, 10));
    return positionAsNumber;
  }
  return undefined;
};

export default findInitialPosition;
