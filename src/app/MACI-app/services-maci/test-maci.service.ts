import { Injectable, inject } from '@angular/core';
import { AnswersMaci } from '../shared-maci/answers-maci';

import { TableReferenceMaciService } from './table-reference-maci.service';
import { AnswersMaciService } from './answers-maci.service';

@Injectable({
  providedIn: 'root',
})
export class TestMaciService {
  tableReferenceMaciService = inject(TableReferenceMaciService);
  answersMaciService = inject(AnswersMaciService);

  name: string = '';
  gender: string = '';
  age: number = 0;

  isMale: boolean = false;
  isFemale: boolean = false;

  startTest: boolean = false;
  results: boolean = false;

  resultScaleXGross: number = 0;
  resultScaleXGrossRounded: number = 0;
  resultScaleXBR: number = 0;
  resultScaleYGross: number = 0;
  resultScaleYBR: number = 0;
  resultScaleZGross: number = 0;
  resultScaleZBR: number = 0;

  resultScale1Gross: number = 0;
  resultScale1BR: number = 0;
  resultScale2AGross: number = 0;
  resultScale2ABR: number = 0;
  resultScale2BGross: number = 0;
  resultScale2BBR: number = 0;
  resultScale3Gross: number = 0;
  resultScale3BR: number = 0;
  resultScale4Gross: number = 0;
  resultScale4BR: number = 0;
  resultScale5Gross: number = 0;
  resultScale5BR: number = 0;
  resultScale6AGross: number = 0;
  resultScale6ABR: number = 0;
  resultScale6BGross: number = 0;
  resultScale6BBR: number = 0;
  resultScale7Gross: number = 0;
  resultScale7BR: number = 0;
  resultScale8AGross: number = 0;
  resultScale8ABR: number = 0;
  resultScale8BGross: number = 0;
  resultScale8BBR: number = 0;
  resultScale9Gross: number = 0;
  resultScale9BR: number = 0;
  resultScaleAGross: number = 0;
  resultScaleABR: number = 0;
  resultScaleBGross: number = 0;
  resultScaleBBR: number = 0;
  resultScaleCGross: number = 0;
  resultScaleCBR: number = 0;
  resultScaleDGross: number = 0;
  resultScaleDBR: number = 0;
  resultScaleEGross: number = 0;
  resultScaleEBR: number = 0;
  resultScaleFGross: number = 0;
  resultScaleFBR: number = 0;
  resultScaleGGross: number = 0;
  resultScaleGBR: number = 0;
  resultScaleHGross: number = 0;
  resultScaleHBR: number = 0;
  resultScaleAAGross: number = 0;
  resultScaleAABR: number = 0;
  resultScaleBBGross: number = 0;
  resultScaleBBBR: number = 0;
  resultScaleCCGross: number = 0;
  resultScaleCCBR: number = 0;
  resultScaleDDGross: number = 0;
  resultScaleDDBR: number = 0;
  resultScaleEEGross: number = 0;
  resultScaleEEBR: number = 0;
  resultScaleFFGross: number = 0;
  resultScaleFFBR: number = 0;
  resultScaleGGGross: number = 0;
  resultScaleGGBR: number = 0;

  isMaleBtn() {
    this.isMale = true;
    this.gender = 'Masculin';
    this.isFemale = false;
  }

  isFemaleBtn() {
    this.isFemale = true;
    this.gender = 'Feminin';
    this.isMale = false;
  }

  setAge(value: number) {
    this.age = value;
  }

  calculateScores() {
    this.scale1();
    this.scale2A();
    this.scale2B();
    this.scale3();
    this.scale4();
    this.scale5();
    this.scale6A();
    this.scale6B();
    this.scale7();
    this.scale8A();
    this.scale8B();
    this.scale9();
    this.scaleA();
    this.scaleB();
    this.scaleC();
    this.scaleD();
    this.scaleE();
    this.scaleF();
    this.scaleG();
    this.scaleH();
    this.scaleAA();
    this.scaleBB();
    this.scaleCC();
    this.scaleDD();
    this.scaleEE();
    this.scaleFF();
    this.scaleGG();
    this.scaleY();
    this.scaleZ();
    this.scaleX();
  }

