import { inject, Injectable } from '@angular/core';

import { MongoDbMcmi3Service } from './mongodb-mcmi-3.service';
import { ClientMcmi3Service } from './client-mcmi-3.service';

import { type ClientMcmi3 } from '../models-mcmi-3/client-mcmi-3.model';

@Injectable({
  providedIn: 'root',
})
export class AnswersMcmi3Service {
  private _mongodbMcmi3Service = inject(MongoDbMcmi3Service);
  private _clientMcmi3Service = inject(ClientMcmi3Service);

  public savedAnswers: Record<string, string> = {};

  public selectedClient: ClientMcmi3 | null = null;

  constructor() {
    this._clientMcmi3Service.selectedClientSubject.subscribe({
      next: (client) => {
        if (client) {
          this.selectedClient = client;
        }
      },
    });
  }

  public getAnswers(): Record<string, string> {
    const selectedClient = this.selectedClient;

    if (selectedClient && selectedClient.answers) {
      this.savedAnswers = selectedClient.answers;
      return this.savedAnswers;
    } else {
      return (this.savedAnswers = {});
    }
  }

  public generateEmptyAnswersObjectMcmi3(): Record<string, string> {
    let answersObject: Record<string, string> = {};
    for (let i = 1; i < 176; i++) {
      answersObject[`answer${i}`] = '';
    }
    return answersObject;
  }

  public get answersKeys(): string[] {
    return Object.keys(this.savedAnswers);
  }

  public updateClientAnswerByKey(
    answerKey: string,
    value: string,
    clientId: string | undefined
  ): void {
    const answers = this.getAnswers();
    answers[answerKey] = value;
    this._mongodbMcmi3Service
      .saveAnswersForClient(clientId, answers)
      .subscribe({
        next: () => {
          // No action needed on success
        },
        error: (error) => {
          console.error('Error updating answers', error);
        },
      });
  }
}
