import { inject, Injectable } from '@angular/core';

import { MongoDbMaciService } from './mongodb-maci.service';
import { ClientMaciService } from './client-maci.service';

import { type ClientMaci } from '../models-maci/client-maci.model';

@Injectable({
  providedIn: 'root',
})
export class AnswersMaciService {
  private _mongodbMaciService = inject(MongoDbMaciService);
  private _clientMaciService = inject(ClientMaciService);

  public savedAnswers: Record<string, string> = {};

  public selectedClient: ClientMaci | null = null;

  constructor() {
    this._clientMaciService.selectedClientSubject.subscribe({
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

  public generateEmptyAnswersObjectMaci(): Record<string, string> {
    let answersObject: Record<string, string> = {};
    for (let i = 1; i < 161; i++) {
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
    this._mongodbMaciService.saveAnswersForClient(clientId, answers).subscribe({
      next: () => {
        // No action needed on success
      },
      error: (error) => {
        console.error('Error updating answers', error);
      },
    });
  }
}