  startTestBtn() {
    this.startTest = true;
  }

  calculateScoresBtn() {
    this.results = true;
    this.calculateScores();
  }

  reset() {
    this.answersMaciService.clearAnswers();
    this.name = '';
    this.gender = '';
    this.age = 0;
    this.isFemale = false;
    this.isMale = false;
    this.results = false;
    this.startTest = false;

    this.resultScaleXGross = 0;
    this.resultScaleXGrossRounded = 0;
    this.resultScaleXBR = 0;
    this.resultScaleYGross = 0;
    this.resultScaleYBR = 0;
    this.resultScaleZGross = 0;
    this.resultScaleZBR = 0;

    this.resultScale1Gross = 0;
    this.resultScale1BR = 0;
    this.resultScale2AGross = 0;
    this.resultScale2ABR = 0;
    this.resultScale2BGross = 0;
    this.resultScale2BBR = 0;
    this.resultScale3Gross = 0;
    this.resultScale3BR = 0;
    this.resultScale4Gross = 0;
    this.resultScale4BR = 0;
    this.resultScale5Gross = 0;
    this.resultScale5BR = 0;
    this.resultScale6AGross = 0;
    this.resultScale6ABR = 0;
    this.resultScale6BGross = 0;
    this.resultScale6BBR = 0;
    this.resultScale7Gross = 0;
    this.resultScale7BR = 0;
    this.resultScale8AGross = 0;
    this.resultScale8ABR = 0;
    this.resultScale8BGross = 0;
    this.resultScale8BBR = 0;
    this.resultScale9Gross = 0;
    this.resultScale9BR = 0;
    this.resultScaleAGross = 0;
    this.resultScaleABR = 0;
    this.resultScaleBGross = 0;
    this.resultScaleBBR = 0;
    this.resultScaleCGross = 0;
    this.resultScaleCBR = 0;
    this.resultScaleDGross = 0;
    this.resultScaleDBR = 0;
    this.resultScaleEGross = 0;
    this.resultScaleEBR = 0;
    this.resultScaleFGross = 0;
    this.resultScaleFBR = 0;
    this.resultScaleGGross = 0;
    this.resultScaleGBR = 0;
    this.resultScaleHGross = 0;
    this.resultScaleHBR = 0;
    this.resultScaleAAGross = 0;
    this.resultScaleAABR = 0;
    this.resultScaleBBGross = 0;
    this.resultScaleBBBR = 0;
    this.resultScaleCCGross = 0;
    this.resultScaleCCBR = 0;
    this.resultScaleDDGross = 0;
    this.resultScaleDDBR = 0;
    this.resultScaleEEGross = 0;
    this.resultScaleEEBR = 0;
    this.resultScaleFFGross = 0;
    this.resultScaleFFBR = 0;
    this.resultScaleGGGross = 0;
    this.resultScaleGGBR = 0;
  }

