import { Injectable } from '@angular/core';

import { AnswersMcmi3 } from '../shared-mcmi-3/answers-mcmi-3';

@Injectable({
  providedIn: 'root',
})
export class AnswersMcmi3Service {
  private allAnswers = AnswersMcmi3;

  answerKeys: string[] = Object.keys(this.allAnswers);

  updateAnswer(answerKey: string, value: string) {
    this.allAnswers[answerKey] = value;
  }

  clearAnswers() {
    this.answerKeys.forEach((key) => {
      this.allAnswers[key] = '';
    });
  }
}
