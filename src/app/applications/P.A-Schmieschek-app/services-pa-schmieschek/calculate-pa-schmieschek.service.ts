import { inject, Injectable } from '@angular/core';

import { ClientPaSchmieschekService } from './client-pa-schmieschek.service';
import { TableReferencePaSchmieschekService } from './table-reference-pa-schmieschek.service';
import { MongoDbPaSchmieschekService } from './mongodb-pa-schmieschek.service';

import { type ClientPaSchmieschek } from '../models-pa-schmieschek/client-pa-schmieschek.model';

@Injectable({
  providedIn: 'root',
})
export class CalculatePaSchmieschekService {
  private _clientPaSchmieschekService = inject(ClientPaSchmieschekService);
  private _tableReferencePaSchmieschekService = inject(
    TableReferencePaSchmieschekService
  );
  private _mongodbPaSchmieschekService = inject(MongoDbPaSchmieschekService);

  private _selectedClient: ClientPaSchmieschek | null = null;

  private _totalGroup1: number = 0;
  private _percentageGroup1: number = 0;
  private _matchingAnswersGroup1: number[] = [];

  private _totalGroup2: number = 0;
  private _percentageGroup2: number = 0;
  private _matchingAnswersGroup2: number[] = [];

  private _totalGroup3: number = 0;
  private _percentageGroup3: number = 0;
  private _matchingAnswersGroup3: number[] = [];

  private _totalGroup4: number = 0;
  private _percentageGroup4: number = 0;
  private _matchingAnswersGroup4: number[] = [];

  private _totalGroup5: number = 0;
  private _percentageGroup5: number = 0;
  private _matchingAnswersGroup5: number[] = [];

  private _totalGroup6: number = 0;
  private _percentageGroup6: number = 0;
  private _matchingAnswersGroup6: number[] = [];

  private _totalGroup7: number = 0;
  private _percentageGroup7: number = 0;
  private _matchingAnswersGroup7: number[] = [];

  private _totalGroup8: number = 0;
  private _percentageGroup8: number = 0;
  private _matchingAnswersGroup8: number[] = [];

  private _totalGroup9: number = 0;
  private _percentageGroup9: number = 0;
  private _matchingAnswersGroup9: number[] = [];

  private _totalGroup10: number = 0;
  private _percentageGroup10: number = 0;
  private _matchingAnswersGroup10: number[] = [];

  constructor() {
    this._clientPaSchmieschekService.selectedClientSubject.subscribe({
      next: (client) => {
        this._selectedClient = client;
      },
    });
  }

  private _saveScores(): void {
    const scores: object[] = [
      {
        groupName: this._tableReferencePaSchmieschekService.Titles['group1'],
        total: this._totalGroup1,
        percentage: this._percentageGroup1,
        symptomaticAnswers: this._matchingAnswersGroup1,
      },
      {
        groupName: this._tableReferencePaSchmieschekService.Titles['group2'],
        total: this._totalGroup2,
        percentage: this._percentageGroup2,
        symptomaticAnswers: this._matchingAnswersGroup2,
      },
      {
        groupName: this._tableReferencePaSchmieschekService.Titles['group3'],
        total: this._totalGroup3,
        percentage: this._percentageGroup3,
        symptomaticAnswers: this._matchingAnswersGroup3,
      },
      {
        groupName: this._tableReferencePaSchmieschekService.Titles['group4'],
        total: this._totalGroup4,
        percentage: this._percentageGroup4,
        symptomaticAnswers: this._matchingAnswersGroup4,
      },
      {
        groupName: this._tableReferencePaSchmieschekService.Titles['group5'],
        total: this._totalGroup5,
        percentage: this._percentageGroup5,
        symptomaticAnswers: this._matchingAnswersGroup5,
      },
      {
        groupName: this._tableReferencePaSchmieschekService.Titles['group6'],
        total: this._totalGroup6,
        percentage: this._percentageGroup6,
        symptomaticAnswers: this._matchingAnswersGroup6,
      },
      {
        groupName: this._tableReferencePaSchmieschekService.Titles['group7'],
        total: this._totalGroup7,
        percentage: this._percentageGroup7,
        symptomaticAnswers: this._matchingAnswersGroup7,
      },
      {
        groupName: this._tableReferencePaSchmieschekService.Titles['group8'],
        total: this._totalGroup8,
        percentage: this._percentageGroup8,
        symptomaticAnswers: this._matchingAnswersGroup8,
      },
      {
        groupName: this._tableReferencePaSchmieschekService.Titles['group9'],
        total: this._totalGroup9,
        percentage: this._percentageGroup9,
        symptomaticAnswers: this._matchingAnswersGroup9,
      },
      {
        groupName: this._tableReferencePaSchmieschekService.Titles['group10'],
        total: this._totalGroup10,
        percentage: this._percentageGroup10,
        symptomaticAnswers: this._matchingAnswersGroup10,
      },
    ];

    this._mongodbPaSchmieschekService
      .saveScoresForClient(this._selectedClient?._id, scores)
      .subscribe({
        next: (updatedClient: ClientPaSchmieschek) => {
          this._clientPaSchmieschekService.setSelectedClient(updatedClient);
        },
        error: (error: any) => {
          console.error('Error updating client:', error);
        },
      });
  }

