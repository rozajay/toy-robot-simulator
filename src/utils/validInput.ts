import validFirstStep from './validFirstStep';
import validRemainingSteps from './validRemainingSteps';

const validInput = (inputArray:string[]):boolean => {
  const isValidInitialStep = validFirstStep(inputArray[0]);
  const incorrectSteps = inputArray.find((input:string, index:number) => {
    if (index > 0) {
      const isValidRemainingStep = validRemainingSteps(input);
      if (!isValidRemainingStep) {
        return input;
      }
    }
  });

  const isValidInput = isValidInitialStep && incorrectSteps === undefined;

  return isValidInput;
};

export default validInput;
