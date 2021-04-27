const validFirstStep = (inputStep:string):boolean => {
  const matchedPattern = inputStep.match(/\b(PLACE)\b[ ]([0-4])[,]([0-4])[,]\b((?:NORTH|SOUTH|EAST|WEST))\b/i);
  return !!matchedPattern;
};

export default validFirstStep;