  public async calculateScores(): Promise<void> {
    await Promise.all([
      this._group1(),
      this._group2(),
      this._group3(),
      this._group4(),
      this._group5(),
      this._group6(),
      this._group7(),
      this._group8(),
      this._group9(),
      this._group10(),
    ]);

    this._saveScores();
  }

  public resetCalculationVariables(): void {
    this._totalGroup1 = 0;
    this._percentageGroup1 = 0;
    this._matchingAnswersGroup1 = [];

    this._totalGroup2 = 0;
    this._percentageGroup2 = 0;
    this._matchingAnswersGroup2 = [];

    this._totalGroup3 = 0;
    this._percentageGroup3 = 0;
    this._matchingAnswersGroup3 = [];

    this._totalGroup4 = 0;
    this._percentageGroup4 = 0;
    this._matchingAnswersGroup4 = [];

    this._totalGroup5 = 0;
    this._percentageGroup5 = 0;
    this._matchingAnswersGroup5 = [];

    this._totalGroup6 = 0;
    this._percentageGroup6 = 0;
    this._matchingAnswersGroup6 = [];

    this._totalGroup7 = 0;
    this._percentageGroup7 = 0;
    this._matchingAnswersGroup7 = [];

    this._totalGroup8 = 0;
    this._percentageGroup8 = 0;
    this._matchingAnswersGroup8 = [];

    this._totalGroup9 = 0;
    this._percentageGroup9 = 0;
    this._matchingAnswersGroup9 = [];

    this._totalGroup10 = 0;
    this._percentageGroup10 = 0;
    this._matchingAnswersGroup10 = [];
  }

  private _group1(): void {
    if (!this._selectedClient) {
      return;
    }

    const positiveAnswers = [
      'answer7',
      'answer19',
      'answer22',
      'answer29',
      'answer41',
      'answer44',
      'answer63',
      'answer66',
      'answer73',
      'answer85',
      'answer88',
    ];

    const negativeAnswers = ['answer51'];

    const symptomaticPositiveItems = positiveAnswers.map(
      (key) => this._selectedClient!.answers[key]
    );

    const symptomaticNegativeItems = negativeAnswers.map(
      (key) => this._selectedClient!.answers[key]
    );

    this._totalGroup1 =
      symptomaticPositiveItems.filter((item) => item === 'DA').length +
      symptomaticNegativeItems.filter((item) => item === 'NU').length;

    this._percentageGroup1 =
      this._tableReferencePaSchmieschekService.Group_1_2_3[
        `total${this._totalGroup1}` as keyof typeof this._tableReferencePaSchmieschekService.Group_1_2_3
      ];

    this._matchingAnswersGroup1 = [
      ...positiveAnswers
        .filter((key) => this._selectedClient!.answers[key] === 'DA')
        .map((key) => Number(key.replace('answer', ''))),
      ...negativeAnswers
        .filter((key) => this._selectedClient!.answers[key] === 'NU')
        .map((key) => Number(key.replace('answer', ''))),
    ];
  }

  private _group2(): void {
    if (!this._selectedClient) {
      return;
    }

    const positiveAnswers = [
      'answer4',
      'answer14',
      'answer17',
      'answer26',
      'answer39',
      'answer48',
      'answer58',
      'answer61',
      'answer70',
      'answer80',
      'answer83',
    ];

    const negativeAnswers = ['answer36'];

    const symptomaticPositiveItems = positiveAnswers.map(
      (key) => this._selectedClient!.answers[key]
    );

    const symptomaticNegativeItems = negativeAnswers.map(
      (key) => this._selectedClient!.answers[key]
    );

    this._totalGroup2 =
      symptomaticPositiveItems.filter((item) => item === 'DA').length +
      symptomaticNegativeItems.filter((item) => item === 'NU').length;

    this._percentageGroup2 =
      this._tableReferencePaSchmieschekService.Group_1_2_3[
        `total${this._totalGroup2}` as keyof typeof this._tableReferencePaSchmieschekService.Group_1_2_3
      ];

    this._matchingAnswersGroup2 = [
      ...positiveAnswers
        .filter((key) => this._selectedClient!.answers[key] === 'DA')
        .map((key) => Number(key.replace('answer', ''))),
      ...negativeAnswers
        .filter((key) => this._selectedClient!.answers[key] === 'NU')
        .map((key) => Number(key.replace('answer', ''))),
    ];
  }

