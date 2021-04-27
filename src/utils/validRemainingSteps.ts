const validRemainingSteps = (inputStep:string):boolean => {
  const matchedPattern = inputStep.match(/\b((?:MOVE|LEFT|RIGHT))\b/i);

  return !!matchedPattern;
};

export default validRemainingSteps;
