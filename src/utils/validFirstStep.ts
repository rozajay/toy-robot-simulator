const validFirstStep = (inputStep:string):boolean => {
  const matchedPattern = inputStep.match(/\b(PLACE)\b[ ]\d[,]\d[,]\b((?:NORTH|SOUTH|EAST|WEST))\b/i);

  return !!matchedPattern;
};

export default validFirstStep;