  private calculateGross(trueItems: any, falseItems: any) {
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

  private calculateBR(
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
    resultScaleGross = this.calculateGross(trueItems, falseItems);

    if (this.isMale && this.age >= 13 && this.age <= 15) {
      resultScaleBR =
        this.tableReferenceMaciService.Male['age13to15'][scale][
          `gross${resultScaleGross}` as keyof (typeof this.tableReferenceMaciService.Male.age13to15)[typeof scale]
        ];
    }
    if (this.isMale && this.age >= 16 && this.age <= 19) {
      resultScaleBR =
        this.tableReferenceMaciService.Male['age16to19'][scale][
          `gross${resultScaleGross}` as keyof (typeof this.tableReferenceMaciService.Male.age16to19)[typeof scale]
        ];
    }
    if (this.isFemale && this.age >= 13 && this.age <= 15) {
      resultScaleBR =
        this.tableReferenceMaciService.Female['age13to15'][scale][
          `gross${resultScaleGross}` as keyof (typeof this.tableReferenceMaciService.Female.age13to15)[typeof scale]
        ];
    }
    if (this.isFemale && this.age >= 16 && this.age <= 19) {
      resultScaleBR =
        this.tableReferenceMaciService.Female['age16to19'][scale][
          `gross${resultScaleGross}` as keyof (typeof this.tableReferenceMaciService.Female.age16to19)[typeof scale]
        ];
    }
    return resultScaleBR;
  }

  scaleX() {
    this.resultScaleXGross =
      (this.resultScale1Gross + this.resultScale2AGross) * 1.5 +
      (this.resultScale3Gross +
        this.resultScale4Gross +
        this.resultScale7Gross) *
        0.7 +
      this.resultScale2BGross * 2 +
      this.resultScale6BGross * 3 +
      this.resultScale5Gross +
      this.resultScale6AGross +
      this.resultScale8AGross +
      this.resultScale8BGross;

    this.resultScaleXGrossRounded = Math.round(this.resultScaleXGross);

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
        this.resultScaleXGrossRounded >= range.min &&
        this.resultScaleXGrossRounded <= range.max
      ) {
        this.resultScaleXBR = range.value;
        break;
      }
    }
  }

  scaleY() {
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
      answer: AnswersMaci[answer],
      weight: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1][index],
    }));

    const falseItems: any[] = [];

    this.resultScaleYGross = this.calculateGross(trueItems, falseItems);
    this.resultScaleYBR = this.calculateBR(
      trueItems,
      falseItems,
      'scaleY',
      this.resultScaleYGross,
      this.resultScaleYBR
    );
  }

  scaleZ() {
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
      answer: AnswersMaci[answer],
      weight: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1][index],
    }));

    const falseItems: any[] = [];

    this.resultScaleZGross = this.calculateGross(trueItems, falseItems);
    this.resultScaleZBR = this.calculateBR(
      trueItems,
      falseItems,
      'scaleZ',
      this.resultScaleZGross,
      this.resultScaleZBR
    );
  }

  scale1() {
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
      answer: AnswersMaci[answer],
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
      answer: AnswersMaci[answer],
      weight: [2, 1, 1, 2, 2, 2, 1, 1, 1, 2, 1, 1][index],
    }));

    this.resultScale1Gross = this.calculateGross(trueItems, falseItems);
    this.resultScale1BR = this.calculateBR(
      trueItems,
      falseItems,
      'scale1',
      this.resultScale1Gross,
      this.resultScale1BR
    );
  }

  scale2A() {
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
      answer: AnswersMaci[answer],
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
      answer: AnswersMaci[answer],
      weight: [2, 1, 2, 2, 1, 1, 2, 1, 2, 2, 2][index],
    }));

    this.resultScale2AGross = this.calculateGross(trueItems, falseItems);
    this.resultScale2ABR = this.calculateBR(
      trueItems,
      falseItems,
      'scale2A',
      this.resultScale2AGross,
      this.resultScale2ABR
    );
  }

  scale2B() {
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
      answer: AnswersMaci[answer],
      weight: [
        1, 3, 2, 2, 2, 3, 2, 1, 3, 1, 2, 1, 3, 2, 3, 2, 2, 2, 3, 1, 2, 3, 1, 1,
      ][index],
    }));

    const falseItems: any[] = [];

    this.resultScale2BGross = this.calculateGross(trueItems, falseItems);
    this.resultScale2BBR = this.calculateBR(
      trueItems,
      falseItems,
      'scale2B',
      this.resultScale2BGross,
      this.resultScale2BBR
    );
  }

  scale3() {
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
      answer: AnswersMaci[answer],
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
      answer: AnswersMaci[answer],
      weight: [
        1, 1, 1, 1, 2, 2, 2, 1, 2, 1, 2, 1, 2, 1, 2, 2, 1, 1, 2, 2, 1, 1, 2, 1,
        2, 1, 1,
      ][index],
    }));

    this.resultScale3Gross = this.calculateGross(trueItems, falseItems);
    this.resultScale3BR = this.calculateBR(
      trueItems,
      falseItems,
      'scale3',
      this.resultScale3Gross,
      this.resultScale3BR
    );
  }

  scale4() {
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
      answer: AnswersMaci[answer],
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
      answer: AnswersMaci[answer],
      weight: [
        1, 1, 1, 2, 1, 2, 1, 2, 1, 1, 2, 1, 2, 1, 1, 2, 1, 1, 1, 2, 1, 1, 2, 1,
      ][index],
    }));

    this.resultScale4Gross = this.calculateGross(trueItems, falseItems);
    this.resultScale4BR = this.calculateBR(
      trueItems,
      falseItems,
      'scale4',
      this.resultScale4Gross,
      this.resultScale4BR
    );
  }

  scale5() {
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
      answer: AnswersMaci[answer],
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
      answer: AnswersMaci[answer],
      weight: [1, 1, 1, 1, 1, 2, 1, 2, 2, 2, 1, 2, 1, 2, 1, 2, 2, 1][index],
    }));

    this.resultScale5Gross = this.calculateGross(trueItems, falseItems);
    this.resultScale5BR = this.calculateBR(
      trueItems,
      falseItems,
      'scale5',
      this.resultScale5Gross,
      this.resultScale5BR
    );
  }

  scale6A() {
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
      answer: AnswersMaci[answer],
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
      answer: AnswersMaci[answer],
      weight: [2, 2, 2, 2, 2, 2, 1, 1, 2, 1, 1, 1, 2][index],
    }));

    this.resultScale6AGross = this.calculateGross(trueItems, falseItems);
    this.resultScale6ABR = this.calculateBR(
      trueItems,
      falseItems,
      'scale6A',
      this.resultScale6AGross,
      this.resultScale6ABR
    );
  }

  scale6B() {
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
      answer: AnswersMaci[answer],
      weight: [1, 2, 3, 3, 2, 2, 1, 3, 3, 2, 2, 3, 3, 2, 2, 1, 3][index],
    }));

    const falseItems = [
      'answer5',
      'answer9',
      'answer50',
      'answer71',
      'answer81',
    ].map((answer, index) => ({
      answer: AnswersMaci[answer],
      weight: [2, 1, 1, 1, 2][index],
    }));

    this.resultScale6BGross = this.calculateGross(trueItems, falseItems);
    this.resultScale6BBR = this.calculateBR(
      trueItems,
      falseItems,
      'scale6B',
      this.resultScale6BGross,
      this.resultScale6BBR
    );
  }

  scale7() {
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
      answer: AnswersMaci[answer],
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
      answer: AnswersMaci[answer],
      weight: [
        1, 2, 1, 2, 1, 1, 2, 1, 2, 1, 2, 2, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1,
        1, 2, 2, 1,
      ][index],
    }));

    this.resultScale7Gross = this.calculateGross(trueItems, falseItems);
    this.resultScale7BR = this.calculateBR(
      trueItems,
      falseItems,
      'scale7',
      this.resultScale7Gross,
      this.resultScale7BR
    );
  }

  scale8A() {
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
      answer: AnswersMaci[answer],
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
      answer: AnswersMaci[answer],
      weight: [1, 2, 1, 1, 2][index],
    }));

    this.resultScale8AGross = this.calculateGross(trueItems, falseItems);
    this.resultScale8ABR = this.calculateBR(
      trueItems,
      falseItems,
      'scale8A',
      this.resultScale8AGross,
      this.resultScale8ABR
    );
  }

  scale8B() {
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
      answer: AnswersMaci[answer],
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
      answer: AnswersMaci[answer],
      weight: [2, 1, 1, 1, 2][index],
    }));

    this.resultScale8BGross = this.calculateGross(trueItems, falseItems);
    this.resultScale8BBR = this.calculateBR(
      trueItems,
      falseItems,
      'scale8B',
      this.resultScale8BGross,
      this.resultScale8BBR
    );
  }

  scale9() {
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
      answer: AnswersMaci[answer],
      weight: [2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2][index],
    }));

    const falseItems = ['answer2', 'answer145'].map((answer, index) => ({
      answer: AnswersMaci[answer],
      weight: [2, 2][index],
    }));

    this.resultScale9Gross = this.calculateGross(trueItems, falseItems);
    this.resultScale9BR = this.calculateBR(
      trueItems,
      falseItems,
      'scale9',
      this.resultScale9Gross,
      this.resultScale9BR
    );
  }

  scaleA() {
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
      answer: AnswersMaci[answer],
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
      answer: AnswersMaci[answer],
      weight: [3, 1, 1, 1, 1, 1, 3][index],
    }));

    this.resultScaleAGross = this.calculateGross(trueItems, falseItems);
    this.resultScaleABR = this.calculateBR(
      trueItems,
      falseItems,
      'scaleA',
      this.resultScaleAGross,
      this.resultScaleABR
    );
  }

  scaleB() {
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
      answer: AnswersMaci[answer],
      weight: [
        2, 2, 1, 2, 3, 2, 2, 2, 3, 1, 2, 1, 1, 2, 2, 1, 3, 2, 2, 1, 2, 1, 1, 2,
        1, 1, 1, 1, 1, 3, 3, 2, 2, 2,
      ][index],
    }));

    const falseItems = ['answer10', 'answer68', 'answer131', 'answer145'].map(
      (answer, index) => ({
        answer: AnswersMaci[answer],
        weight: [2, 2, 2, 1][index],
      })
    );

    this.resultScaleBGross = this.calculateGross(trueItems, falseItems);
    this.resultScaleBBR = this.calculateBR(
      trueItems,
      falseItems,
      'scaleB',
      this.resultScaleBGross,
      this.resultScaleBBR
    );
  }

  scaleC() {
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
      answer: AnswersMaci[answer],
      weight: [1, 1, 1, 2, 3, 2, 2, 2, 1, 3, 1, 1, 1, 2][index],
    }));

    const falseItems = ['answer10', 'answer68', 'answer131'].map(
      (answer, index) => ({
        answer: AnswersMaci[answer],
        weight: [3, 3, 3][index],
      })
    );

    this.resultScaleCGross = this.calculateGross(trueItems, falseItems);
    this.resultScaleCBR = this.calculateBR(
      trueItems,
      falseItems,
      'scaleC',
      this.resultScaleCGross,
      this.resultScaleCBR
    );
  }

  scaleD() {
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
      answer: AnswersMaci[answer],
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
      answer: AnswersMaci[answer],
      weight: [
        1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 3, 2, 1, 3, 1, 2, 1, 1, 1, 3, 1, 2, 2, 2,
      ][index],
    }));

    this.resultScaleDGross = this.calculateGross(trueItems, falseItems);
    this.resultScaleDBR = this.calculateBR(
      trueItems,
      falseItems,
      'scaleD',
      this.resultScaleDGross,
      this.resultScaleDBR
    );
  }

  scaleE() {
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
      answer: AnswersMaci[answer],
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
      answer: AnswersMaci[answer],
      weight: [2, 1, 2, 1, 1, 2][index],
    }));

    this.resultScaleEGross = this.calculateGross(trueItems, falseItems);
    this.resultScaleEBR = this.calculateBR(
      trueItems,
      falseItems,
      'scaleE',
      this.resultScaleEGross,
      this.resultScaleEBR
    );
  }

  scaleF() {
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
      answer: AnswersMaci[answer],
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
      answer: AnswersMaci[answer],
      weight: [3, 1, 2, 1, 2, 1, 2, 1, 1, 1, 3, 2, 2, 2, 1, 1][index],
    }));

    this.resultScaleFGross = this.calculateGross(trueItems, falseItems);
    this.resultScaleFBR = this.calculateBR(
      trueItems,
      falseItems,
      'scaleF',
      this.resultScaleFGross,
      this.resultScaleFBR
    );
  }

  scaleG() {
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
      answer: AnswersMaci[answer],
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
      answer: AnswersMaci[answer],
      weight: [3, 1, 1, 1, 1, 3, 1, 1, 2, 1][index],
    }));

    this.resultScaleGGross = this.calculateGross(trueItems, falseItems);
    this.resultScaleGBR = this.calculateBR(
      trueItems,
      falseItems,
      'scaleG',
      this.resultScaleGGross,
      this.resultScaleGBR
    );
  }

  scaleH() {
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
      answer: AnswersMaci[answer],
      weight: [3, 1, 1, 1, 1, 1, 1, 2, 1, 1, 3, 1, 1, 2, 1, 1, 1, 3, 3, 1, 2][
        index
      ],
    }));

    const falseItems = ['answer6', 'answer45', 'answer55'].map(
      (answer, index) => ({
        answer: AnswersMaci[answer],
        weight: [1, 1, 3][index],
      })
    );

    this.resultScaleHGross = this.calculateGross(trueItems, falseItems);
    this.resultScaleHBR = this.calculateBR(
      trueItems,
      falseItems,
      'scaleH',
      this.resultScaleHGross,
      this.resultScaleHBR
    );
  }

  scaleAA() {
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
      answer: AnswersMaci[answer],
      weight: [3, 1, 3, 1, 3, 3, 1, 3, 1, 3, 1, 3, 2, 3, 1, 3, 3][index],
    }));

    const falseItems = ['answer10', 'answer68', 'answer131'].map(
      (answer, index) => ({
        answer: AnswersMaci[answer],
        weight: [2, 2, 2][index],
      })
    );

    this.resultScaleAAGross = this.calculateGross(trueItems, falseItems);
    this.resultScaleAABR = this.calculateBR(
      trueItems,
      falseItems,
      'scaleAA',
      this.resultScaleAAGross,
      this.resultScaleAABR
    );
  }

  scaleBB() {
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
      answer: AnswersMaci[answer],
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
      answer: AnswersMaci[answer],
      weight: [1, 3, 2, 2, 1, 1][index],
    }));

    this.resultScaleBBGross = this.calculateGross(trueItems, falseItems);
    this.resultScaleBBBR = this.calculateBR(
      trueItems,
      falseItems,
      'scaleBB',
      this.resultScaleBBGross,
      this.resultScaleBBBR
    );
  }

  scaleCC() {
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
      answer: AnswersMaci[answer],
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
      answer: AnswersMaci[answer],
      weight: [1, 1, 3, 1, 1, 3, 1, 1, 1, 2, 1, 2, 2, 2, 2, 1, 1][index],
    }));

    this.resultScaleCCGross = this.calculateGross(trueItems, falseItems);
    this.resultScaleCCBR = this.calculateBR(
      trueItems,
      falseItems,
      'scaleCC',
      this.resultScaleCCGross,
      this.resultScaleCCBR
    );
  }

  scaleDD() {
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
      answer: AnswersMaci[answer],
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
      answer: AnswersMaci[answer],
      weight: [1, 1, 2, 1, 1, 1][index],
    }));

    this.resultScaleDDGross = this.calculateGross(trueItems, falseItems);
    this.resultScaleDDBR = this.calculateBR(
      trueItems,
      falseItems,
      'scaleDD',
      this.resultScaleDDGross,
      this.resultScaleDDBR
    );
  }

  scaleEE() {
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
      answer: AnswersMaci[answer],
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
      answer: AnswersMaci[answer],
      weight: [
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1,
        1, 1, 1, 1, 1,
      ][index],
    }));

    this.resultScaleEEGross = this.calculateGross(trueItems, falseItems);
    this.resultScaleEEBR = this.calculateBR(
      trueItems,
      falseItems,
      'scaleEE',
      this.resultScaleEEGross,
      this.resultScaleEEBR
    );
  }

  scaleFF() {
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
      answer: AnswersMaci[answer],
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
      answer: AnswersMaci[answer],
      weight: [2, 1, 1, 2, 1][index],
    }));

    this.resultScaleFFGross = this.calculateGross(trueItems, falseItems);
    this.resultScaleFFBR = this.calculateBR(
      trueItems,
      falseItems,
      'scaleFF',
      this.resultScaleFFGross,
      this.resultScaleFFBR
    );
  }

  scaleGG() {
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
      answer: AnswersMaci[answer],
      weight: [
        1, 2, 1, 2, 1, 1, 2, 3, 2, 1, 1, 3, 1, 2, 3, 1, 1, 3, 1, 1, 1, 1, 2, 3,
      ][index],
    }));

    const falseItems = ['answer55'].map((answer, index) => ({
      answer: AnswersMaci[answer],
      weight: [1][index],
    }));

    this.resultScaleGGGross = this.calculateGross(trueItems, falseItems);
    this.resultScaleGGBR = this.calculateBR(
      trueItems,
      falseItems,
      'scaleGG',
      this.resultScaleGGGross,
      this.resultScaleGGBR
    );
  }
}