  private _group3(): void {
    if (!this._selectedClient) {
      return;
    }

    const positiveAnswers = [
      'answer2',
      'answer15',
      'answer24',
      'answer34',
      'answer37',
      'answer56',
      'answer68',
      'answer78',
      'answer81',
    ];

    const negativeAnswers = ['answer12', 'answer46', 'answer59'];

    const symptomaticPositiveItems = positiveAnswers.map(
      (key) => this._selectedClient!.answers[key]
    );

    const symptomaticNegativeItems = negativeAnswers.map(
      (key) => this._selectedClient!.answers[key]
    );

    this._totalGroup3 =
      symptomaticPositiveItems.filter((item) => item === 'DA').length +
      symptomaticNegativeItems.filter((item) => item === 'NU').length;

    this._percentageGroup3 =
      this._tableReferencePaSchmieschekService.Group_1_2_3[
        `total${this._totalGroup3}` as keyof typeof this._tableReferencePaSchmieschekService.Group_1_2_3
      ];

    this._matchingAnswersGroup3 = [
      ...positiveAnswers
        .filter((key) => this._selectedClient!.answers[key] === 'DA')
        .map((key) => Number(key.replace('answer', ''))),
      ...negativeAnswers
        .filter((key) => this._selectedClient!.answers[key] === 'NU')
        .map((key) => Number(key.replace('answer', ''))),
    ];
  }

  private _group4(): void {
    if (!this._selectedClient) {
      return;
    }

    const positiveAnswers = [
      'answer8',
      'answer20',
      'answer30',
      'answer42',
      'answer52',
      'answer64',
      'answer74',
      'answer86',
    ];

    const symptomaticPositiveItems = positiveAnswers.map(
      (key) => this._selectedClient!.answers[key]
    );

    this._totalGroup4 = symptomaticPositiveItems.filter(
      (item) => item === 'DA'
    ).length;

    this._percentageGroup4 =
      this._tableReferencePaSchmieschekService.Group_4_5_6_7_9_10[
        `total${this._totalGroup4}` as keyof typeof this._tableReferencePaSchmieschekService.Group_4_5_6_7_9_10
      ];

    this._matchingAnswersGroup4 = positiveAnswers
      .filter((key) => this._selectedClient!.answers[key] === 'DA')
      .map((key) => Number(key.replace('answer', '')));
  }

  private _group5(): void {
    if (!this._selectedClient) {
      return;
    }

    const positiveAnswers = [
      'answer1',
      'answer11',
      'answer23',
      'answer33',
      'answer45',
      'answer55',
      'answer67',
      'answer77',
    ];

    const symptomaticPositiveItems = positiveAnswers.map(
      (key) => this._selectedClient!.answers[key]
    );

    this._totalGroup5 = symptomaticPositiveItems.filter(
      (item) => item === 'DA'
    ).length;

    this._percentageGroup5 =
      this._tableReferencePaSchmieschekService.Group_4_5_6_7_9_10[
        `total${this._totalGroup5}` as keyof typeof this._tableReferencePaSchmieschekService.Group_4_5_6_7_9_10
      ];

    this._matchingAnswersGroup5 = positiveAnswers
      .filter((key) => this._selectedClient!.answers[key] === 'DA')
      .map((key) => Number(key.replace('answer', '')));
  }

  private _group6(): void {
    if (!this._selectedClient) {
      return;
    }

    const positiveAnswers = [
      'answer9',
      'answer21',
      'answer43',
      'answer75',
      'answer87',
    ];

    const negativeAnswers = ['answer31', 'answer53', 'answer65'];

    const symptomaticPositiveItems = positiveAnswers.map(
      (key) => this._selectedClient!.answers[key]
    );

    const symptomaticNegativeItems = negativeAnswers.map(
      (key) => this._selectedClient!.answers[key]
    );

    this._totalGroup6 =
      symptomaticPositiveItems.filter((item) => item === 'DA').length +
      symptomaticNegativeItems.filter((item) => item === 'NU').length;

    this._percentageGroup6 =
      this._tableReferencePaSchmieschekService.Group_4_5_6_7_9_10[
        `total${this._totalGroup6}` as keyof typeof this._tableReferencePaSchmieschekService.Group_4_5_6_7_9_10
      ];

    this._matchingAnswersGroup6 = [
      ...positiveAnswers
        .filter((key) => this._selectedClient!.answers[key] === 'DA')
        .map((key) => Number(key.replace('answer', ''))),
      ...negativeAnswers
        .filter((key) => this._selectedClient!.answers[key] === 'NU')
        .map((key) => Number(key.replace('answer', ''))),
    ];
  }

