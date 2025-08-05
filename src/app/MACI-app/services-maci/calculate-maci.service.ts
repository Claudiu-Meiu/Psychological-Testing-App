import { inject, Injectable } from '@angular/core';

import { ClientMaciService } from './client-maci.service';
import { TableReferenceMaciService } from './table-reference-maci.service';
import { MongoDbMaciService } from './mongodb-maci.service';

import { type ClientMaci } from '../models-maci/client-maci.model';

@Injectable({
  providedIn: 'root',
})
export class CalculateMaciService {
  private _clientMaciService = inject(ClientMaciService);
  private _tableReferenceMaciService = inject(TableReferenceMaciService);
  private _mongodbMaciService = inject(MongoDbMaciService);

  private _selectedClient: ClientMaci | null = null;

  private _resultScaleXGross: number = 0;
  private _resultScaleXGrossRounded: number = 0;
  private _resultScaleXBR: number = 0;

  private _resultScaleYGross: number = 0;
  private _resultScaleYBR: number = 0;

  private _resultScaleZGross: number = 0;
  private _resultScaleZBR: number = 0;

  private _resultScale1Gross: number = 0;
  private _resultScale1BR: number = 0;

  private _resultScale2AGross: number = 0;
  private _resultScale2ABR: number = 0;

  private _resultScale2BGross: number = 0;
  private _resultScale2BBR: number = 0;

  private _resultScale3Gross: number = 0;
  private _resultScale3BR: number = 0;

  private _resultScale4Gross: number = 0;
  private _resultScale4BR: number = 0;

  private _resultScale5Gross: number = 0;
  private _resultScale5BR: number = 0;

  private _resultScale6AGross: number = 0;
  private _resultScale6ABR: number = 0;

  private _resultScale6BGross: number = 0;
  private _resultScale6BBR: number = 0;

  private _resultScale7Gross: number = 0;
  private _resultScale7BR: number = 0;

  private _resultScale8AGross: number = 0;
  private _resultScale8ABR: number = 0;

  private _resultScale8BGross: number = 0;
  private _resultScale8BBR: number = 0;

  private _resultScale9Gross: number = 0;
  private _resultScale9BR: number = 0;

  private _resultScaleAGross: number = 0;
  private _resultScaleABR: number = 0;

  private _resultScaleBGross: number = 0;
  private _resultScaleBBR: number = 0;

  private _resultScaleCGross: number = 0;
  private _resultScaleCBR: number = 0;

  private _resultScaleDGross: number = 0;
  private _resultScaleDBR: number = 0;

  private _resultScaleEGross: number = 0;
  private _resultScaleEBR: number = 0;

  private _resultScaleFGross: number = 0;
  private _resultScaleFBR: number = 0;

  private _resultScaleGGross: number = 0;
  private _resultScaleGBR: number = 0;

  private _resultScaleHGross: number = 0;
  private _resultScaleHBR: number = 0;

  private _resultScaleAAGross: number = 0;
  private _resultScaleAABR: number = 0;

  private _resultScaleBBGross: number = 0;
  private _resultScaleBBBR: number = 0;

  private _resultScaleCCGross: number = 0;
  private _resultScaleCCBR: number = 0;

  private _resultScaleDDGross: number = 0;
  private _resultScaleDDBR: number = 0;

  private _resultScaleEEGross: number = 0;
  private _resultScaleEEBR: number = 0;

  private _resultScaleFFGross: number = 0;
  private _resultScaleFFBR: number = 0;

  private _resultScaleGGGross: number = 0;
  private _resultScaleGGBR: number = 0;

  constructor() {
    this._clientMaciService.selectedClientSubject.subscribe({
      next: (client) => {
        if (client) {
          this._selectedClient = client;
        }
      },
    });
  }

  private _saveScores(): void {
    const scores: object[] = [
      {
        scale: this._tableReferenceMaciService.Titles['scaleX'],
        gross: this._resultScaleXGrossRounded,
        br: this._resultScaleXBR,
      },
      {
        scale: this._tableReferenceMaciService.Titles['scaleY'],
        gross: this._resultScaleYGross,
        br: this._resultScaleYBR,
      },
      {
        scale: this._tableReferenceMaciService.Titles['scaleZ'],
        gross: this._resultScaleZGross,
        br: this._resultScaleZBR,
      },
      {
        scale: this._tableReferenceMaciService.Titles['scale1'],
        gross: this._resultScale1Gross,
        br: this._resultScale1BR,
      },
      {
        scale: this._tableReferenceMaciService.Titles['scale2A'],
        gross: this._resultScale2AGross,
        br: this._resultScale2ABR,
      },
      {
        scale: this._tableReferenceMaciService.Titles['scale2B'],
        gross: this._resultScale2BGross,
        br: this._resultScale2BBR,
      },
      {
        scale: this._tableReferenceMaciService.Titles['scale3'],
        gross: this._resultScale3Gross,
        br: this._resultScale3BR,
      },
      {
        scale: this._tableReferenceMaciService.Titles['scale4'],
        gross: this._resultScale4Gross,
        br: this._resultScale4BR,
      },
      {
        scale: this._tableReferenceMaciService.Titles['scale5'],
        gross: this._resultScale5Gross,
        br: this._resultScale5BR,
      },
      {
        scale: this._tableReferenceMaciService.Titles['scale6A'],
        gross: this._resultScale6AGross,
        br: this._resultScale6ABR,
      },
      {
        scale: this._tableReferenceMaciService.Titles['scale6B'],
        gross: this._resultScale6BGross,
        br: this._resultScale6BBR,
      },
      {
        scale: this._tableReferenceMaciService.Titles['scale7'],
        gross: this._resultScale7Gross,
        br: this._resultScale7BR,
      },
      {
        scale: this._tableReferenceMaciService.Titles['scale8A'],
        gross: this._resultScale8AGross,
        br: this._resultScale8ABR,
      },
      {
        scale: this._tableReferenceMaciService.Titles['scale8B'],
        gross: this._resultScale8BGross,
        br: this._resultScale8BBR,
      },
      {
        scale: this._tableReferenceMaciService.Titles['scale9'],
        gross: this._resultScale9Gross,
        br: this._resultScale9BR,
      },
      {
        scale: this._tableReferenceMaciService.Titles['scaleA'],
        gross: this._resultScaleAGross,
        br: this._resultScaleABR,
      },
      {
        scale: this._tableReferenceMaciService.Titles['scaleB'],
        gross: this._resultScaleBGross,
        br: this._resultScaleBBR,
      },
      {
        scale: this._tableReferenceMaciService.Titles['scaleC'],
        gross: this._resultScaleCGross,
        br: this._resultScaleCBR,
      },
      {
        scale: this._tableReferenceMaciService.Titles['scaleD'],
        gross: this._resultScaleDGross,
        br: this._resultScaleDBR,
      },
      {
        scale: this._tableReferenceMaciService.Titles['scaleE'],
        gross: this._resultScaleEGross,
        br: this._resultScaleEBR,
      },
      {
        scale: this._tableReferenceMaciService.Titles['scaleF'],
        gross: this._resultScaleFGross,
        br: this._resultScaleFBR,
      },
      {
        scale: this._tableReferenceMaciService.Titles['scaleG'],
        gross: this._resultScaleGGross,
        br: this._resultScaleGBR,
      },
      {
        scale: this._tableReferenceMaciService.Titles['scaleH'],
        gross: this._resultScaleHGross,
        br: this._resultScaleHBR,
      },
      {
        scale: this._tableReferenceMaciService.Titles['scaleAA'],
        gross: this._resultScaleAAGross,
        br: this._resultScaleAABR,
      },
      {
        scale: this._tableReferenceMaciService.Titles['scaleBB'],
        gross: this._resultScaleBBGross,
        br: this._resultScaleBBBR,
      },
      {
        scale: this._tableReferenceMaciService.Titles['scaleCC'],
        gross: this._resultScaleCCGross,
        br: this._resultScaleCCBR,
      },
      {
        scale: this._tableReferenceMaciService.Titles['scaleDD'],
        gross: this._resultScaleDDGross,
        br: this._resultScaleDDBR,
      },
      {
        scale: this._tableReferenceMaciService.Titles['scaleEE'],
        gross: this._resultScaleEEGross,
        br: this._resultScaleEEBR,
      },
      {
        scale: this._tableReferenceMaciService.Titles['scaleFF'],
        gross: this._resultScaleFFGross,
        br: this._resultScaleFFBR,
      },
      {
        scale: this._tableReferenceMaciService.Titles['scaleGG'],
        gross: this._resultScaleGGGross,
        br: this._resultScaleGGBR,
      },
    ];

    this._mongodbMaciService
      .saveScoresForClient(this._selectedClient?._id, scores)
      .subscribe({
        next: (updatedClient: ClientMaci) => {
          this._clientMaciService.setSelectedClient(updatedClient);
        },
        error: (error: any) => {
          console.error('Error updating client:', error);
        },
      });
  }

