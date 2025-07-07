import { Injectable, inject } from '@angular/core';

import { AnswersMcmi3 } from '../shared-mcmi-3/answers-mcmi-3';

import { TableReferenceMcmi3Service } from './table-reference-mcmi-3.service';
import { AnswersMcmi3Service } from './answers-mcmi-3.service';

@Injectable({
  providedIn: 'root',
})
export class TestMcmi3Service {
  tableReferenceMcmi3Service = inject(TableReferenceMcmi3Service);
  answersMcmi3Service = inject(AnswersMcmi3Service);

  name: string = '';
  gender: string = '';

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
  resultScaleSGross: number = 0;
  resultScaleSBR: number = 0;
  resultScaleCGross: number = 0;
  resultScaleCBR: number = 0;
  resultScalePGross: number = 0;
  resultScalePBR: number = 0;
  resultScaleAGross: number = 0;
  resultScaleABR: number = 0;
  resultScaleHGross: number = 0;
  resultScaleHBR: number = 0;
  resultScaleNGross: number = 0;
  resultScaleNBR: number = 0;
  resultScaleDGross: number = 0;
  resultScaleDBR: number = 0;
  resultScaleBGross: number = 0;
  resultScaleBBR: number = 0;
  resultScaleTGross: number = 0;
  resultScaleTBR: number = 0;
  resultScaleRGross: number = 0;
  resultScaleRBR: number = 0;
  resultScaleSSGross: number = 0;
  resultScaleSSBR: number = 0;
  resultScaleCCGross: number = 0;
  resultScaleCCBR: number = 0;
  resultScalePPGross: number = 0;
  resultScalePPBR: number = 0;

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
    this.scaleS();
    this.scaleC();
    this.scaleP();
    this.scaleA();
    this.scaleH();
    this.scaleN();
    this.scaleD();
    this.scaleB();
    this.scaleT();
    this.scaleR();
    this.scaleSS();
    this.scaleCC();
    this.scalePP();
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
    this.answersMcmi3Service.clearAnswers();
    this.name = '';
    this.gender = '';
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
    this.resultScaleSGross = 0;
    this.resultScaleSBR = 0;
    this.resultScaleCGross = 0;
    this.resultScaleCBR = 0;
    this.resultScalePGross = 0;
    this.resultScalePBR = 0;
    this.resultScaleAGross = 0;
    this.resultScaleABR = 0;
    this.resultScaleHGross = 0;
    this.resultScaleHBR = 0;
    this.resultScaleNGross = 0;
    this.resultScaleNBR = 0;
    this.resultScaleDGross = 0;
    this.resultScaleDBR = 0;
    this.resultScaleBGross = 0;
    this.resultScaleBBR = 0;
    this.resultScaleTGross = 0;
    this.resultScaleTBR = 0;
    this.resultScaleRGross = 0;
    this.resultScaleRBR = 0;
    this.resultScaleSSGross = 0;
    this.resultScaleSSBR = 0;
    this.resultScaleCCGross = 0;
    this.resultScaleCCBR = 0;
    this.resultScalePPGross = 0;
    this.resultScalePPBR = 0;
  }

  scaleX() {
    this.resultScaleXGross =
      this.resultScale1Gross +
      this.resultScale2AGross +
      this.resultScale2BGross +
      this.resultScale3Gross +
      this.resultScale4Gross +
      this.resultScale5Gross * 0.6667 +
      this.resultScale6AGross +
      this.resultScale6BGross +
      this.resultScale7Gross +
      this.resultScale8AGross +
      this.resultScale8BGross;

    this.resultScaleXGrossRounded = Math.round(this.resultScaleXGross);

    if (this.resultScaleXGrossRounded < 170) {
      this.resultScaleXBR =
        this.tableReferenceMcmi3Service.X['scaleX'][
          `gross${this.resultScaleXGrossRounded}` as keyof typeof this.tableReferenceMcmi3Service.X.scaleX
        ];
    } else if (this.resultScaleXGrossRounded >= 170) {
      this.resultScaleXBR = 100;
    }
  }

  scaleY() {
    const trueItems = [
      AnswersMcmi3['answer32'],
      AnswersMcmi3['answer51'],
      AnswersMcmi3['answer57'],
      AnswersMcmi3['answer59'],
      AnswersMcmi3['answer80'],
      AnswersMcmi3['answer82'],
      AnswersMcmi3['answer88'],
      AnswersMcmi3['answer97'],
      AnswersMcmi3['answer137'],
      AnswersMcmi3['answer172'],
    ];
    const falseItems = [
      AnswersMcmi3['answer20'],
      AnswersMcmi3['answer35'],
      AnswersMcmi3['answer40'],
      AnswersMcmi3['answer69'],
      AnswersMcmi3['answer104'],
      AnswersMcmi3['answer112'],
      AnswersMcmi3['answer123'],
      AnswersMcmi3['answer141'],
      AnswersMcmi3['answer142'],
      AnswersMcmi3['answer148'],
      AnswersMcmi3['answer151'],
    ];

    trueItems.forEach((item) => {
      if (item === 'A') {
        this.resultScaleYGross += 1;
      }
    });
    falseItems.forEach((item) => {
      if (item === 'F') {
        this.resultScaleYGross += 1;
      }
    });

    if (this.isMale) {
      this.resultScaleYBR =
        this.tableReferenceMcmi3Service.Male['scaleY'][
          `gross${this.resultScaleYGross}` as keyof typeof this.tableReferenceMcmi3Service.Male.scaleY
        ];
    }
    if (this.isFemale) {
      this.resultScaleYBR =
        this.tableReferenceMcmi3Service.Female['scaleY'][
          `gross${this.resultScaleYGross}` as keyof typeof this.tableReferenceMcmi3Service.Female.scaleY
        ];
    }
  }

  scaleZ() {
    const trueItems = [
      AnswersMcmi3['answer1'],
      AnswersMcmi3['answer4'],
      AnswersMcmi3['answer8'],
      AnswersMcmi3['answer15'],
      AnswersMcmi3['answer22'],
      AnswersMcmi3['answer24'],
      AnswersMcmi3['answer30'],
      AnswersMcmi3['answer34'],
      AnswersMcmi3['answer36'],
      AnswersMcmi3['answer37'],
      AnswersMcmi3['answer44'],
      AnswersMcmi3['answer55'],
      AnswersMcmi3['answer56'],
      AnswersMcmi3['answer58'],
      AnswersMcmi3['answer62'],
      AnswersMcmi3['answer63'],
      AnswersMcmi3['answer70'],
      AnswersMcmi3['answer74'],
      AnswersMcmi3['answer75'],
      AnswersMcmi3['answer76'],
      AnswersMcmi3['answer83'],
      AnswersMcmi3['answer84'],
      AnswersMcmi3['answer86'],
      AnswersMcmi3['answer99'],
      AnswersMcmi3['answer111'],
      AnswersMcmi3['answer123'],
      AnswersMcmi3['answer128'],
      AnswersMcmi3['answer133'],
      AnswersMcmi3['answer134'],
      AnswersMcmi3['answer142'],
      AnswersMcmi3['answer145'],
      AnswersMcmi3['answer150'],
      AnswersMcmi3['answer171'],
    ];

    trueItems.forEach((item) => {
      if (item === 'A') {
        this.resultScaleZGross += 1;
      }
    });

    if (this.isMale) {
      this.resultScaleZBR =
        this.tableReferenceMcmi3Service.Male['scaleZ'][
          `gross${this.resultScaleZGross}` as keyof typeof this.tableReferenceMcmi3Service.Male.scaleZ
        ];
    }
    if (this.isFemale) {
      this.resultScaleZBR =
        this.tableReferenceMcmi3Service.Female['scaleZ'][
          `gross${this.resultScaleZGross}` as keyof typeof this.tableReferenceMcmi3Service.Female.scaleZ
        ];
    }
  }

  scale1() {
    const truePrototypeItems = [
      AnswersMcmi3['answer10'],
      AnswersMcmi3['answer27'],
      AnswersMcmi3['answer46'],
      AnswersMcmi3['answer92'],
      AnswersMcmi3['answer105'],
      AnswersMcmi3['answer148'],
      AnswersMcmi3['answer165'],
    ];
    const trueNonPrototypeItems = [
      AnswersMcmi3['answer4'],
      AnswersMcmi3['answer38'],
      AnswersMcmi3['answer48'],
      AnswersMcmi3['answer101'],
      AnswersMcmi3['answer142'],
      AnswersMcmi3['answer156'],
      AnswersMcmi3['answer167'],
    ];
    const falseItems = [AnswersMcmi3['answer32'], AnswersMcmi3['answer57']];

    truePrototypeItems.forEach((item) => {
      if (item === 'A') {
        this.resultScale1Gross += 2;
      }
    });
    trueNonPrototypeItems.forEach((item) => {
      if (item === 'A') {
        this.resultScale1Gross += 1;
      }
    });
    falseItems.forEach((item) => {
      if (item === 'F') {
        this.resultScale1Gross += 1;
      }
    });

    if (this.isMale) {
      this.resultScale1BR =
        this.tableReferenceMcmi3Service.Male['scale1'][
          `gross${this.resultScale1Gross}` as keyof typeof this.tableReferenceMcmi3Service.Male.scale1
        ];
    }
    if (this.isFemale) {
      this.resultScale1BR =
        this.tableReferenceMcmi3Service.Female['scale1'][
          `gross${this.resultScale1Gross}` as keyof typeof this.tableReferenceMcmi3Service.Female.scale1
        ];
    }
  }

  scale2A() {
    const truePrototypeItems = [
      AnswersMcmi3['answer18'],
      AnswersMcmi3['answer40'],
      AnswersMcmi3['answer69'],
      AnswersMcmi3['answer84'],
      AnswersMcmi3['answer99'],
      AnswersMcmi3['answer127'],
      AnswersMcmi3['answer141'],
      AnswersMcmi3['answer174'],
    ];
    const trueNonPrototypeItems = [
      AnswersMcmi3['answer47'],
      AnswersMcmi3['answer48'],
      AnswersMcmi3['answer146'],
      AnswersMcmi3['answer148'],
      AnswersMcmi3['answer151'],
      AnswersMcmi3['answer158'],
    ];
    const falseItems = [AnswersMcmi3['answer57'], AnswersMcmi3['answer80']];

    truePrototypeItems.forEach((item) => {
      if (item === 'A') {
        this.resultScale2AGross += 2;
      }
    });
    trueNonPrototypeItems.forEach((item) => {
      if (item === 'A') {
        this.resultScale2AGross += 1;
      }
    });
    falseItems.forEach((item) => {
      if (item === 'F') {
        this.resultScale2AGross += 1;
      }
    });

    if (this.isMale) {
      this.resultScale2ABR =
        this.tableReferenceMcmi3Service.Male['scale2A'][
          `gross${this.resultScale2AGross}` as keyof typeof this.tableReferenceMcmi3Service.Male.scale2A
        ];
    }
    if (this.isFemale) {
      this.resultScale2ABR =
        this.tableReferenceMcmi3Service.Female['scale2A'][
          `gross${this.resultScale2AGross}` as keyof typeof this.tableReferenceMcmi3Service.Female.scale2A
        ];
    }
  }

  scale2B() {
    const truePrototypeItems = [
      AnswersMcmi3['answer20'],
      AnswersMcmi3['answer25'],
      AnswersMcmi3['answer47'],
      AnswersMcmi3['answer112'],
      AnswersMcmi3['answer123'],
      AnswersMcmi3['answer133'],
      AnswersMcmi3['answer145'],
      AnswersMcmi3['answer151'],
    ];
    const trueNonPrototypeItems = [
      AnswersMcmi3['answer24'],
      AnswersMcmi3['answer43'],
      AnswersMcmi3['answer83'],
      AnswersMcmi3['answer86'],
      AnswersMcmi3['answer142'],
      AnswersMcmi3['answer148'],
      AnswersMcmi3['answer154'],
    ];

    truePrototypeItems.forEach((item) => {
      if (item === 'A') {
        this.resultScale2BGross += 2;
      }
    });
    trueNonPrototypeItems.forEach((item) => {
      if (item === 'A') {
        this.resultScale2BGross += 1;
      }
    });

    if (this.isMale) {
      this.resultScale2BBR =
        this.tableReferenceMcmi3Service.Male['scale2B'][
          `gross${this.resultScale2BGross}` as keyof typeof this.tableReferenceMcmi3Service.Male.scale2B
        ];
    }
    if (this.isFemale) {
      this.resultScale2BBR =
        this.tableReferenceMcmi3Service.Female['scale2B'][
          `gross${this.resultScale2BGross}` as keyof typeof this.tableReferenceMcmi3Service.Female.scale2B
        ];
    }
  }

  scale3() {
    const truePrototypeItems = [
      AnswersMcmi3['answer16'],
      AnswersMcmi3['answer35'],
      AnswersMcmi3['answer45'],
      AnswersMcmi3['answer73'],
      AnswersMcmi3['answer94'],
      AnswersMcmi3['answer108'],
      AnswersMcmi3['answer135'],
      AnswersMcmi3['answer169'],
    ];
    const trueNonPrototypeItems = [
      AnswersMcmi3['answer47'],
      AnswersMcmi3['answer56'],
      AnswersMcmi3['answer84'],
      AnswersMcmi3['answer120'],
      AnswersMcmi3['answer133'],
      AnswersMcmi3['answer141'],
      AnswersMcmi3['answer151'],
    ];
    const falseItems = [AnswersMcmi3['answer82']];

    truePrototypeItems.forEach((item) => {
      if (item === 'A') {
        this.resultScale3Gross += 2;
      }
    });
    trueNonPrototypeItems.forEach((item) => {
      if (item === 'A') {
        this.resultScale3Gross += 1;
      }
    });
    falseItems.forEach((item) => {
      if (item === 'F') {
        this.resultScale2AGross += 1;
      }
    });

    if (this.isMale) {
      this.resultScale3BR =
        this.tableReferenceMcmi3Service.Male['scale3'][
          `gross${this.resultScale3Gross}` as keyof typeof this.tableReferenceMcmi3Service.Male.scale3
        ];
    }
    if (this.isFemale) {
      this.resultScale3BR =
        this.tableReferenceMcmi3Service.Female['scale3'][
          `gross${this.resultScale3Gross}` as keyof typeof this.tableReferenceMcmi3Service.Female.scale3
        ];
    }
  }

  scale4() {
    const truePrototypeItems = [
      AnswersMcmi3['answer12'],
      AnswersMcmi3['answer21'],
      AnswersMcmi3['answer32'],
      AnswersMcmi3['answer51'],
      AnswersMcmi3['answer57'],
      AnswersMcmi3['answer80'],
      AnswersMcmi3['answer88'],
    ];
    const falseItems = [
      AnswersMcmi3['answer10'],
      AnswersMcmi3['answer24'],
      AnswersMcmi3['answer27'],
      AnswersMcmi3['answer48'],
      AnswersMcmi3['answer69'],
      AnswersMcmi3['answer92'],
      AnswersMcmi3['answer99'],
      AnswersMcmi3['answer123'],
      AnswersMcmi3['answer127'],
      AnswersMcmi3['answer174'],
    ];

    truePrototypeItems.forEach((item) => {
      if (item === 'A') {
        this.resultScale4Gross += 2;
      }
    });
    falseItems.forEach((item) => {
      if (item === 'F') {
        this.resultScale4Gross += 1;
      }
    });

    if (this.isMale) {
      this.resultScale4BR =
        this.tableReferenceMcmi3Service.Male['scale4'][
          `gross${this.resultScale4Gross}` as keyof typeof this.tableReferenceMcmi3Service.Male.scale4
        ];
    }
    if (this.isFemale) {
      this.resultScale4BR =
        this.tableReferenceMcmi3Service.Female['scale4'][
          `gross${this.resultScale4Gross}` as keyof typeof this.tableReferenceMcmi3Service.Female.scale4
        ];
    }
  }

  scale5() {
    const truePrototypeItems = [
      AnswersMcmi3['answer5'],
      AnswersMcmi3['answer26'],
      AnswersMcmi3['answer31'],
      AnswersMcmi3['answer67'],
      AnswersMcmi3['answer85'],
      AnswersMcmi3['answer93'],
      AnswersMcmi3['answer144'],
      AnswersMcmi3['answer159'],
    ];
    const trueNonPrototypeItems = [
      AnswersMcmi3['answer21'],
      AnswersMcmi3['answer38'],
      AnswersMcmi3['answer57'],
      AnswersMcmi3['answer80'],
      AnswersMcmi3['answer88'],
      AnswersMcmi3['answer116'],
    ];
    const falseItems = [
      AnswersMcmi3['answer35'],
      AnswersMcmi3['answer40'],
      AnswersMcmi3['answer47'],
      AnswersMcmi3['answer69'],
      AnswersMcmi3['answer84'],
      AnswersMcmi3['answer86'],
      AnswersMcmi3['answer94'],
      AnswersMcmi3['answer99'],
      AnswersMcmi3['answer141'],
      AnswersMcmi3['answer169'],
    ];

    truePrototypeItems.forEach((item) => {
      if (item === 'A') {
        this.resultScale5Gross += 2;
      }
    });
    trueNonPrototypeItems.forEach((item) => {
      if (item === 'A') {
        this.resultScale5Gross += 1;
      }
    });
    falseItems.forEach((item) => {
      if (item === 'F') {
        this.resultScale5Gross += 1;
      }
    });

    if (this.isMale) {
      this.resultScale5BR =
        this.tableReferenceMcmi3Service.Male['scale5'][
          `gross${this.resultScale5Gross}` as keyof typeof this.tableReferenceMcmi3Service.Male.scale5
        ];
    }
    if (this.isFemale) {
      this.resultScale5BR =
        this.tableReferenceMcmi3Service.Female['scale5'][
          `gross${this.resultScale5Gross}` as keyof typeof this.tableReferenceMcmi3Service.Female.scale5
        ];
    }
  }

  scale6A() {
    const truePrototypeItems = [
      AnswersMcmi3['answer17'],
      AnswersMcmi3['answer38'],
      AnswersMcmi3['answer53'],
      AnswersMcmi3['answer101'],
      AnswersMcmi3['answer113'],
      AnswersMcmi3['answer139'],
      AnswersMcmi3['answer166'],
    ];
    const trueNonPrototypeItems = [
      AnswersMcmi3['answer7'],
      AnswersMcmi3['answer13'],
      AnswersMcmi3['answer14'],
      AnswersMcmi3['answer21'],
      AnswersMcmi3['answer41'],
      AnswersMcmi3['answer52'],
      AnswersMcmi3['answer93'],
      AnswersMcmi3['answer122'],
      AnswersMcmi3['answer136'],
    ];
    const falseItems = [AnswersMcmi3['answer172']];

    truePrototypeItems.forEach((item) => {
      if (item === 'A') {
        this.resultScale6AGross += 2;
      }
    });
    trueNonPrototypeItems.forEach((item) => {
      if (item === 'A') {
        this.resultScale6AGross += 1;
      }
    });
    falseItems.forEach((item) => {
      if (item === 'F') {
        this.resultScale6AGross += 1;
      }
    });

    if (this.isMale) {
      this.resultScale6ABR =
        this.tableReferenceMcmi3Service.Male['scale6A'][
          `gross${this.resultScale6AGross}` as keyof typeof this.tableReferenceMcmi3Service.Male.scale6A
        ];
    }
    if (this.isFemale) {
      this.resultScale6ABR =
        this.tableReferenceMcmi3Service.Female['scale6A'][
          `gross${this.resultScale6AGross}` as keyof typeof this.tableReferenceMcmi3Service.Female.scale6A
        ];
    }
  }

  scale6B() {
    const truePrototypeItems = [
      AnswersMcmi3['answer9'],
      AnswersMcmi3['answer14'],
      AnswersMcmi3['answer28'],
      AnswersMcmi3['answer64'],
      AnswersMcmi3['answer87'],
      AnswersMcmi3['answer95'],
      AnswersMcmi3['answer116'],
    ];
    const trueNonPrototypeItems = [
      AnswersMcmi3['answer7'],
      AnswersMcmi3['answer13'],
      AnswersMcmi3['answer17'],
      AnswersMcmi3['answer33'],
      AnswersMcmi3['answer36'],
      AnswersMcmi3['answer39'],
      AnswersMcmi3['answer41'],
      AnswersMcmi3['answer49'],
      AnswersMcmi3['answer53'],
      AnswersMcmi3['answer79'],
      AnswersMcmi3['answer93'],
      AnswersMcmi3['answer96'],
      AnswersMcmi3['answer166'],
    ];

    truePrototypeItems.forEach((item) => {
      if (item === 'A') {
        this.resultScale6BGross += 2;
      }
    });
    trueNonPrototypeItems.forEach((item) => {
      if (item === 'A') {
        this.resultScale6BGross += 1;
      }
    });

    if (this.isMale) {
      this.resultScale6BBR =
        this.tableReferenceMcmi3Service.Male['scale6B'][
          `gross${this.resultScale6BGross}` as keyof typeof this.tableReferenceMcmi3Service.Male.scale6B
        ];
    }
    if (this.isFemale) {
      this.resultScale6BBR =
        this.tableReferenceMcmi3Service.Female['scale6B'][
          `gross${this.resultScale6BGross}` as keyof typeof this.tableReferenceMcmi3Service.Female.scale6B
        ];
    }
  }

  scale7() {
    const truePrototypeItems = [
      AnswersMcmi3['answer2'],
      AnswersMcmi3['answer29'],
      AnswersMcmi3['answer59'],
      AnswersMcmi3['answer82'],
      AnswersMcmi3['answer97'],
      AnswersMcmi3['answer114'],
      AnswersMcmi3['answer137'],
      AnswersMcmi3['answer172'],
    ];
    const falseItems = [
      AnswersMcmi3['answer7'],
      AnswersMcmi3['answer14'],
      AnswersMcmi3['answer22'],
      AnswersMcmi3['answer41'],
      AnswersMcmi3['answer53'],
      AnswersMcmi3['answer72'],
      AnswersMcmi3['answer101'],
      AnswersMcmi3['answer139'],
      AnswersMcmi3['answer166'],
    ];

    truePrototypeItems.forEach((item) => {
      if (item === 'A') {
        this.resultScale7Gross += 2;
      }
    });
    falseItems.forEach((item) => {
      if (item === 'F') {
        this.resultScale7Gross += 1;
      }
    });

    if (this.isMale) {
      this.resultScale7BR =
        this.tableReferenceMcmi3Service.Male['scale7'][
          `gross${this.resultScale7Gross}` as keyof typeof this.tableReferenceMcmi3Service.Male.scale7
        ];
    }
    if (this.isFemale) {
      this.resultScale7BR =
        this.tableReferenceMcmi3Service.Female['scale7'][
          `gross${this.resultScale7Gross}` as keyof typeof this.tableReferenceMcmi3Service.Female.scale7
        ];
    }
  }

  scale8A() {
    const truePrototypeItems = [
      AnswersMcmi3['answer7'],
      AnswersMcmi3['answer15'],
      AnswersMcmi3['answer22'],
      AnswersMcmi3['answer36'],
      AnswersMcmi3['answer50'],
      AnswersMcmi3['answer60'],
      AnswersMcmi3['answer79'],
      AnswersMcmi3['answer115'],
      AnswersMcmi3['answer126'],
    ];
    const trueNonPrototypeItems = [
      AnswersMcmi3['answer6'],
      AnswersMcmi3['answer42'],
      AnswersMcmi3['answer83'],
      AnswersMcmi3['answer98'],
      AnswersMcmi3['answer122'],
      AnswersMcmi3['answer133'],
      AnswersMcmi3['answer166'],
    ];

    truePrototypeItems.forEach((item) => {
      if (item === 'A') {
        this.resultScale8AGross += 2;
      }
    });
    trueNonPrototypeItems.forEach((item) => {
      if (item === 'A') {
        this.resultScale8AGross += 1;
      }
    });

    if (this.isMale) {
      this.resultScale8ABR =
        this.tableReferenceMcmi3Service.Male['scale8A'][
          `gross${this.resultScale8AGross}` as keyof typeof this.tableReferenceMcmi3Service.Male.scale8A
        ];
    }
    if (this.isFemale) {
      this.resultScale8ABR =
        this.tableReferenceMcmi3Service.Female['scale8A'][
          `gross${this.resultScale8AGross}` as keyof typeof this.tableReferenceMcmi3Service.Female.scale8A
        ];
    }
  }

  scale8B() {
    const truePrototypeItems = [
      AnswersMcmi3['answer19'],
      AnswersMcmi3['answer43'],
      AnswersMcmi3['answer70'],
      AnswersMcmi3['answer90'],
      AnswersMcmi3['answer104'],
      AnswersMcmi3['answer122'],
      AnswersMcmi3['answer161'],
    ];
    const trueNonPrototypeItems = [
      AnswersMcmi3['answer18'],
      AnswersMcmi3['answer24'],
      AnswersMcmi3['answer25'],
      AnswersMcmi3['answer35'],
      AnswersMcmi3['answer40'],
      AnswersMcmi3['answer98'],
      AnswersMcmi3['answer148'],
      AnswersMcmi3['answer169'],
    ];

    truePrototypeItems.forEach((item) => {
      if (item === 'A') {
        this.resultScale8BGross += 2;
      }
    });
    trueNonPrototypeItems.forEach((item) => {
      if (item === 'A') {
        this.resultScale8BGross += 1;
      }
    });

    if (this.isMale) {
      this.resultScale8BBR =
        this.tableReferenceMcmi3Service.Male['scale8B'][
          `gross${this.resultScale8BGross}` as keyof typeof this.tableReferenceMcmi3Service.Male.scale8B
        ];
    }
    if (this.isFemale) {
      this.resultScale8BBR =
        this.tableReferenceMcmi3Service.Female['scale8B'][
          `gross${this.resultScale8BGross}` as keyof typeof this.tableReferenceMcmi3Service.Female.scale8B
        ];
    }
  }

  scaleS() {
    const truePrototypeItems = [
      AnswersMcmi3['answer8'],
      AnswersMcmi3['answer48'],
      AnswersMcmi3['answer71'],
      AnswersMcmi3['answer76'],
      AnswersMcmi3['answer117'],
      AnswersMcmi3['answer138'],
      AnswersMcmi3['answer156'],
      AnswersMcmi3['answer158'],
      AnswersMcmi3['answer162'],
    ];
    const trueNonPrototypeItems = [
      AnswersMcmi3['answer69'],
      AnswersMcmi3['answer99'],
      AnswersMcmi3['answer102'],
      AnswersMcmi3['answer134'],
      AnswersMcmi3['answer141'],
      AnswersMcmi3['answer148'],
      AnswersMcmi3['answer151'],
    ];

    truePrototypeItems.forEach((item) => {
      if (item === 'A') {
        this.resultScaleSGross += 2;
      }
    });
    trueNonPrototypeItems.forEach((item) => {
      if (item === 'A') {
        this.resultScaleSGross += 1;
      }
    });

    if (this.isMale) {
      this.resultScaleSBR =
        this.tableReferenceMcmi3Service.Male['scaleS'][
          `gross${this.resultScaleSGross}` as keyof typeof this.tableReferenceMcmi3Service.Male.scaleS
        ];
    }
    if (this.isFemale) {
      this.resultScaleSBR =
        this.tableReferenceMcmi3Service.Female['scaleS'][
          `gross${this.resultScaleSGross}` as keyof typeof this.tableReferenceMcmi3Service.Female.scaleS
        ];
    }
  }

  scaleC() {
    const truePrototypeItems = [
      AnswersMcmi3['answer30'],
      AnswersMcmi3['answer41'],
      AnswersMcmi3['answer72'],
      AnswersMcmi3['answer83'],
      AnswersMcmi3['answer98'],
      AnswersMcmi3['answer120'],
      AnswersMcmi3['answer134'],
      AnswersMcmi3['answer142'],
      AnswersMcmi3['answer154'],
    ];
    const trueNonPrototypeItems = [
      AnswersMcmi3['answer7'],
      AnswersMcmi3['answer22'],
      AnswersMcmi3['answer122'],
      AnswersMcmi3['answer135'],
      AnswersMcmi3['answer161'],
      AnswersMcmi3['answer166'],
      AnswersMcmi3['answer171'],
    ];

    truePrototypeItems.forEach((item) => {
      if (item === 'A') {
        this.resultScaleCGross += 2;
      }
    });
    trueNonPrototypeItems.forEach((item) => {
      if (item === 'A') {
        this.resultScaleCGross += 1;
      }
    });

    if (this.isMale) {
      this.resultScaleCBR =
        this.tableReferenceMcmi3Service.Male['scaleC'][
          `gross${this.resultScaleCGross}` as keyof typeof this.tableReferenceMcmi3Service.Male.scaleC
        ];
    }
    if (this.isFemale) {
      this.resultScaleCBR =
        this.tableReferenceMcmi3Service.Female['scaleC'][
          `gross${this.resultScaleCGross}` as keyof typeof this.tableReferenceMcmi3Service.Female.scaleC
        ];
    }
  }

  scaleP() {
    const truePrototypeItems = [
      AnswersMcmi3['answer6'],
      AnswersMcmi3['answer33'],
      AnswersMcmi3['answer42'],
      AnswersMcmi3['answer49'],
      AnswersMcmi3['answer89'],
      AnswersMcmi3['answer103'],
      AnswersMcmi3['answer146'],
      AnswersMcmi3['answer167'],
      AnswersMcmi3['answer175'],
    ];
    const trueNonPrototypeItems = [
      AnswersMcmi3['answer8'],
      AnswersMcmi3['answer48'],
      AnswersMcmi3['answer60'],
      AnswersMcmi3['answer63'],
      AnswersMcmi3['answer115'],
      AnswersMcmi3['answer138'],
      AnswersMcmi3['answer158'],
      AnswersMcmi3['answer159'],
    ];

    truePrototypeItems.forEach((item) => {
      if (item === 'A') {
        this.resultScalePGross += 2;
      }
    });
    trueNonPrototypeItems.forEach((item) => {
      if (item === 'A') {
        this.resultScalePGross += 1;
      }
    });

    if (this.isMale) {
      this.resultScalePBR =
        this.tableReferenceMcmi3Service.Male['scaleP'][
          `gross${this.resultScalePGross}` as keyof typeof this.tableReferenceMcmi3Service.Male.scaleP
        ];
    }
    if (this.isFemale) {
      this.resultScalePBR =
        this.tableReferenceMcmi3Service.Female['scaleP'][
          `gross${this.resultScalePGross}` as keyof typeof this.tableReferenceMcmi3Service.Female.scaleP
        ];
    }
  }

  scaleA() {
    const truePrototypeItems = [
      AnswersMcmi3['answer58'],
      AnswersMcmi3['answer75'],
      AnswersMcmi3['answer124'],
      AnswersMcmi3['answer147'],
      AnswersMcmi3['answer164'],
      AnswersMcmi3['answer170'],
    ];
    const trueNonPrototypeItems = [
      AnswersMcmi3['answer40'],
      AnswersMcmi3['answer61'],
      AnswersMcmi3['answer76'],
      AnswersMcmi3['answer108'],
      AnswersMcmi3['answer109'],
      AnswersMcmi3['answer135'],
      AnswersMcmi3['answer145'],
      AnswersMcmi3['answer149'],
    ];

    truePrototypeItems.forEach((item) => {
      if (item === 'A') {
        this.resultScaleAGross += 2;
      }
    });
    trueNonPrototypeItems.forEach((item) => {
      if (item === 'A') {
        this.resultScaleAGross += 1;
      }
    });

    if (this.isMale) {
      this.resultScaleABR =
        this.tableReferenceMcmi3Service.Male['scaleA'][
          `gross${this.resultScaleAGross}` as keyof typeof this.tableReferenceMcmi3Service.Male.scaleA
        ];
    }
    if (this.isFemale) {
      this.resultScaleABR =
        this.tableReferenceMcmi3Service.Female['scaleA'][
          `gross${this.resultScaleAGross}` as keyof typeof this.tableReferenceMcmi3Service.Female.scaleA
        ];
    }
  }

  scaleH() {
    const truePrototypeItems = [
      AnswersMcmi3['answer4'],
      AnswersMcmi3['answer11'],
      AnswersMcmi3['answer37'],
      AnswersMcmi3['answer55'],
      AnswersMcmi3['answer74'],
    ];
    const trueNonPrototypeItems = [
      AnswersMcmi3['answer1'],
      AnswersMcmi3['answer75'],
      AnswersMcmi3['answer107'],
      AnswersMcmi3['answer111'],
      AnswersMcmi3['answer130'],
      AnswersMcmi3['answer145'],
      AnswersMcmi3['answer148'],
    ];

    truePrototypeItems.forEach((item) => {
      if (item === 'A') {
        this.resultScaleHGross += 2;
      }
    });
    trueNonPrototypeItems.forEach((item) => {
      if (item === 'A') {
        this.resultScaleHGross += 1;
      }
    });

    if (this.isMale) {
      this.resultScaleHBR =
        this.tableReferenceMcmi3Service.Male['scaleH'][
          `gross${this.resultScaleHGross}` as keyof typeof this.tableReferenceMcmi3Service.Male.scaleH
        ];
    }
    if (this.isFemale) {
      this.resultScaleHBR =
        this.tableReferenceMcmi3Service.Female['scaleH'][
          `gross${this.resultScaleHGross}` as keyof typeof this.tableReferenceMcmi3Service.Female.scaleH
        ];
    }
  }

  scaleN() {
    const truePrototypeItems = [
      AnswersMcmi3['answer3'],
      AnswersMcmi3['answer54'],
      AnswersMcmi3['answer96'],
      AnswersMcmi3['answer106'],
      AnswersMcmi3['answer125'],
    ];
    const trueNonPrototypeItems = [
      AnswersMcmi3['answer22'],
      AnswersMcmi3['answer41'],
      AnswersMcmi3['answer51'],
      AnswersMcmi3['answer83'],
      AnswersMcmi3['answer117'],
      AnswersMcmi3['answer134'],
      AnswersMcmi3['answer166'],
      AnswersMcmi3['answer170'],
    ];

    truePrototypeItems.forEach((item) => {
      if (item === 'A') {
        this.resultScaleNGross += 2;
      }
    });
    trueNonPrototypeItems.forEach((item) => {
      if (item === 'A') {
        this.resultScaleNGross += 1;
      }
    });

    if (this.isMale) {
      this.resultScaleNBR =
        this.tableReferenceMcmi3Service.Male['scaleN'][
          `gross${this.resultScaleNGross}` as keyof typeof this.tableReferenceMcmi3Service.Male.scaleN
        ];
    }
    if (this.isFemale) {
      this.resultScaleNBR =
        this.tableReferenceMcmi3Service.Female['scaleN'][
          `gross${this.resultScaleNGross}` as keyof typeof this.tableReferenceMcmi3Service.Female.scaleN
        ];
    }
  }

  scaleD() {
    const truePrototypeItems = [
      AnswersMcmi3['answer24'],
      AnswersMcmi3['answer56'],
      AnswersMcmi3['answer62'],
      AnswersMcmi3['answer86'],
      AnswersMcmi3['answer111'],
      AnswersMcmi3['answer130'],
    ];
    const trueNonPrototypeItems = [
      AnswersMcmi3['answer15'],
      AnswersMcmi3['answer25'],
      AnswersMcmi3['answer55'],
      AnswersMcmi3['answer83'],
      AnswersMcmi3['answer104'],
      AnswersMcmi3['answer141'],
      AnswersMcmi3['answer142'],
      AnswersMcmi3['answer148'],
    ];

    truePrototypeItems.forEach((item) => {
      if (item === 'A') {
        this.resultScaleDGross += 2;
      }
    });
    trueNonPrototypeItems.forEach((item) => {
      if (item === 'A') {
        this.resultScaleDGross += 1;
      }
    });

    if (this.isMale) {
      this.resultScaleDBR =
        this.tableReferenceMcmi3Service.Male['scaleD'][
          `gross${this.resultScaleDGross}` as keyof typeof this.tableReferenceMcmi3Service.Male.scaleD
        ];
    }
    if (this.isFemale) {
      this.resultScaleDBR =
        this.tableReferenceMcmi3Service.Female['scaleD'][
          `gross${this.resultScaleDGross}` as keyof typeof this.tableReferenceMcmi3Service.Female.scaleD
        ];
    }
  }

  scaleB() {
    const truePrototypeItems = [
      AnswersMcmi3['answer52'],
      AnswersMcmi3['answer77'],
      AnswersMcmi3['answer100'],
      AnswersMcmi3['answer131'],
      AnswersMcmi3['answer152'],
    ];
    const trueNonPrototypeItems = [
      AnswersMcmi3['answer14'],
      AnswersMcmi3['answer41'],
      AnswersMcmi3['answer64'],
      AnswersMcmi3['answer93'],
      AnswersMcmi3['answer101'],
      AnswersMcmi3['answer113'],
      AnswersMcmi3['answer122'],
      AnswersMcmi3['answer139'],
      AnswersMcmi3['answer166'],
    ];
    const falseItems = [AnswersMcmi3['answer23']];

    truePrototypeItems.forEach((item) => {
      if (item === 'A') {
        this.resultScaleBGross += 2;
      }
    });
    trueNonPrototypeItems.forEach((item) => {
      if (item === 'A') {
        this.resultScaleBGross += 1;
      }
    });
    falseItems.forEach((item) => {
      if (item === 'F') {
        this.resultScaleBGross += 2;
      }
    });

    if (this.isMale) {
      this.resultScaleBBR =
        this.tableReferenceMcmi3Service.Male['scaleB'][
          `gross${this.resultScaleBGross}` as keyof typeof this.tableReferenceMcmi3Service.Male.scaleB
        ];
    }
    if (this.isFemale) {
      this.resultScaleBBR =
        this.tableReferenceMcmi3Service.Female['scaleB'][
          `gross${this.resultScaleBGross}` as keyof typeof this.tableReferenceMcmi3Service.Female.scaleB
        ];
    }
  }

  scaleT() {
    const truePrototypeItems = [
      AnswersMcmi3['answer13'],
      AnswersMcmi3['answer39'],
      AnswersMcmi3['answer66'],
      AnswersMcmi3['answer91'],
      AnswersMcmi3['answer118'],
      AnswersMcmi3['answer136'],
    ];
    const trueNonPrototypeItems = [
      AnswersMcmi3['answer7'],
      AnswersMcmi3['answer21'],
      AnswersMcmi3['answer38'],
      AnswersMcmi3['answer41'],
      AnswersMcmi3['answer53'],
      AnswersMcmi3['answer101'],
      AnswersMcmi3['answer113'],
      AnswersMcmi3['answer139'],
    ];

    truePrototypeItems.forEach((item) => {
      if (item === 'A') {
        this.resultScaleTGross += 2;
      }
    });
    trueNonPrototypeItems.forEach((item) => {
      if (item === 'A') {
        this.resultScaleTGross += 1;
      }
    });

    if (this.isMale) {
      this.resultScaleTBR =
        this.tableReferenceMcmi3Service.Male['scaleT'][
          `gross${this.resultScaleTGross}` as keyof typeof this.tableReferenceMcmi3Service.Male.scaleT
        ];
    }
    if (this.isFemale) {
      this.resultScaleTBR =
        this.tableReferenceMcmi3Service.Female['scaleT'][
          `gross${this.resultScaleTGross}` as keyof typeof this.tableReferenceMcmi3Service.Female.scaleT
        ];
    }
  }

  scaleR() {
    const truePrototypeItems = [
      AnswersMcmi3['answer109'],
      AnswersMcmi3['answer129'],
      AnswersMcmi3['answer149'],
      AnswersMcmi3['answer160'],
      AnswersMcmi3['answer173'],
    ];
    const trueNonPrototypeItems = [
      AnswersMcmi3['answer62'],
      AnswersMcmi3['answer76'],
      AnswersMcmi3['answer83'],
      AnswersMcmi3['answer123'],
      AnswersMcmi3['answer133'],
      AnswersMcmi3['answer142'],
      AnswersMcmi3['answer147'],
      AnswersMcmi3['answer148'],
      AnswersMcmi3['answer151'],
      AnswersMcmi3['answer154'],
      AnswersMcmi3['answer164'],
    ];

    truePrototypeItems.forEach((item) => {
      if (item === 'A') {
        this.resultScaleRGross += 2;
      }
    });
    trueNonPrototypeItems.forEach((item) => {
      if (item === 'A') {
        this.resultScaleRGross += 1;
      }
    });

    if (this.isMale) {
      this.resultScaleRBR =
        this.tableReferenceMcmi3Service.Male['scaleR'][
          `gross${this.resultScaleRGross}` as keyof typeof this.tableReferenceMcmi3Service.Male.scaleR
        ];
    }
    if (this.isFemale) {
      this.resultScaleRBR =
        this.tableReferenceMcmi3Service.Female['scaleR'][
          `gross${this.resultScaleRGross}` as keyof typeof this.tableReferenceMcmi3Service.Female.scaleR
        ];
    }
  }

  scaleSS() {
    const truePrototypeItems = [
      AnswersMcmi3['answer34'],
      AnswersMcmi3['answer61'],
      AnswersMcmi3['answer68'],
      AnswersMcmi3['answer78'],
      AnswersMcmi3['answer102'],
      AnswersMcmi3['answer168'],
    ];
    const trueNonPrototypeItems = [
      AnswersMcmi3['answer22'],
      AnswersMcmi3['answer56'],
      AnswersMcmi3['answer72'],
      AnswersMcmi3['answer76'],
      AnswersMcmi3['answer83'],
      AnswersMcmi3['answer117'],
      AnswersMcmi3['answer134'],
      AnswersMcmi3['answer142'],
      AnswersMcmi3['answer148'],
      AnswersMcmi3['answer151'],
      AnswersMcmi3['answer162'],
    ];

    truePrototypeItems.forEach((item) => {
      if (item === 'A') {
        this.resultScaleSSGross += 2;
      }
    });
    trueNonPrototypeItems.forEach((item) => {
      if (item === 'A') {
        this.resultScaleSSGross += 1;
      }
    });

    if (this.isMale) {
      this.resultScaleSSBR =
        this.tableReferenceMcmi3Service.Male['scaleSS'][
          `gross${this.resultScaleSSGross}` as keyof typeof this.tableReferenceMcmi3Service.Male.scaleSS
        ];
    }
    if (this.isFemale) {
      this.resultScaleSSBR =
        this.tableReferenceMcmi3Service.Female['scaleSS'][
          `gross${this.resultScaleSSGross}` as keyof typeof this.tableReferenceMcmi3Service.Female.scaleSS
        ];
    }
  }

  scaleCC() {
    const truePrototypeItems = [
      AnswersMcmi3['answer1'],
      AnswersMcmi3['answer44'],
      AnswersMcmi3['answer107'],
      AnswersMcmi3['answer128'],
      AnswersMcmi3['answer150'],
      AnswersMcmi3['answer171'],
    ];
    const trueNonPrototypeItems = [
      AnswersMcmi3['answer4'],
      AnswersMcmi3['answer34'],
      AnswersMcmi3['answer55'],
      AnswersMcmi3['answer74'],
      AnswersMcmi3['answer104'],
      AnswersMcmi3['answer111'],
      AnswersMcmi3['answer130'],
      AnswersMcmi3['answer142'],
      AnswersMcmi3['answer148'],
      AnswersMcmi3['answer149'],
      AnswersMcmi3['answer154'],
    ];

    truePrototypeItems.forEach((item) => {
      if (item === 'A') {
        this.resultScaleCCGross += 2;
      }
    });
    trueNonPrototypeItems.forEach((item) => {
      if (item === 'A') {
        this.resultScaleCCGross += 1;
      }
    });

    if (this.isMale) {
      this.resultScaleCCBR =
        this.tableReferenceMcmi3Service.Male['scaleCC'][
          `gross${this.resultScaleCCGross}` as keyof typeof this.tableReferenceMcmi3Service.Male.scaleCC
        ];
    }
    if (this.isFemale) {
      this.resultScaleCCBR =
        this.tableReferenceMcmi3Service.Female['scaleCC'][
          `gross${this.resultScaleCCGross}` as keyof typeof this.tableReferenceMcmi3Service.Female.scaleCC
        ];
    }
  }

  scalePP() {
    const truePrototypeItems = [
      AnswersMcmi3['answer63'],
      AnswersMcmi3['answer119'],
      AnswersMcmi3['answer140'],
      AnswersMcmi3['answer153'],
    ];
    const trueNonPrototypeItems = [
      AnswersMcmi3['answer5'],
      AnswersMcmi3['answer38'],
      AnswersMcmi3['answer49'],
      AnswersMcmi3['answer67'],
      AnswersMcmi3['answer89'],
      AnswersMcmi3['answer103'],
      AnswersMcmi3['answer138'],
      AnswersMcmi3['answer159'],
      AnswersMcmi3['answer175'],
    ];

    truePrototypeItems.forEach((item) => {
      if (item === 'A') {
        this.resultScalePPGross += 2;
      }
    });
    trueNonPrototypeItems.forEach((item) => {
      if (item === 'A') {
        this.resultScalePPGross += 1;
      }
    });

    if (this.isMale) {
      this.resultScalePPBR =
        this.tableReferenceMcmi3Service.Male['scalePP'][
          `gross${this.resultScalePPGross}` as keyof typeof this.tableReferenceMcmi3Service.Male.scalePP
        ];
    }
    if (this.isFemale) {
      this.resultScalePPBR =
        this.tableReferenceMcmi3Service.Female['scalePP'][
          `gross${this.resultScalePPGross}` as keyof typeof this.tableReferenceMcmi3Service.Female.scalePP
        ];
    }
  }
}