  private _group7(): void {
    if (!this._selectedClient) {
      return;
    }

    const positiveAnswers = [
      'answer6',
      'answer18',
      'answer28',
      'answer40',
      'answer50',
      'answer62',
      'answer72',
      'answer84',
    ];

    const symptomaticPositiveItems = positiveAnswers.map(
      (key) => this._selectedClient!.answers[key]
    );

    this._totalGroup7 = symptomaticPositiveItems.filter(
      (item) => item === 'DA'
    ).length;

    this._percentageGroup7 =
      this._tableReferencePaSchmieschekService.Group_4_5_6_7_9_10[
        `total${this._totalGroup7}` as keyof typeof this._tableReferencePaSchmieschekService.Group_4_5_6_7_9_10
      ];

    this._matchingAnswersGroup7 = positiveAnswers
      .filter((key) => this._selectedClient!.answers[key] === 'DA')
      .map((key) => Number(key.replace('answer', '')));
  }

  private _group8(): void {
    if (!this._selectedClient) {
      return;
    }

    const positiveAnswers = ['answer10', 'answer32', 'answer54', 'answer76'];

    const symptomaticPositiveItems = positiveAnswers.map(
      (key) => this._selectedClient!.answers[key]
    );

    this._totalGroup8 = symptomaticPositiveItems.filter(
      (item) => item === 'DA'
    ).length;

    this._percentageGroup8 =
      this._tableReferencePaSchmieschekService.Group_8[
        `total${this._totalGroup8}` as keyof typeof this._tableReferencePaSchmieschekService.Group_8
      ];

    this._matchingAnswersGroup8 = positiveAnswers
      .filter((key) => this._selectedClient!.answers[key] === 'DA')
      .map((key) => Number(key.replace('answer', '')));
  }

  private _group9(): void {
    if (!this._selectedClient) {
      return;
    }

    const positiveAnswers = [
      'answer16',
      'answer27',
      'answer38',
      'answer49',
      'answer60',
      'answer71',
      'answer82',
    ];

    const negativeAnswers = ['answer5'];

    const symptomaticPositiveItems = positiveAnswers.map(
      (key) => this._selectedClient!.answers[key]
    );

    const symptomaticNegativeItems = negativeAnswers.map(
      (key) => this._selectedClient!.answers[key]
    );

    this._totalGroup9 =
      symptomaticPositiveItems.filter((item) => item === 'DA').length +
      symptomaticNegativeItems.filter((item) => item === 'NU').length;

    this._percentageGroup9 =
      this._tableReferencePaSchmieschekService.Group_4_5_6_7_9_10[
        `total${this._totalGroup9}` as keyof typeof this._tableReferencePaSchmieschekService.Group_4_5_6_7_9_10
      ];

    this._matchingAnswersGroup9 = [
      ...positiveAnswers
        .filter((key) => this._selectedClient!.answers[key] === 'DA')
        .map((key) => Number(key.replace('answer', ''))),
      ...negativeAnswers
        .filter((key) => this._selectedClient!.answers[key] === 'NU')
        .map((key) => Number(key.replace('answer', ''))),
    ];
  }

  private _group10(): void {
    if (!this._selectedClient) {
      return;
    }

    const positiveAnswers = [
      'answer3',
      'answer13',
      'answer35',
      'answer47',
      'answer57',
      'answer69',
      'answer79',
    ];

    const negativeAnswers = ['answer25'];

    const symptomaticPositiveItems = positiveAnswers.map(
      (key) => this._selectedClient!.answers[key]
    );

    const symptomaticNegativeItems = negativeAnswers.map(
      (key) => this._selectedClient!.answers[key]
    );

    this._totalGroup10 =
      symptomaticPositiveItems.filter((item) => item === 'DA').length +
      symptomaticNegativeItems.filter((item) => item === 'NU').length;

    this._percentageGroup10 =
      this._tableReferencePaSchmieschekService.Group_4_5_6_7_9_10[
        `total${this._totalGroup10}` as keyof typeof this._tableReferencePaSchmieschekService.Group_4_5_6_7_9_10
      ];

    this._matchingAnswersGroup10 = [
      ...positiveAnswers
        .filter((key) => this._selectedClient!.answers[key] === 'DA')
        .map((key) => Number(key.replace('answer', ''))),
      ...negativeAnswers
        .filter((key) => this._selectedClient!.answers[key] === 'NU')
        .map((key) => Number(key.replace('answer', ''))),
    ];
  }
}