  public async calculateScores(): Promise<void> {
    await Promise.all([
      this._scale1(),
      this._scale2A(),
      this._scale2B(),
      this._scale3(),
      this._scale4(),
      this._scale5(),
      this._scale6A(),
      this._scale6B(),
      this._scale7(),
      this._scale8A(),
      this._scale8B(),
      this._scale9(),
      this._scaleA(),
      this._scaleB(),
      this._scaleC(),
      this._scaleD(),
      this._scaleE(),
      this._scaleF(),
      this._scaleG(),
      this._scaleH(),
      this._scaleAA(),
      this._scaleBB(),
      this._scaleCC(),
      this._scaleDD(),
      this._scaleEE(),
      this._scaleFF(),
      this._scaleGG(),
      this._scaleY(),
      this._scaleZ(),
      this._scaleX(),
    ]);

    this._saveScores();
  }

  public resetCalculationVariables(): void {
    this._resultScaleXGross = 0;
    this._resultScaleXGrossRounded = 0;
    this._resultScaleXBR = 0;

    this._resultScaleYGross = 0;
    this._resultScaleYBR = 0;

    this._resultScaleZGross = 0;
    this._resultScaleZBR = 0;

    this._resultScale1Gross = 0;
    this._resultScale1BR = 0;

    this._resultScale2AGross = 0;
    this._resultScale2ABR = 0;

    this._resultScale2BGross = 0;
    this._resultScale2BBR = 0;

    this._resultScale3Gross = 0;
    this._resultScale3BR = 0;

    this._resultScale4Gross = 0;
    this._resultScale4BR = 0;

    this._resultScale5Gross = 0;
    this._resultScale5BR = 0;

    this._resultScale6AGross = 0;
    this._resultScale6ABR = 0;

    this._resultScale6BGross = 0;
    this._resultScale6BBR = 0;

    this._resultScale7Gross = 0;
    this._resultScale7BR = 0;

    this._resultScale8AGross = 0;
    this._resultScale8ABR = 0;

    this._resultScale8BGross = 0;
    this._resultScale8BBR = 0;

    this._resultScale9Gross = 0;
    this._resultScale9BR = 0;

    this._resultScaleAGross = 0;
    this._resultScaleABR = 0;

    this._resultScaleBGross = 0;
    this._resultScaleBBR = 0;

    this._resultScaleCGross = 0;
    this._resultScaleCBR = 0;

    this._resultScaleDGross = 0;
    this._resultScaleDBR = 0;

    this._resultScaleEGross = 0;
    this._resultScaleEBR = 0;

    this._resultScaleFGross = 0;
    this._resultScaleFBR = 0;

    this._resultScaleGGross = 0;
    this._resultScaleGBR = 0;

    this._resultScaleHGross = 0;
    this._resultScaleHBR = 0;

    this._resultScaleAAGross = 0;
    this._resultScaleAABR = 0;

    this._resultScaleBBGross = 0;
    this._resultScaleBBBR = 0;

    this._resultScaleCCGross = 0;
    this._resultScaleCCBR = 0;

    this._resultScaleDDGross = 0;
    this._resultScaleDDBR = 0;

    this._resultScaleEEGross = 0;
    this._resultScaleEEBR = 0;

    this._resultScaleFFGross = 0;
    this._resultScaleFFBR = 0;

    this._resultScaleGGGross = 0;
    this._resultScaleGGBR = 0;
  }

  private _calculateGross(trueItems: any, falseItems: any) {
    let resultScaleGross = 0;

    trueItems.forEach((item: any) => {
      if (item.answer === 'A') {
        resultScaleGross += item.weight;
      }
    });
    falseItems.forEach((item: any) => {
      if (item.answer === 'F') {
        resultScaleGross += item.weight;
      }
    });
    return resultScaleGross;
  }

  private _calculateBR(
    trueItems: any[],
    falseItems: any[],
    scale:
      | 'scale1'
      | 'scale2A'
      | 'scale2B'
      | 'scale3'
      | 'scale4'
      | 'scale5'
      | 'scale6A'
      | 'scale6B'
      | 'scale7'
      | 'scale8A'
      | 'scale8B'
      | 'scale9'
      | 'scaleA'
      | 'scaleB'
      | 'scaleC'
      | 'scaleD'
      | 'scaleE'
      | 'scaleF'
      | 'scaleG'
      | 'scaleH'
      | 'scaleAA'
      | 'scaleBB'
      | 'scaleCC'
      | 'scaleDD'
      | 'scaleEE'
      | 'scaleFF'
      | 'scaleGG'
      | 'scaleY'
      | 'scaleZ',
    resultScaleGross: number,
    resultScaleBR: number
  ) {
    resultScaleGross = this._calculateGross(trueItems, falseItems);

    if (
      this._selectedClient!.gender === 'Masculin' &&
      this._selectedClient!.age >= 13 &&
      this._selectedClient!.age <= 15
    ) {
      resultScaleBR =
        this._tableReferenceMaciService.Male['age13to15'][scale][
          `gross${resultScaleGross}` as keyof (typeof this._tableReferenceMaciService.Male.age13to15)[typeof scale]
        ];
    }
    if (
      this._selectedClient!.gender === 'Masculin' &&
      this._selectedClient!.age >= 16 &&
      this._selectedClient!.age <= 19
    ) {
      resultScaleBR =
        this._tableReferenceMaciService.Male['age16to19'][scale][
          `gross${resultScaleGross}` as keyof (typeof this._tableReferenceMaciService.Male.age16to19)[typeof scale]
        ];
    }
    if (
      this._selectedClient!.gender === 'Feminin' &&
      this._selectedClient!.age >= 13 &&
      this._selectedClient!.age <= 15
    ) {
      resultScaleBR =
        this._tableReferenceMaciService.Female['age13to15'][scale][
          `gross${resultScaleGross}` as keyof (typeof this._tableReferenceMaciService.Female.age13to15)[typeof scale]
        ];
    }
    if (
      this._selectedClient!.gender === 'Feminin' &&
      this._selectedClient!.age >= 16 &&
      this._selectedClient!.age <= 19
    ) {
      resultScaleBR =
        this._tableReferenceMaciService.Female['age16to19'][scale][
          `gross${resultScaleGross}` as keyof (typeof this._tableReferenceMaciService.Female.age16to19)[typeof scale]
        ];
    }
    return resultScaleBR;
  }

