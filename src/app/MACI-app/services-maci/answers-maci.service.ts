import { Injectable } from '@angular/core';

import { AnswersMaci } from '../shared-maci/answers-maci';

@Injectable({
  providedIn: 'root',
})
export class AnswersMaciService {
  private allAnswers = AnswersMaci;

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
