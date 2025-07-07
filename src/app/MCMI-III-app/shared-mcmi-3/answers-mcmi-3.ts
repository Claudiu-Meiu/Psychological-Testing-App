function generateAnswersObjectMcmi3() {
  let tempObj: Record<string, string> = {};
  for (let i = 1; i < 176; i++) {
    tempObj[`answer${i}`] = '';
  }
  return tempObj;
}

export const AnswersMcmi3: Record<string, string> = generateAnswersObjectMcmi3();