  private _scaleX(): void {
    this._resultScaleXGross =
      (this._resultScale1Gross + this._resultScale2AGross) * 1.5 +
      (this._resultScale3Gross +
        this._resultScale4Gross +
        this._resultScale7Gross) *
        0.7 +
      this._resultScale2BGross * 2 +
      this._resultScale6BGross * 3 +
      this._resultScale5Gross +
      this._resultScale6AGross +
      this._resultScale8AGross +
      this._resultScale8BGross;

    this._resultScaleXGrossRounded = Math.round(this._resultScaleXGross);

    const scaleXtableReferenceRanges = [
      { min: 201, max: 209, value: 0 },
      { min: 210, max: 219, value: 5 },
      { min: 220, max: 229, value: 10 },
      { min: 230, max: 239, value: 15 },
      { min: 240, max: 249, value: 22 },
      { min: 250, max: 259, value: 30 },
      { min: 260, max: 269, value: 35 },
      { min: 270, max: 279, value: 37 },
      { min: 280, max: 289, value: 39 },
      { min: 290, max: 299, value: 41 },
      { min: 300, max: 309, value: 44 },
      { min: 310, max: 319, value: 47 },
      { min: 320, max: 329, value: 50 },
      { min: 330, max: 339, value: 52 },
      { min: 340, max: 349, value: 55 },
      { min: 350, max: 359, value: 58 },
      { min: 360, max: 369, value: 60 },
      { min: 370, max: 379, value: 62 },
      { min: 380, max: 389, value: 64 },
      { min: 390, max: 399, value: 67 },
      { min: 400, max: 409, value: 70 },
      { min: 410, max: 419, value: 72 },
      { min: 420, max: 429, value: 75 },
      { min: 430, max: 439, value: 77 },
      { min: 440, max: 449, value: 79 },
      { min: 450, max: 459, value: 81 },
      { min: 460, max: 469, value: 83 },
      { min: 470, max: 479, value: 85 },
      { min: 480, max: 489, value: 86 },
      { min: 490, max: 499, value: 87 },
      { min: 500, max: 509, value: 88 },
      { min: 510, max: 519, value: 90 },
      { min: 520, max: 529, value: 91 },
      { min: 530, max: 539, value: 93 },
      { min: 540, max: 549, value: 94 },
      { min: 550, max: 559, value: 95 },
      { min: 560, max: 569, value: 97 },
      { min: 570, max: 579, value: 98 },
      { min: 580, max: 589, value: 99 },
    ];

    for (const range of scaleXtableReferenceRanges) {
      if (
        this._resultScaleXGrossRounded >= range.min &&
        this._resultScaleXGrossRounded <= range.max
      ) {
        this._resultScaleXBR = range.value;
        break;
      }
    }
  }

  private _scaleY(): void {
    const trueItems = [
      'answer2',
      'answer5',
      'answer9',
      'answer10',
      'answer23',
      'answer24',
      'answer50',
      'answer70',
      'answer86',
      'answer93',
      'answer96',
      'answer101',
      'answer130',
      'answer131',
      'answer145',
      'answer146',
      'answer159',
    ].map((answer, index) => ({
      answer: this._selectedClient!.answers[answer],
      weight: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1][index],
    }));

    const falseItems: any[] = [];

