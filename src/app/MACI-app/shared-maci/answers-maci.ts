function generateAnswersObjectMaci() {
  let tempObj: Record<string, string> = {};
  for (let i = 1; i < 161; i++) {
    tempObj[`answer${i}`] = '';
  }
  return tempObj;
}

export const AnswersMaci: Record<string, string> = generateAnswersObjectMaci();