    this._resultScaleYGross = this._calculateGross(trueItems, falseItems);
    this._resultScaleYBR = this._calculateBR(
      trueItems,
      falseItems,
      'scaleY',
      this._resultScaleYGross,
      this._resultScaleYBR
    );
  }

  private _scaleZ(): void {
    const trueItems = [
      'answer25',
      'answer34',
      'answer43',
      'answer64',
      'answer71',
      'answer79',
      'answer80',
      'answer84',
      'answer106',
      'answer112',
      'answer133',
      'answer140',
      'answer141',
      'answer147',
      'answer153',
      'answer154',
    ].map((answer, index) => ({
      answer: this._selectedClient!.answers[answer],
      weight: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1][index],
    }));

    const falseItems: any[] = [];

    this._resultScaleZGross = this._calculateGross(trueItems, falseItems);
    this._resultScaleZBR = this._calculateBR(
      trueItems,
      falseItems,
      'scaleZ',
      this._resultScaleZGross,
      this._resultScaleZBR
    );
  }

  private _scale1(): void {
    const trueItems = [
      'answer1',
      'answer3',
      'answer12',
      'answer13',
      'answer15',
      'answer17',
      'answer32',
      'answer34',
      'answer35',
      'answer36',
      'answer38',
      'answer39',
      'answer47',
      'answer51',
      'answer61',
      'answer69',
      'answer80',
      'answer85',
      'answer91',
      'answer99',
      'answer100',
      'answer102',
      'answer115',
      'answer116',
      'answer118',
      'answer119',
      'answer132',
      'answer136',
      'answer141',
      'answer142',
      'answer147',
      'answer154',
    ].map((answer, index) => ({
      answer: this._selectedClient!.answers[answer],
      weight: [
        1, 3, 3, 1, 1, 1, 2, 1, 1, 3, 2, 1, 2, 1, 3, 1, 2, 3, 2, 1, 3, 2, 1, 1,
        2, 2, 2, 1, 2, 1, 1, 2,
      ][index],
    }));

    const falseItems = [
      'answer2',
      'answer24',
      'answer56',
      'answer59',
      'answer70',
      'answer77',
      'answer86',
      'answer111',
      'answer143',
      'answer145',
      'answer146',
      'answer152',
    ].map((answer, index) => ({
      answer: this._selectedClient!.answers[answer],
      weight: [2, 1, 1, 2, 2, 2, 1, 1, 1, 2, 1, 1][index],
    }));

    this._resultScale1Gross = this._calculateGross(trueItems, falseItems);
    this._resultScale1BR = this._calculateBR(
      trueItems,
      falseItems,
      'scale1',
      this._resultScale1Gross,
      this._resultScale1BR
    );
  }

  private _scale2A(): void {
    const trueItems = [
      'answer13',
      'answer26',
      'answer31',
      'answer32',
      'answer35',
      'answer36',
      'answer38',
      'answer51',
      'answer64',
      'answer69',
      'answer71',
      'answer80',
      'answer84',
      'answer85',
      'answer87',
      'answer99',
      'answer100',
      'answer106',
      'answer116',
      'answer119',
      'answer127',
      'answer132',
      'answer140',
      'answer142',
      'answer153',
      'answer156',
    ].map((answer, index) => ({
      answer: this._selectedClient!.answers[answer],
      weight: [
        1, 1, 2, 2, 2, 2, 3, 1, 2, 2, 3, 2, 2, 1, 3, 3, 1, 3, 1, 2, 1, 1, 2, 3,
        2, 1,
      ][index],
    }));

    const falseItems = [
      'answer10',
      'answer18',
      'answer24',
      'answer59',
      'answer62',
      'answer68',
      'answer70',
      'answer77',
      'answer117',
      'answer143',
      'answer149',
    ].map((answer, index) => ({
      answer: this._selectedClient!.answers[answer],
      weight: [2, 1, 2, 2, 1, 1, 2, 1, 2, 2, 2][index],
    }));

    this._resultScale2AGross = this._calculateGross(trueItems, falseItems);
    this._resultScale2ABR = this._calculateBR(
      trueItems,
      falseItems,
      'scale2A',
      this._resultScale2AGross,
      this._resultScale2ABR
    );
  }

  private _scale2B(): void {
    const trueItems = [
      'answer19',
      'answer20',
      'answer25',
      'answer42',
      'answer43',
      'answer47',
      'answer54',
      'answer63',
      'answer64',
      'answer79',
      'answer84',
      'answer85',
      'answer91',
      'answer95',
      'answer98',
      'answer107',
      'answer110',
      'answer118',
      'answer121',
      'answer140',
      'answer147',
      'answer153',
      'answer154',
      'answer158',
    ].map((answer, index) => ({
      answer: this._selectedClient!.answers[answer],
      weight: [
        1, 3, 2, 2, 2, 3, 2, 1, 3, 1, 2, 1, 3, 2, 3, 2, 2, 2, 3, 1, 2, 3, 1, 1,
      ][index],
    }));

    const falseItems: any[] = [];

    this._resultScale2BGross = this._calculateGross(trueItems, falseItems);
    this._resultScale2BBR = this._calculateBR(
      trueItems,
      falseItems,
      'scale2B',
      this._resultScale2BGross,
      this._resultScale2BBR
    );
  }

  private _scale3(): void {
    const trueItems = [
      'answer1',
      'answer5',
      'answer6',
      'answer8',
      'answer9',
      'answer23',
      'answer29',
      'answer63',
      'answer71',
      'answer79',
      'answer81',
      'answer87',
      'answer93',
      'answer96',
      'answer102',
      'answer109',
      'answer113',
      'answer122',
      'answer130',
      'answer132',
      'answer151',
    ].map((answer, index) => ({
      answer: this._selectedClient!.answers[answer],
      weight: [3, 2, 2, 2, 2, 2, 2, 3, 2, 1, 1, 2, 1, 2, 3, 3, 3, 3, 1, 1, 3][
        index
      ],
    }));

    const falseItems = [
      'answer3',
      'answer4',
      'answer10',
      'answer18',
      'answer21',
      'answer28',
      'answer41',
      'answer44',
      'answer52',
      'answer60',
      'answer68',
      'answer75',
      'answer78',
      'answer88',
      'answer92',
      'answer97',
      'answer101',
      'answer117',
      'answer128',
      'answer131',
      'answer147',
      'answer148',
      'answer150',
      'answer155',
      'answer157',
      'answer158',
      'answer160',
    ].map((answer, index) => ({
      answer: this._selectedClient!.answers[answer],
      weight: [
        1, 1, 1, 1, 2, 2, 2, 1, 2, 1, 2, 1, 2, 1, 2, 2, 1, 1, 2, 2, 1, 1, 2, 1,
        2, 1, 1,
      ][index],
    }));

    this._resultScale3Gross = this._calculateGross(trueItems, falseItems);
    this._resultScale3BR = this._calculateBR(
      trueItems,
      falseItems,
      'scale3',
      this._resultScale3Gross,
      this._resultScale3BR
    );
  }

  private _scale4(): void {
    const trueItems = [
      'answer10',
      'answer24',
      'answer28',
      'answer40',
      'answer56',
      'answer59',
      'answer70',
      'answer75',
      'answer77',
      'answer86',
      'answer92',
      'answer101',
      'answer103',
      'answer111',
      'answer135',
      'answer143',
      'answer148',
    ].map((answer, index) => ({
      answer: this._selectedClient!.answers[answer],
      weight: [2, 3, 1, 1, 3, 3, 3, 1, 3, 2, 1, 2, 3, 1, 1, 1, 1][index],
    }));

    const falseItems = [
      'answer13',
      'answer19',
      'answer26',
      'answer31',
      'answer34',
      'answer35',
      'answer36',
      'answer38',
      'answer43',
      'answer47',
      'answer69',
      'answer84',
      'answer85',
      'answer87',
      'answer89',
      'answer99',
      'answer100',
      'answer106',
      'answer110',
      'answer119',
      'answer127',
      'answer132',
      'answer142',
      'answer153',
    ].map((answer, index) => ({
      answer: this._selectedClient!.answers[answer],
      weight: [
        1, 1, 1, 2, 1, 2, 1, 2, 1, 1, 2, 1, 2, 1, 1, 2, 1, 1, 1, 2, 1, 1, 2, 1,
      ][index],
    }));

    this._resultScale4Gross = this._calculateGross(trueItems, falseItems);
    this._resultScale4BR = this._calculateBR(
      trueItems,
      falseItems,
      'scale4',
      this._resultScale4Gross,
      this._resultScale4BR
    );
  }

  private _scale5(): void {
    const trueItems = [
      'answer2',
      'answer7',
      'answer10',
      'answer24',
      'answer39',
      'answer41',
      'answer52',
      'answer56',
      'answer59',
      'answer68',
      'answer70',
      'answer86',
      'answer94',
      'answer101',
      'answer103',
      'answer104',
      'answer131',
      'answer135',
      'answer139',
      'answer145',
      'answer146',
    ].map((answer, index) => ({
      answer: this._selectedClient!.answers[answer],
      weight: [1, 3, 2, 2, 1, 1, 3, 2, 1, 1, 1, 3, 1, 3, 2, 1, 1, 3, 1, 2, 3][
        index
      ],
    }));

    const falseItems = [
      'answer1',
      'answer19',
      'answer20',
      'answer25',
      'answer26',
      'answer31',
      'answer34',
      'answer38',
      'answer63',
      'answer69',
      'answer71',
      'answer84',
      'answer91',
      'answer99',
      'answer115',
      'answer127',
      'answer140',
      'answer151',
    ].map((answer, index) => ({
      answer: this._selectedClient!.answers[answer],
      weight: [1, 1, 1, 1, 1, 2, 1, 2, 2, 2, 1, 2, 1, 2, 1, 2, 2, 1][index],
    }));

    this._resultScale5Gross = this._calculateGross(trueItems, falseItems);
    this._resultScale5BR = this._calculateBR(
      trueItems,
      falseItems,
      'scale5',
      this._resultScale5Gross,
      this._resultScale5BR
    );
  }

  private _scale6A(): void {
    const trueItems = [
      'answer18',
      'answer21',
      'answer28',
      'answer39',
      'answer41',
      'answer44',
      'answer52',
      'answer57',
      'answer58',
      'answer59',
      'answer68',
      'answer73',
      'answer76',
      'answer77',
      'answer92',
      'answer104',
      'answer111',
      'answer117',
      'answer120',
      'answer135',
      'answer143',
      'answer148',
      'answer149',
      'answer150',
      'answer152',
      'answer155',
    ].map((answer, index) => ({
      answer: this._selectedClient!.answers[answer],
      weight: [
        2, 3, 2, 3, 2, 2, 1, 2, 3, 1, 2, 2, 3, 2, 3, 2, 2, 3, 1, 1, 2, 3, 2, 1,
        1, 3,
      ][index],
    }));

    const falseItems = [
      'answer5',
      'answer8',
      'answer9',
      'answer15',
      'answer23',
      'answer45',
      'answer51',
      'answer84',
      'answer93',
      'answer96',
      'answer99',
      'answer116',
      'answer132',
    ].map((answer, index) => ({
      answer: this._selectedClient!.answers[answer],
      weight: [2, 2, 2, 2, 2, 2, 1, 1, 2, 1, 1, 1, 2][index],
    }));

    this._resultScale6AGross = this._calculateGross(trueItems, falseItems);
    this._resultScale6ABR = this._calculateBR(
      trueItems,
      falseItems,
      'scale6A',
      this._resultScale6AGross,
      this._resultScale6ABR
    );
  }

  private _scale6B(): void {
    const trueItems = [
      'answer18',
      'answer21',
      'answer28',
      'answer41',
      'answer52',
      'answer60',
      'answer74',
      'answer78',
      'answer97',
      'answer104',
      'answer117',
      'answer128',
      'answer139',
      'answer148',
      'answer149',
      'answer152',
      'answer157',
    ].map((answer, index) => ({
      answer: this._selectedClient!.answers[answer],
      weight: [1, 2, 3, 3, 2, 2, 1, 3, 3, 2, 2, 3, 3, 2, 2, 1, 3][index],
    }));

    const falseItems = [
      'answer5',
      'answer9',
      'answer50',
      'answer71',
      'answer81',
    ].map((answer, index) => ({
      answer: this._selectedClient!.answers[answer],
      weight: [2, 1, 1, 1, 2][index],
    }));

    this._resultScale6BGross = this._calculateGross(trueItems, falseItems);
    this._resultScale6BBR = this._calculateBR(
      trueItems,
      falseItems,
      'scale6B',
      this._resultScale6BGross,
      this._resultScale6BBR
    );
  }

  private _scale7(): void {
    const trueItems = [
      'answer6',
      'answer9',
      'answer15',
      'answer23',
      'answer27',
      'answer50',
      'answer93',
      'answer96',
      'answer130',
      'answer145',
      'answer159',
    ].map((answer, index) => ({
      answer: this._selectedClient!.answers[answer],
      weight: [1, 3, 2, 3, 1, 3, 3, 3, 3, 2, 3][index],
    }));

    const falseItems = [
      'answer4',
      'answer18',
      'answer19',
      'answer21',
      'answer28',
      'answer34',
      'answer42',
      'answer43',
      'answer53',
      'answer58',
      'answer73',
      'answer74',
      'answer76',
      'answer78',
      'answer90',
      'answer97',
      'answer100',
      'answer104',
      'answer107',
      'answer110',
      'answer117',
      'answer118',
      'answer133',
      'answer148',
      'answer149',
      'answer150',
      'answer154',
      'answer157',
    ].map((answer, index) => ({
      answer: this._selectedClient!.answers[answer],
      weight: [
        1, 2, 1, 2, 1, 1, 2, 1, 2, 1, 2, 2, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1,
        1, 2, 2, 1,
      ][index],
    }));

    this._resultScale7Gross = this._calculateGross(trueItems, falseItems);
    this._resultScale7BR = this._calculateBR(
      trueItems,
      falseItems,
      'scale7',
      this._resultScale7Gross,
      this._resultScale7BR
    );
  }

  private _scale8A(): void {
    const trueItems = [
      'answer4',
      'answer16',
      'answer18',
      'answer19',
      'answer22',
      'answer25',
      'answer28',
      'answer34',
      'answer37',
      'answer39',
      'answer41',
      'answer49',
      'answer54',
      'answer57',
      'answer66',
      'answer67',
      'answer70',
      'answer73',
      'answer78',
      'answer88',
      'answer90',
      'answer91',
      'answer95',
      'answer97',
      'answer105',
      'answer107',
      'answer110',
      'answer117',
      'answer118',
      'answer127',
      'answer128',
      'answer134',
      'answer136',
      'answer147',
      'answer148',
      'answer149',
      'answer157',
      'answer158',
    ].map((answer, index) => ({
      answer: this._selectedClient!.answers[answer],
      weight: [
        3, 1, 1, 2, 1, 3, 1, 1, 2, 2, 1, 1, 2, 1, 2, 3, 1, 2, 2, 2, 1, 2, 2, 2,
        1, 2, 3, 2, 3, 1, 1, 1, 3, 2, 1, 2, 2, 1,
      ][index],
    }));

    const falseItems = [
      'answer5',
      'answer23',
      'answer45',
      'answer96',
      'answer130',
    ].map((answer, index) => ({
      answer: this._selectedClient!.answers[answer],
      weight: [1, 2, 1, 1, 2][index],
    }));

    this._resultScale8AGross = this._calculateGross(trueItems, falseItems);
    this._resultScale8ABR = this._calculateBR(
      trueItems,
      falseItems,
      'scale8A',
      this._resultScale8AGross,
      this._resultScale8ABR
    );
  }

  private _scale8B(): void {
    const trueItems = [
      'answer18',
      'answer19',
      'answer20',
      'answer25',
      'answer26',
      'answer33',
      'answer34',
      'answer35',
      'answer46',
      'answer54',
      'answer64',
      'answer66',
      'answer71',
      'answer74',
      'answer80',
      'answer84',
      'answer88',
      'answer89',
      'answer99',
      'answer106',
      'answer107',
      'answer108',
      'answer110',
      'answer112',
      'answer118',
      'answer121',
      'answer127',
      'answer132',
      'answer133',
      'answer136',
      'answer137',
      'answer140',
      'answer141',
      'answer149',
      'answer151',
      'answer153',
      'answer156',
      'answer158',
      'answer160',
    ].map((answer, index) => ({
      answer: this._selectedClient!.answers[answer],
      weight: [
        1, 3, 2, 1, 1, 1, 2, 1, 3, 1, 1, 3, 1, 1, 3, 2, 1, 3, 2, 2, 1, 3, 2, 2,
        1, 1, 2, 1, 1, 1, 2, 2, 3, 1, 2, 1, 1, 2, 3,
      ][index],
    }));

    const falseItems = [
      'answer2',
      'answer6',
      'answer10',
      'answer27',
      'answer68',
    ].map((answer, index) => ({
      answer: this._selectedClient!.answers[answer],
      weight: [2, 1, 1, 1, 2][index],
    }));

    this._resultScale8BGross = this._calculateGross(trueItems, falseItems);
    this._resultScale8BBR = this._calculateBR(
      trueItems,
      falseItems,
      'scale8B',
      this._resultScale8BGross,
      this._resultScale8BBR
    );
  }

  private _scale9(): void {
    const trueItems = [
      'answer4',
      'answer18',
      'answer34',
      'answer44',
      'answer54',
      'answer63',
      'answer64',
      'answer78',
      'answer84',
      'answer88',
      'answer104',
      'answer107',
      'answer115',
      'answer117',
      'answer121',
      'answer141',
      'answer149',
      'answer153',
      'answer154',
    ].map((answer, index) => ({
      answer: this._selectedClient!.answers[answer],
      weight: [2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2][index],
    }));

    const falseItems = ['answer2', 'answer145'].map((answer, index) => ({
      answer: this._selectedClient!.answers[answer],
      weight: [2, 2][index],
    }));

    this._resultScale9Gross = this._calculateGross(trueItems, falseItems);
    this._resultScale9BR = this._calculateBR(
      trueItems,
      falseItems,
      'scale9',
      this._resultScale9Gross,
      this._resultScale9BR
    );
  }

  private _scaleA(): void {
    const trueItems = [
      'answer3',
      'answer12',
      'answer17',
      'answer20',
      'answer29',
      'answer34',
      'answer41',
      'answer42',
      'answer47',
      'answer49',
      'answer52',
      'answer66',
      'answer71',
      'answer88',
      'answer95',
      'answer115',
      'answer118',
      'answer120',
      'answer122',
      'answer134',
      'answer141',
      'answer146',
      'answer147',
      'answer154',
      'answer155',
    ].map((answer, index) => ({
      answer: this._selectedClient!.answers[answer],
      weight: [
        1, 2, 1, 1, 1, 3, 1, 1, 2, 1, 2, 1, 1, 2, 1, 3, 2, 1, 2, 1, 1, 1, 1, 3,
        2,
      ][index],
    }));

    const falseItems = [
      'answer2',
      'answer9',
      'answer11',
      'answer70',
      'answer130',
      'answer135',
      'answer145',
    ].map((answer, index) => ({
      answer: this._selectedClient!.answers[answer],
      weight: [3, 1, 1, 1, 1, 1, 3][index],
    }));

    this._resultScaleAGross = this._calculateGross(trueItems, falseItems);
    this._resultScaleABR = this._calculateBR(
      trueItems,
      falseItems,
      'scaleA',
      this._resultScaleAGross,
      this._resultScaleABR
    );
  }

  private _scaleB(): void {
    const trueItems = [
      'answer4',
      'answer19',
      'answer20',
      'answer25',
      'answer26',
      'answer31',
      'answer35',
      'answer38',
      'answer42',
      'answer46',
      'answer47',
      'answer63',
      'answer69',
      'answer71',
      'answer80',
      'answer82',
      'answer84',
      'answer87',
      'answer99',
      'answer106',
      'answer107',
      'answer109',
      'answer110',
      'answer112',
      'answer115',
      'answer118',
      'answer119',
      'answer121',
      'answer125',
      'answer127',
      'answer140',
      'answer141',
      'answer151',
      'answer153',
    ].map((answer, index) => ({
      answer: this._selectedClient!.answers[answer],
      weight: [
        2, 2, 1, 2, 3, 2, 2, 2, 3, 1, 2, 1, 1, 2, 2, 1, 3, 2, 2, 1, 2, 1, 1, 2,
        1, 1, 1, 1, 1, 3, 3, 2, 2, 2,
      ][index],
    }));

    const falseItems = ['answer10', 'answer68', 'answer131', 'answer145'].map(
      (answer, index) => ({
        answer: this._selectedClient!.answers[answer],
        weight: [2, 2, 2, 1][index],
      })
    );

    this._resultScaleBGross = this._calculateGross(trueItems, falseItems);
    this._resultScaleBBR = this._calculateBR(
      trueItems,
      falseItems,
      'scaleB',
      this._resultScaleBGross,
      this._resultScaleBBR
    );
  }

  private _scaleC(): void {
    const trueItems = [
      'answer11',
      'answer14',
      'answer26',
      'answer29',
      'answer31',
      'answer48',
      'answer65',
      'answer99',
      'answer105',
      'answer112',
      'answer123',
      'answer124',
      'answer138',
      'answer144',
    ].map((answer, index) => ({
      answer: this._selectedClient!.answers[answer],
      weight: [1, 1, 1, 2, 3, 2, 2, 2, 1, 3, 1, 1, 1, 2][index],
    }));

    const falseItems = ['answer10', 'answer68', 'answer131'].map(
      (answer, index) => ({
        answer: this._selectedClient!.answers[answer],
        weight: [3, 3, 3][index],
      })
    );

    this._resultScaleCGross = this._calculateGross(trueItems, falseItems);
    this._resultScaleCBR = this._calculateBR(
      trueItems,
      falseItems,
      'scaleC',
      this._resultScaleCGross,
      this._resultScaleCBR
    );
  }

  private _scaleD(): void {
    const trueItems = [
      'answer2',
      'answer5',
      'answer9',
      'answer14',
      'answer29',
      'answer31',
      'answer51',
      'answer72',
      'answer93',
      'answer99',
      'answer116',
      'answer129',
      'answer137',
    ].map((answer, index) => ({
      answer: this._selectedClient!.answers[answer],
      weight: [1, 1, 1, 2, 1, 1, 3, 1, 1, 1, 3, 2, 2][index],
    }));

    const falseItems = [
      'answer7',
      'answer19',
      'answer22',
      'answer24',
      'answer43',
      'answer52',
      'answer55',
      'answer57',
      'answer59',
      'answer61',
      'answer62',
      'answer76',
      'answer83',
      'answer94',
      'answer97',
      'answer118',
      'answer121',
      'answer131',
      'answer136',
      'answer143',
      'answer147',
      'answer150',
      'answer157',
      'answer160',
    ].map((answer, index) => ({
      answer: this._selectedClient!.answers[answer],
      weight: [
        1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 3, 2, 1, 3, 1, 2, 1, 1, 1, 3, 1, 2, 2, 2,
      ][index],
    }));

    this._resultScaleDGross = this._calculateGross(trueItems, falseItems);
    this._resultScaleDBR = this._calculateBR(
      trueItems,
      falseItems,
      'scaleD',
      this._resultScaleDGross,
      this._resultScaleDBR
    );
  }

  private _scaleE(): void {
    const trueItems = [
      'answer13',
      'answer32',
      'answer35',
      'answer36',
      'answer38',
      'answer64',
      'answer66',
      'answer69',
      'answer85',
      'answer96',
      'answer106',
      'answer119',
      'answer142',
    ].map((answer, index) => ({
      answer: this._selectedClient!.answers[answer],
      weight: [3, 2, 3, 1, 2, 1, 1, 3, 1, 1, 2, 3, 2][index],
    }));

    const falseItems = [
      'answer24',
      'answer58',
      'answer70',
      'answer74',
      'answer104',
      'answer148',
    ].map((answer, index) => ({
      answer: this._selectedClient!.answers[answer],
      weight: [2, 1, 2, 1, 1, 2][index],
    }));

    this._resultScaleEGross = this._calculateGross(trueItems, falseItems);
    this._resultScaleEBR = this._calculateBR(
      trueItems,
      falseItems,
      'scaleE',
      this._resultScaleEGross,
      this._resultScaleEBR
    );
  }

  private _scaleF(): void {
    const trueItems = [
      'answer10',
      'answer18',
      'answer21',
      'answer28',
      'answer37',
      'answer39',
      'answer41',
      'answer49',
      'answer52',
      'answer57',
      'answer60',
      'answer68',
      'answer78',
      'answer86',
      'answer94',
      'answer104',
      'answer111',
      'answer117',
      'answer128',
      'answer135',
      'answer143',
      'answer146',
      'answer157',
    ].map((answer, index) => ({
      answer: this._selectedClient!.answers[answer],
      weight: [
        1, 1, 1, 1, 3, 2, 2, 3, 2, 1, 3, 2, 1, 1, 1, 2, 2, 2, 2, 2, 1, 1, 2,
      ][index],
    }));

    const falseItems = [
      'answer5',
      'answer14',
      'answer15',
      'answer20',
      'answer26',
      'answer38',
      'answer45',
      'answer51',
      'answer63',
      'answer71',
      'answer81',
      'answer84',
      'answer99',
      'answer127',
      'answer140',
      'answer153',
    ].map((answer, index) => ({
      answer: this._selectedClient!.answers[answer],
      weight: [3, 1, 2, 1, 2, 1, 2, 1, 1, 1, 3, 2, 2, 2, 1, 1][index],
    }));

    this._resultScaleFGross = this._calculateGross(trueItems, falseItems);
    this._resultScaleFBR = this._calculateBR(
      trueItems,
      falseItems,
      'scaleF',
      this._resultScaleFGross,
      this._resultScaleFBR
    );
  }

  private _scaleG(): void {
    const trueItems = [
      'answer18',
      'answer21',
      'answer22',
      'answer24',
      'answer53',
      'answer56',
      'answer64',
      'answer70',
      'answer74',
      'answer77',
      'answer83',
      'answer92',
      'answer95',
      'answer103',
      'answer135',
      'answer148',
      'answer149',
      'answer158',
    ].map((answer, index) => ({
      answer: this._selectedClient!.answers[answer],
      weight: [1, 1, 1, 1, 3, 1, 2, 1, 1, 1, 3, 2, 2, 1, 1, 2, 2, 3][index],
    }));

    const falseItems = [
      'answer6',
      'answer9',
      'answer13',
      'answer17',
      'answer23',
      'answer27',
      'answer35',
      'answer36',
      'answer96',
      'answer142',
    ].map((answer, index) => ({
      answer: this._selectedClient!.answers[answer],
      weight: [3, 1, 1, 1, 1, 3, 1, 1, 2, 1][index],
    }));

    this._resultScaleGGross = this._calculateGross(trueItems, falseItems);
    this._resultScaleGBR = this._calculateBR(
      trueItems,
      falseItems,
      'scaleG',
      this._resultScaleGGross,
      this._resultScaleGBR
    );
  }

  private _scaleH(): void {
    const trueItems = [
      'answer14',
      'answer22',
      'answer25',
      'answer33',
      'answer34',
      'answer35',
      'answer40',
      'answer54',
      'answer63',
      'answer64',
      'answer72',
      'answer83',
      'answer90',
      'answer106',
      'answer110',
      'answer123',
      'answer125',
      'answer129',
      'answer137',
      'answer153',
      'answer158',
    ].map((answer, index) => ({
      answer: this._selectedClient!.answers[answer],
      weight: [3, 1, 1, 1, 1, 1, 1, 2, 1, 1, 3, 1, 1, 2, 1, 1, 1, 3, 3, 1, 2][
        index
      ],
    }));

    const falseItems = ['answer6', 'answer45', 'answer55'].map(
      (answer, index) => ({
        answer: this._selectedClient!.answers[answer],
        weight: [1, 1, 3][index],
      })
    );

    this._resultScaleHGross = this._calculateGross(trueItems, falseItems);
    this._resultScaleHBR = this._calculateBR(
      trueItems,
      falseItems,
      'scaleH',
      this._resultScaleHGross,
      this._resultScaleHBR
    );
  }

  private _scaleAA(): void {
    const trueItems = [
      'answer11',
      'answer26',
      'answer29',
      'answer31',
      'answer33',
      'answer48',
      'answer63',
      'answer65',
      'answer71',
      'answer82',
      'answer84',
      'answer105',
      'answer112',
      'answer124',
      'answer127',
      'answer138',
      'answer144',
    ].map((answer, index) => ({
      answer: this._selectedClient!.answers[answer],
      weight: [3, 1, 3, 1, 3, 3, 1, 3, 1, 3, 1, 3, 2, 3, 1, 3, 3][index],
    }));

    const falseItems = ['answer10', 'answer68', 'answer131'].map(
      (answer, index) => ({
        answer: this._selectedClient!.answers[answer],
        weight: [2, 2, 2][index],
      })
    );

    this._resultScaleAAGross = this._calculateGross(trueItems, falseItems);
    this._resultScaleAABR = this._calculateBR(
      trueItems,
      falseItems,
      'scaleAA',
      this._resultScaleAAGross,
      this._resultScaleAABR
    );
  }

  private _scaleBB(): void {
    const trueItems = [
      'answer4',
      'answer18',
      'answer21',
      'answer22',
      'answer30',
      'answer40',
      'answer43',
      'answer44',
      'answer52',
      'answer57',
      'answer61',
      'answer73',
      'answer74',
      'answer75',
      'answer76',
      'answer78',
      'answer90',
      'answer92',
      'answer97',
      'answer104',
      'answer111',
      'answer117',
      'answer120',
      'answer134',
      'answer139',
      'answer141',
      'answer148',
      'answer150',
      'answer152',
    ].map((answer, index) => ({
      answer: this._selectedClient!.answers[answer],
      weight: [
        1, 2, 2, 3, 3, 3, 1, 1, 2, 3, 2, 1, 1, 3, 1, 1, 3, 1, 1, 2, 2, 1, 3, 3,
        1, 1, 1, 2, 3,
      ][index],
    }));

    const falseItems = [
      'answer5',
      'answer8',
      'answer9',
      'answer15',
      'answer23',
      'answer45',
    ].map((answer, index) => ({
      answer: this._selectedClient!.answers[answer],
      weight: [1, 3, 2, 2, 1, 1][index],
    }));

    this._resultScaleBBGross = this._calculateGross(trueItems, falseItems);
    this._resultScaleBBBR = this._calculateBR(
      trueItems,
      falseItems,
      'scaleBB',
      this._resultScaleBBGross,
      this._resultScaleBBBR
    );
  }

  private _scaleCC(): void {
    const trueItems = [
      'answer10',
      'answer12',
      'answer21',
      'answer28',
      'answer41',
      'answer68',
      'answer73',
      'answer76',
      'answer78',
      'answer92',
      'answer94',
      'answer111',
      'answer117',
      'answer148',
      'answer150',
      'answer152',
      'answer155',
    ].map((answer, index) => ({
      answer: this._selectedClient!.answers[answer],
      weight: [1, 1, 2, 1, 1, 1, 3, 1, 1, 1, 1, 3, 2, 2, 3, 1, 1][index],
    }));

    const falseItems = [
      'answer5',
      'answer8',
      'answer15',
      'answer26',
      'answer32',
      'answer45',
      'answer46',
      'answer65',
      'answer69',
      'answer71',
      'answer81',
      'answer84',
      'answer99',
      'answer106',
      'answer125',
      'answer127',
      'answer140',
    ].map((answer, index) => ({
      answer: this._selectedClient!.answers[answer],
      weight: [1, 1, 3, 1, 1, 3, 1, 1, 1, 2, 1, 2, 2, 2, 2, 1, 1][index],
    }));

    this._resultScaleCCGross = this._calculateGross(trueItems, falseItems);
    this._resultScaleCCBR = this._calculateBR(
      trueItems,
      falseItems,
      'scaleCC',
      this._resultScaleCCGross,
      this._resultScaleCCBR
    );
  }

  private _scaleDD(): void {
    const trueItems = [
      'answer18',
      'answer19',
      'answer21',
      'answer44',
      'answer53',
      'answer68',
      'answer73',
      'answer74',
      'answer77',
      'answer86',
      'answer92',
      'answer104',
      'answer117',
      'answer131',
      'answer143',
      'answer146',
      'answer148',
      'answer149',
    ].map((answer, index) => ({
      answer: this._selectedClient!.answers[answer],
      weight: [3, 1, 1, 3, 1, 1, 2, 3, 1, 1, 1, 3, 2, 1, 1, 1, 2, 3][index],
    }));

    const falseItems = [
      'answer15',
      'answer17',
      'answer23',
      'answer27',
      'answer45',
      'answer99',
    ].map((answer, index) => ({
      answer: this._selectedClient!.answers[answer],
      weight: [1, 1, 2, 1, 1, 1][index],
    }));

    this._resultScaleDDGross = this._calculateGross(trueItems, falseItems);
    this._resultScaleDDBR = this._calculateBR(
      trueItems,
      falseItems,
      'scaleDD',
      this._resultScaleDDGross,
      this._resultScaleDDBR
    );
  }

  private _scaleEE(): void {
    const trueItems = [
      'answer8',
      'answer15',
      'answer17',
      'answer23',
      'answer32',
      'answer45',
      'answer63',
      'answer71',
      'answer79',
      'answer99',
      'answer109',
      'answer132',
      'answer133',
    ].map((answer, index) => ({
      answer: this._selectedClient!.answers[answer],
      weight: [1, 1, 3, 1, 3, 1, 2, 2, 3, 2, 1, 3, 3][index],
    }));

    const falseItems = [
      'answer3',
      'answer18',
      'answer21',
      'answer39',
      'answer40',
      'answer41',
      'answer44',
      'answer49',
      'answer57',
      'answer58',
      'answer68',
      'answer73',
      'answer74',
      'answer75',
      'answer76',
      'answer78',
      'answer90',
      'answer92',
      'answer94',
      'answer97',
      'answer104',
      'answer111',
      'answer117',
      'answer120',
      'answer143',
      'answer148',
      'answer150',
      'answer152',
      'answer157',
    ].map((answer, index) => ({
      answer: this._selectedClient!.answers[answer],
      weight: [
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1,
        1, 1, 1, 1, 1,
      ][index],
    }));

    this._resultScaleEEGross = this._calculateGross(trueItems, falseItems);
    this._resultScaleEEBR = this._calculateBR(
      trueItems,
      falseItems,
      'scaleEE',
      this._resultScaleEEGross,
      this._resultScaleEEBR
    );
  }

  private _scaleFF(): void {
    const trueItems = [
      'answer1',
      'answer15',
      'answer16',
      'answer26',
      'answer31',
      'answer42',
      'answer43',
      'answer45',
      'answer63',
      'answer64',
      'answer69',
      'answer71',
      'answer80',
      'answer84',
      'answer95',
      'answer98',
      'answer99',
      'answer106',
      'answer107',
      'answer112',
      'answer118',
      'answer125',
      'answer127',
      'answer133',
      'answer141',
      'answer142',
      'answer147',
      'answer153',
    ].map((answer, index) => ({
      answer: this._selectedClient!.answers[answer],
      weight: [
        1, 1, 3, 2, 1, 2, 3, 1, 2, 2, 1, 2, 2, 2, 3, 1, 2, 2, 1, 1, 1, 3, 1, 1,
        1, 2, 3, 2,
      ][index],
    }));

    const falseItems = [
      'answer10',
      'answer39',
      'answer77',
      'answer111',
      'answer131',
    ].map((answer, index) => ({
      answer: this._selectedClient!.answers[answer],
      weight: [2, 1, 1, 2, 1][index],
    }));

    this._resultScaleFFGross = this._calculateGross(trueItems, falseItems);
    this._resultScaleFFBR = this._calculateBR(
      trueItems,
      falseItems,
      'scaleFF',
      this._resultScaleFFGross,
      this._resultScaleFFBR
    );
  }

  private _scaleGG(): void {
    const trueItems = [
      'answer14',
      'answer16',
      'answer19',
      'answer25',
      'answer26',
      'answer34',
      'answer43',
      'answer54',
      'answer64',
      'answer84',
      'answer85',
      'answer88',
      'answer89',
      'answer95',
      'answer107',
      'answer110',
      'answer112',
      'answer123',
      'answer127',
      'answer129',
      'answer136',
      'answer140',
      'answer147',
      'answer156',
    ].map((answer, index) => ({
      answer: this._selectedClient!.answers[answer],
      weight: [
        1, 2, 1, 2, 1, 1, 2, 3, 2, 1, 1, 3, 1, 2, 3, 1, 1, 3, 1, 1, 1, 1, 2, 3,
      ][index],
    }));

    const falseItems = ['answer55'].map((answer, index) => ({
      answer: this._selectedClient!.answers[answer],
      weight: [1][index],
    }));

    this._resultScaleGGGross = this._calculateGross(trueItems, falseItems);
    this._resultScaleGGBR = this._calculateBR(
      trueItems,
      falseItems,
      'scaleGG',
      this._resultScaleGGGross,
      this._resultScaleGGBR
    );
  }
}
