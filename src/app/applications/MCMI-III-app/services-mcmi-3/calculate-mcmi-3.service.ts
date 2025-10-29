import { inject, Injectable } from '@angular/core';

import { ClientMcmi3Service } from './client-mcmi-3.service';
import { TableReferenceMcmi3Service } from './table-reference-mcmi-3.service';
import { MongoDbMcmi3Service } from './mongodb-mcmi-3.service';

import { type ClientMcmi3 } from '../models-mcmi-3/client-mcmi-3.model';

@Injectable({
  providedIn: 'root',
})
export class CalculateMcmi3Service {
  private _clientMcmi3Service = inject(ClientMcmi3Service);
  private _tableReferenceMcmi3Service = inject(TableReferenceMcmi3Service);
  private _mongodbMcmi3Service = inject(MongoDbMcmi3Service);

  private _selectedClient: ClientMcmi3 | null = null;

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

  private _resultScaleSGross: number = 0;
  private _resultScaleSBR: number = 0;

  private _resultScaleCGross: number = 0;
  private _resultScaleCBR: number = 0;

  private _resultScalePGross: number = 0;
  private _resultScalePBR: number = 0;

  private _resultScaleAGross: number = 0;
  private _resultScaleABR: number = 0;

  private _resultScaleHGross: number = 0;
  private _resultScaleHBR: number = 0;

  private _resultScaleNGross: number = 0;
  private _resultScaleNBR: number = 0;

  private _resultScaleDGross: number = 0;
  private _resultScaleDBR: number = 0;

  private _resultScaleBGross: number = 0;
  private _resultScaleBBR: number = 0;

  private _resultScaleTGross: number = 0;
  private _resultScaleTBR: number = 0;

  private _resultScaleRGross: number = 0;
  private _resultScaleRBR: number = 0;

  private _resultScaleSSGross: number = 0;
  private _resultScaleSSBR: number = 0;

  private _resultScaleCCGross: number = 0;
  private _resultScaleCCBR: number = 0;

  private _resultScalePPGross: number = 0;
  private _resultScalePPBR: number = 0;

  constructor() {
    this._clientMcmi3Service.selectedClientSubject.subscribe({
      next: (client) => {
        this._selectedClient = client;
      },
    });
  }

  private _saveScores(): void {
    const scores: object[] = [
      {
        scale: this._tableReferenceMcmi3Service.Titles['scaleX'],
        gross: this._resultScaleXGrossRounded,
        br: this._resultScaleXBR,
      },
      {
        scale: this._tableReferenceMcmi3Service.Titles['scaleY'],
        gross: this._resultScaleYGross,
        br: this._resultScaleYBR,
      },
      {
        scale: this._tableReferenceMcmi3Service.Titles['scaleZ'],
        gross: this._resultScaleZGross,
        br: this._resultScaleZBR,
      },
      {
        scale: this._tableReferenceMcmi3Service.Titles['scale1'],
        gross: this._resultScale1Gross,
        br: this._resultScale1BR,
      },
      {
        scale: this._tableReferenceMcmi3Service.Titles['scale2A'],
        gross: this._resultScale2AGross,
        br: this._resultScale2ABR,
      },
      {
        scale: this._tableReferenceMcmi3Service.Titles['scale2B'],
        gross: this._resultScale2BGross,
        br: this._resultScale2BBR,
      },
      {
        scale: this._tableReferenceMcmi3Service.Titles['scale3'],
        gross: this._resultScale3Gross,
        br: this._resultScale3BR,
      },
      {
        scale: this._tableReferenceMcmi3Service.Titles['scale4'],
        gross: this._resultScale4Gross,
        br: this._resultScale4BR,
      },
      {
        scale: this._tableReferenceMcmi3Service.Titles['scale5'],
        gross: this._resultScale5Gross,
        br: this._resultScale5BR,
      },
      {
        scale: this._tableReferenceMcmi3Service.Titles['scale6A'],
        gross: this._resultScale6AGross,
        br: this._resultScale6ABR,
      },
      {
        scale: this._tableReferenceMcmi3Service.Titles['scale6B'],
        gross: this._resultScale6BGross,
        br: this._resultScale6BBR,
      },
      {
        scale: this._tableReferenceMcmi3Service.Titles['scale7'],
        gross: this._resultScale7Gross,
        br: this._resultScale7BR,
      },
      {
        scale: this._tableReferenceMcmi3Service.Titles['scale8A'],
        gross: this._resultScale8AGross,
        br: this._resultScale8ABR,
      },
      {
        scale: this._tableReferenceMcmi3Service.Titles['scale8B'],
        gross: this._resultScale8BGross,
        br: this._resultScale8BBR,
      },
      {
        scale: this._tableReferenceMcmi3Service.Titles['scaleS'],
        gross: this._resultScaleSGross,
        br: this._resultScaleSBR,
      },
      {
        scale: this._tableReferenceMcmi3Service.Titles['scaleC'],
        gross: this._resultScaleCGross,
        br: this._resultScaleCBR,
      },
      {
        scale: this._tableReferenceMcmi3Service.Titles['scaleP'],
        gross: this._resultScalePGross,
        br: this._resultScalePBR,
      },
      {
        scale: this._tableReferenceMcmi3Service.Titles['scaleA'],
        gross: this._resultScaleAGross,
        br: this._resultScaleABR,
      },
      {
        scale: this._tableReferenceMcmi3Service.Titles['scaleH'],
        gross: this._resultScaleHGross,
        br: this._resultScaleHBR,
      },
      {
        scale: this._tableReferenceMcmi3Service.Titles['scaleN'],
        gross: this._resultScaleNGross,
        br: this._resultScaleNBR,
      },
      {
        scale: this._tableReferenceMcmi3Service.Titles['scaleD'],
        gross: this._resultScaleDGross,
        br: this._resultScaleDBR,
      },
      {
        scale: this._tableReferenceMcmi3Service.Titles['scaleB'],
        gross: this._resultScaleBGross,
        br: this._resultScaleBBR,
      },
      {
        scale: this._tableReferenceMcmi3Service.Titles['scaleT'],
        gross: this._resultScaleTGross,
        br: this._resultScaleTBR,
      },
      {
        scale: this._tableReferenceMcmi3Service.Titles['scaleR'],
        gross: this._resultScaleRGross,
        br: this._resultScaleRBR,
      },
      {
        scale: this._tableReferenceMcmi3Service.Titles['scaleSS'],
        gross: this._resultScaleSSGross,
        br: this._resultScaleSSBR,
      },
      {
        scale: this._tableReferenceMcmi3Service.Titles['scaleCC'],
        gross: this._resultScaleCCGross,
        br: this._resultScaleCCBR,
      },
      {
        scale: this._tableReferenceMcmi3Service.Titles['scalePP'],
        gross: this._resultScalePPGross,
        br: this._resultScalePPBR,
      },
    ];

    this._mongodbMcmi3Service
      .saveScoresForClient(this._selectedClient?._id, scores)
      .subscribe({
        next: (updatedClient: ClientMcmi3) => {
          this._clientMcmi3Service.setSelectedClient(updatedClient);
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
      this._scaleS(),
      this._scaleC(),
      this._scaleP(),
      this._scaleA(),
      this._scaleH(),
      this._scaleN(),
      this._scaleD(),
      this._scaleB(),
      this._scaleT(),
      this._scaleR(),
      this._scaleSS(),
      this._scaleCC(),
      this._scalePP(),
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

    this._resultScaleSGross = 0;
    this._resultScaleSBR = 0;

    this._resultScaleCGross = 0;
    this._resultScaleCBR = 0;

    this._resultScalePGross = 0;
    this._resultScalePBR = 0;

    this._resultScaleAGross = 0;
    this._resultScaleABR = 0;

    this._resultScaleHGross = 0;
    this._resultScaleHBR = 0;

    this._resultScaleNGross = 0;
    this._resultScaleNBR = 0;

    this._resultScaleDGross = 0;
    this._resultScaleDBR = 0;

    this._resultScaleBGross = 0;
    this._resultScaleBBR = 0;

    this._resultScaleTGross = 0;
    this._resultScaleTBR = 0;

    this._resultScaleRGross = 0;
    this._resultScaleRBR = 0;

    this._resultScaleSSGross = 0;
    this._resultScaleSSBR = 0;

    this._resultScaleCCGross = 0;
    this._resultScaleCCBR = 0;

    this._resultScalePPGross = 0;
    this._resultScalePPBR = 0;
  }

  private _scaleX(): void {
    this._resultScaleXGross =
      this._resultScale1Gross +
      this._resultScale2AGross +
      this._resultScale2BGross +
      this._resultScale3Gross +
      this._resultScale4Gross +
      this._resultScale5Gross * 0.6667 +
      this._resultScale6AGross +
      this._resultScale6BGross +
      this._resultScale7Gross +
      this._resultScale8AGross +
      this._resultScale8BGross;

    this._resultScaleXGrossRounded = Math.round(this._resultScaleXGross);

    if (this._resultScaleXGrossRounded < 170) {
      this._resultScaleXBR =
        this._tableReferenceMcmi3Service.X['scaleX'][
          `gross${this._resultScaleXGrossRounded}` as keyof typeof this._tableReferenceMcmi3Service.X.scaleX
        ];
    } else if (this._resultScaleXGrossRounded >= 170) {
      this._resultScaleXBR = 100;
    }
  }

  private _scaleY(): void {
    if (!this._selectedClient) {
      return;
    }

    const trueItems = [
      this._selectedClient.answers['answer32'],
      this._selectedClient.answers['answer51'],
      this._selectedClient.answers['answer57'],
      this._selectedClient.answers['answer59'],
      this._selectedClient.answers['answer80'],
      this._selectedClient.answers['answer82'],
      this._selectedClient.answers['answer88'],
      this._selectedClient.answers['answer97'],
      this._selectedClient.answers['answer137'],
      this._selectedClient.answers['answer172'],
    ];
    const falseItems = [
      this._selectedClient.answers['answer20'],
      this._selectedClient.answers['answer35'],
      this._selectedClient.answers['answer40'],
      this._selectedClient.answers['answer69'],
      this._selectedClient.answers['answer104'],
      this._selectedClient.answers['answer112'],
      this._selectedClient.answers['answer123'],
      this._selectedClient.answers['answer141'],
      this._selectedClient.answers['answer142'],
      this._selectedClient.answers['answer148'],
      this._selectedClient.answers['answer151'],
    ];

    trueItems.forEach((item) => {
      if (item === 'A') {
        this._resultScaleYGross += 1;
      }
    });
    falseItems.forEach((item) => {
      if (item === 'F') {
        this._resultScaleYGross += 1;
      }
    });

    if (this._selectedClient.gender === 'Masculin') {
      this._resultScaleYBR =
        this._tableReferenceMcmi3Service.Male['scaleY'][
          `gross${this._resultScaleYGross}` as keyof typeof this._tableReferenceMcmi3Service.Male.scaleY
        ];
    }
    if (this._selectedClient.gender === 'Feminin') {
      this._resultScaleYBR =
        this._tableReferenceMcmi3Service.Female['scaleY'][
          `gross${this._resultScaleYGross}` as keyof typeof this._tableReferenceMcmi3Service.Female.scaleY
        ];
    }
  }

  private _scaleZ(): void {
    if (!this._selectedClient) {
      return;
    }

    const trueItems = [
      this._selectedClient.answers['answer1'],
      this._selectedClient.answers['answer4'],
      this._selectedClient.answers['answer8'],
      this._selectedClient.answers['answer15'],
      this._selectedClient.answers['answer22'],
      this._selectedClient.answers['answer24'],
      this._selectedClient.answers['answer30'],
      this._selectedClient.answers['answer34'],
      this._selectedClient.answers['answer36'],
      this._selectedClient.answers['answer37'],
      this._selectedClient.answers['answer44'],
      this._selectedClient.answers['answer55'],
      this._selectedClient.answers['answer56'],
      this._selectedClient.answers['answer58'],
      this._selectedClient.answers['answer62'],
      this._selectedClient.answers['answer63'],
      this._selectedClient.answers['answer70'],
      this._selectedClient.answers['answer74'],
      this._selectedClient.answers['answer75'],
      this._selectedClient.answers['answer76'],
      this._selectedClient.answers['answer83'],
      this._selectedClient.answers['answer84'],
      this._selectedClient.answers['answer86'],
      this._selectedClient.answers['answer99'],
      this._selectedClient.answers['answer111'],
      this._selectedClient.answers['answer123'],
      this._selectedClient.answers['answer128'],
      this._selectedClient.answers['answer133'],
      this._selectedClient.answers['answer134'],
      this._selectedClient.answers['answer142'],
      this._selectedClient.answers['answer145'],
      this._selectedClient.answers['answer150'],
      this._selectedClient.answers['answer171'],
    ];

    trueItems.forEach((item) => {
      if (item === 'A') {
        this._resultScaleZGross += 1;
      }
    });

    if (this._selectedClient.gender === 'Masculin') {
      this._resultScaleZBR =
        this._tableReferenceMcmi3Service.Male['scaleZ'][
          `gross${this._resultScaleZGross}` as keyof typeof this._tableReferenceMcmi3Service.Male.scaleZ
        ];
    }
    if (this._selectedClient.gender === 'Feminin') {
      this._resultScaleZBR =
        this._tableReferenceMcmi3Service.Female['scaleZ'][
          `gross${this._resultScaleZGross}` as keyof typeof this._tableReferenceMcmi3Service.Female.scaleZ
        ];
    }
  }

  private _scale1(): void {
    if (!this._selectedClient) {
      return;
    }

    const truePrototypeItems = [
      this._selectedClient.answers['answer10'],
      this._selectedClient.answers['answer27'],
      this._selectedClient.answers['answer46'],
      this._selectedClient.answers['answer92'],
      this._selectedClient.answers['answer105'],
      this._selectedClient.answers['answer148'],
      this._selectedClient.answers['answer165'],
    ];
    const trueNonPrototypeItems = [
      this._selectedClient.answers['answer4'],
      this._selectedClient.answers['answer38'],
      this._selectedClient.answers['answer48'],
      this._selectedClient.answers['answer101'],
      this._selectedClient.answers['answer142'],
      this._selectedClient.answers['answer156'],
      this._selectedClient.answers['answer167'],
    ];
    const falseItems = [
      this._selectedClient.answers['answer32'],
      this._selectedClient.answers['answer57'],
    ];

    truePrototypeItems.forEach((item) => {
      if (item === 'A') {
        this._resultScale1Gross += 2;
      }
    });
    trueNonPrototypeItems.forEach((item) => {
      if (item === 'A') {
        this._resultScale1Gross += 1;
      }
    });
    falseItems.forEach((item) => {
      if (item === 'F') {
        this._resultScale1Gross += 1;
      }
    });

    if (this._selectedClient.gender === 'Masculin') {
      this._resultScale1BR =
        this._tableReferenceMcmi3Service.Male['scale1'][
          `gross${this._resultScale1Gross}` as keyof typeof this._tableReferenceMcmi3Service.Male.scale1
        ];
    }
    if (this._selectedClient.gender === 'Feminin') {
      this._resultScale1BR =
        this._tableReferenceMcmi3Service.Female['scale1'][
          `gross${this._resultScale1Gross}` as keyof typeof this._tableReferenceMcmi3Service.Female.scale1
        ];
    }
  }

  private _scale2A(): void {
    if (!this._selectedClient) {
      return;
    }

    const truePrototypeItems = [
      this._selectedClient.answers['answer18'],
      this._selectedClient.answers['answer40'],
      this._selectedClient.answers['answer69'],
      this._selectedClient.answers['answer84'],
      this._selectedClient.answers['answer99'],
      this._selectedClient.answers['answer127'],
      this._selectedClient.answers['answer141'],
      this._selectedClient.answers['answer174'],
    ];
    const trueNonPrototypeItems = [
      this._selectedClient.answers['answer47'],
      this._selectedClient.answers['answer48'],
      this._selectedClient.answers['answer146'],
      this._selectedClient.answers['answer148'],
      this._selectedClient.answers['answer151'],
      this._selectedClient.answers['answer158'],
    ];
    const falseItems = [
      this._selectedClient.answers['answer57'],
      this._selectedClient.answers['answer80'],
    ];

    truePrototypeItems.forEach((item) => {
      if (item === 'A') {
        this._resultScale2AGross += 2;
      }
    });
    trueNonPrototypeItems.forEach((item) => {
      if (item === 'A') {
        this._resultScale2AGross += 1;
      }
    });
    falseItems.forEach((item) => {
      if (item === 'F') {
        this._resultScale2AGross += 1;
      }
    });

    if (this._selectedClient.gender === 'Masculin') {
      this._resultScale2ABR =
        this._tableReferenceMcmi3Service.Male['scale2A'][
          `gross${this._resultScale2AGross}` as keyof typeof this._tableReferenceMcmi3Service.Male.scale2A
        ];
    }
    if (this._selectedClient.gender === 'Feminin') {
      this._resultScale2ABR =
        this._tableReferenceMcmi3Service.Female['scale2A'][
          `gross${this._resultScale2AGross}` as keyof typeof this._tableReferenceMcmi3Service.Female.scale2A
        ];
    }
  }

  private _scale2B(): void {
    if (!this._selectedClient) {
      return;
    }

    const truePrototypeItems = [
      this._selectedClient.answers['answer20'],
      this._selectedClient.answers['answer25'],
      this._selectedClient.answers['answer47'],
      this._selectedClient.answers['answer112'],
      this._selectedClient.answers['answer123'],
      this._selectedClient.answers['answer133'],
      this._selectedClient.answers['answer145'],
      this._selectedClient.answers['answer151'],
    ];
    const trueNonPrototypeItems = [
      this._selectedClient.answers['answer24'],
      this._selectedClient.answers['answer43'],
      this._selectedClient.answers['answer83'],
      this._selectedClient.answers['answer86'],
      this._selectedClient.answers['answer142'],
      this._selectedClient.answers['answer148'],
      this._selectedClient.answers['answer154'],
    ];

    truePrototypeItems.forEach((item) => {
      if (item === 'A') {
        this._resultScale2BGross += 2;
      }
    });
    trueNonPrototypeItems.forEach((item) => {
      if (item === 'A') {
        this._resultScale2BGross += 1;
      }
    });

    if (this._selectedClient.gender === 'Masculin') {
      this._resultScale2BBR =
        this._tableReferenceMcmi3Service.Male['scale2B'][
          `gross${this._resultScale2BGross}` as keyof typeof this._tableReferenceMcmi3Service.Male.scale2B
        ];
    }
    if (this._selectedClient.gender === 'Feminin') {
      this._resultScale2BBR =
        this._tableReferenceMcmi3Service.Female['scale2B'][
          `gross${this._resultScale2BGross}` as keyof typeof this._tableReferenceMcmi3Service.Female.scale2B
        ];
    }
  }

  private _scale3(): void {
    if (!this._selectedClient) {
      return;
    }

    const truePrototypeItems = [
      this._selectedClient.answers['answer16'],
      this._selectedClient.answers['answer35'],
      this._selectedClient.answers['answer45'],
      this._selectedClient.answers['answer73'],
      this._selectedClient.answers['answer94'],
      this._selectedClient.answers['answer108'],
      this._selectedClient.answers['answer135'],
      this._selectedClient.answers['answer169'],
    ];
    const trueNonPrototypeItems = [
      this._selectedClient.answers['answer47'],
      this._selectedClient.answers['answer56'],
      this._selectedClient.answers['answer84'],
      this._selectedClient.answers['answer120'],
      this._selectedClient.answers['answer133'],
      this._selectedClient.answers['answer141'],
      this._selectedClient.answers['answer151'],
    ];
    const falseItems = [this._selectedClient.answers['answer82']];

    truePrototypeItems.forEach((item) => {
      if (item === 'A') {
        this._resultScale3Gross += 2;
      }
    });
    trueNonPrototypeItems.forEach((item) => {
      if (item === 'A') {
        this._resultScale3Gross += 1;
      }
    });
    falseItems.forEach((item) => {
      if (item === 'F') {
        this._resultScale3Gross += 1;
      }
    });

    if (this._selectedClient.gender === 'Masculin') {
      this._resultScale3BR =
        this._tableReferenceMcmi3Service.Male['scale3'][
          `gross${this._resultScale3Gross}` as keyof typeof this._tableReferenceMcmi3Service.Male.scale3
        ];
    }
    if (this._selectedClient.gender === 'Feminin') {
      this._resultScale3BR =
        this._tableReferenceMcmi3Service.Female['scale3'][
          `gross${this._resultScale3Gross}` as keyof typeof this._tableReferenceMcmi3Service.Female.scale3
        ];
    }
  }

  private _scale4(): void {
    if (!this._selectedClient) {
      return;
    }

    const truePrototypeItems = [
      this._selectedClient.answers['answer12'],
      this._selectedClient.answers['answer21'],
      this._selectedClient.answers['answer32'],
      this._selectedClient.answers['answer51'],
      this._selectedClient.answers['answer57'],
      this._selectedClient.answers['answer80'],
      this._selectedClient.answers['answer88'],
    ];
    const falseItems = [
      this._selectedClient.answers['answer10'],
      this._selectedClient.answers['answer24'],
      this._selectedClient.answers['answer27'],
      this._selectedClient.answers['answer48'],
      this._selectedClient.answers['answer69'],
      this._selectedClient.answers['answer92'],
      this._selectedClient.answers['answer99'],
      this._selectedClient.answers['answer123'],
      this._selectedClient.answers['answer127'],
      this._selectedClient.answers['answer174'],
    ];

    truePrototypeItems.forEach((item) => {
      if (item === 'A') {
        this._resultScale4Gross += 2;
      }
    });
    falseItems.forEach((item) => {
      if (item === 'F') {
        this._resultScale4Gross += 1;
      }
    });

    if (this._selectedClient.gender === 'Masculin') {
      this._resultScale4BR =
        this._tableReferenceMcmi3Service.Male['scale4'][
          `gross${this._resultScale4Gross}` as keyof typeof this._tableReferenceMcmi3Service.Male.scale4
        ];
    }
    if (this._selectedClient.gender === 'Feminin') {
      this._resultScale4BR =
        this._tableReferenceMcmi3Service.Female['scale4'][
          `gross${this._resultScale4Gross}` as keyof typeof this._tableReferenceMcmi3Service.Female.scale4
        ];
    }
  }

  private _scale5(): void {
    if (!this._selectedClient) {
      return;
    }

    const truePrototypeItems = [
      this._selectedClient.answers['answer5'],
      this._selectedClient.answers['answer26'],
      this._selectedClient.answers['answer31'],
      this._selectedClient.answers['answer67'],
      this._selectedClient.answers['answer85'],
      this._selectedClient.answers['answer93'],
      this._selectedClient.answers['answer144'],
      this._selectedClient.answers['answer159'],
    ];
    const trueNonPrototypeItems = [
      this._selectedClient.answers['answer21'],
      this._selectedClient.answers['answer38'],
      this._selectedClient.answers['answer57'],
      this._selectedClient.answers['answer80'],
      this._selectedClient.answers['answer88'],
      this._selectedClient.answers['answer116'],
    ];
    const falseItems = [
      this._selectedClient.answers['answer35'],
      this._selectedClient.answers['answer40'],
      this._selectedClient.answers['answer47'],
      this._selectedClient.answers['answer69'],
      this._selectedClient.answers['answer84'],
      this._selectedClient.answers['answer86'],
      this._selectedClient.answers['answer94'],
      this._selectedClient.answers['answer99'],
      this._selectedClient.answers['answer141'],
      this._selectedClient.answers['answer169'],
    ];

    truePrototypeItems.forEach((item) => {
      if (item === 'A') {
        this._resultScale5Gross += 2;
      }
    });
    trueNonPrototypeItems.forEach((item) => {
      if (item === 'A') {
        this._resultScale5Gross += 1;
      }
    });
    falseItems.forEach((item) => {
      if (item === 'F') {
        this._resultScale5Gross += 1;
      }
    });

    if (this._selectedClient.gender === 'Masculin') {
      this._resultScale5BR =
        this._tableReferenceMcmi3Service.Male['scale5'][
          `gross${this._resultScale5Gross}` as keyof typeof this._tableReferenceMcmi3Service.Male.scale5
        ];
    }
    if (this._selectedClient.gender === 'Feminin') {
      this._resultScale5BR =
        this._tableReferenceMcmi3Service.Female['scale5'][
          `gross${this._resultScale5Gross}` as keyof typeof this._tableReferenceMcmi3Service.Female.scale5
        ];
    }
  }

  private _scale6A(): void {
    if (!this._selectedClient) {
      return;
    }

    const truePrototypeItems = [
      this._selectedClient.answers['answer17'],
      this._selectedClient.answers['answer38'],
      this._selectedClient.answers['answer53'],
      this._selectedClient.answers['answer101'],
      this._selectedClient.answers['answer113'],
      this._selectedClient.answers['answer139'],
      this._selectedClient.answers['answer166'],
    ];
    const trueNonPrototypeItems = [
      this._selectedClient.answers['answer7'],
      this._selectedClient.answers['answer13'],
      this._selectedClient.answers['answer14'],
      this._selectedClient.answers['answer21'],
      this._selectedClient.answers['answer41'],
      this._selectedClient.answers['answer52'],
      this._selectedClient.answers['answer93'],
      this._selectedClient.answers['answer122'],
      this._selectedClient.answers['answer136'],
    ];
    const falseItems = [this._selectedClient.answers['answer172']];

    truePrototypeItems.forEach((item) => {
      if (item === 'A') {
        this._resultScale6AGross += 2;
      }
    });
    trueNonPrototypeItems.forEach((item) => {
      if (item === 'A') {
        this._resultScale6AGross += 1;
      }
    });
    falseItems.forEach((item) => {
      if (item === 'F') {
        this._resultScale6AGross += 1;
      }
    });

    if (this._selectedClient.gender === 'Masculin') {
      this._resultScale6ABR =
        this._tableReferenceMcmi3Service.Male['scale6A'][
          `gross${this._resultScale6AGross}` as keyof typeof this._tableReferenceMcmi3Service.Male.scale6A
        ];
    }
    if (this._selectedClient.gender === 'Feminin') {
      this._resultScale6ABR =
        this._tableReferenceMcmi3Service.Female['scale6A'][
          `gross${this._resultScale6AGross}` as keyof typeof this._tableReferenceMcmi3Service.Female.scale6A
        ];
    }
  }

  private _scale6B(): void {
    if (!this._selectedClient) {
      return;
    }

    const truePrototypeItems = [
      this._selectedClient.answers['answer9'],
      this._selectedClient.answers['answer14'],
      this._selectedClient.answers['answer28'],
      this._selectedClient.answers['answer64'],
      this._selectedClient.answers['answer87'],
      this._selectedClient.answers['answer95'],
      this._selectedClient.answers['answer116'],
    ];
    const trueNonPrototypeItems = [
      this._selectedClient.answers['answer7'],
      this._selectedClient.answers['answer13'],
      this._selectedClient.answers['answer17'],
      this._selectedClient.answers['answer33'],
      this._selectedClient.answers['answer36'],
      this._selectedClient.answers['answer39'],
      this._selectedClient.answers['answer41'],
      this._selectedClient.answers['answer49'],
      this._selectedClient.answers['answer53'],
      this._selectedClient.answers['answer79'],
      this._selectedClient.answers['answer93'],
      this._selectedClient.answers['answer96'],
      this._selectedClient.answers['answer166'],
    ];

    truePrototypeItems.forEach((item) => {
      if (item === 'A') {
        this._resultScale6BGross += 2;
      }
    });
    trueNonPrototypeItems.forEach((item) => {
      if (item === 'A') {
        this._resultScale6BGross += 1;
      }
    });

    if (this._selectedClient.gender === 'Masculin') {
      this._resultScale6BBR =
        this._tableReferenceMcmi3Service.Male['scale6B'][
          `gross${this._resultScale6BGross}` as keyof typeof this._tableReferenceMcmi3Service.Male.scale6B
        ];
    }
    if (this._selectedClient.gender === 'Feminin') {
      this._resultScale6BBR =
        this._tableReferenceMcmi3Service.Female['scale6B'][
          `gross${this._resultScale6BGross}` as keyof typeof this._tableReferenceMcmi3Service.Female.scale6B
        ];
    }
  }

  private _scale7(): void {
    if (!this._selectedClient) {
      return;
    }

    const truePrototypeItems = [
      this._selectedClient.answers['answer2'],
      this._selectedClient.answers['answer29'],
      this._selectedClient.answers['answer59'],
      this._selectedClient.answers['answer82'],
      this._selectedClient.answers['answer97'],
      this._selectedClient.answers['answer114'],
      this._selectedClient.answers['answer137'],
      this._selectedClient.answers['answer172'],
    ];
    const falseItems = [
      this._selectedClient.answers['answer7'],
      this._selectedClient.answers['answer14'],
      this._selectedClient.answers['answer22'],
      this._selectedClient.answers['answer41'],
      this._selectedClient.answers['answer53'],
      this._selectedClient.answers['answer72'],
      this._selectedClient.answers['answer101'],
      this._selectedClient.answers['answer139'],
      this._selectedClient.answers['answer166'],
    ];

    truePrototypeItems.forEach((item) => {
      if (item === 'A') {
        this._resultScale7Gross += 2;
      }
    });
    falseItems.forEach((item) => {
      if (item === 'F') {
        this._resultScale7Gross += 1;
      }
    });

    if (this._selectedClient.gender === 'Masculin') {
      this._resultScale7BR =
        this._tableReferenceMcmi3Service.Male['scale7'][
          `gross${this._resultScale7Gross}` as keyof typeof this._tableReferenceMcmi3Service.Male.scale7
        ];
    }
    if (this._selectedClient.gender === 'Feminin') {
      this._resultScale7BR =
        this._tableReferenceMcmi3Service.Female['scale7'][
          `gross${this._resultScale7Gross}` as keyof typeof this._tableReferenceMcmi3Service.Female.scale7
        ];
    }
  }

  private _scale8A(): void {
    if (!this._selectedClient) {
      return;
    }

    const truePrototypeItems = [
      this._selectedClient.answers['answer7'],
      this._selectedClient.answers['answer15'],
      this._selectedClient.answers['answer22'],
      this._selectedClient.answers['answer36'],
      this._selectedClient.answers['answer50'],
      this._selectedClient.answers['answer60'],
      this._selectedClient.answers['answer79'],
      this._selectedClient.answers['answer115'],
      this._selectedClient.answers['answer126'],
    ];
    const trueNonPrototypeItems = [
      this._selectedClient.answers['answer6'],
      this._selectedClient.answers['answer42'],
      this._selectedClient.answers['answer83'],
      this._selectedClient.answers['answer98'],
      this._selectedClient.answers['answer122'],
      this._selectedClient.answers['answer133'],
      this._selectedClient.answers['answer166'],
    ];

    truePrototypeItems.forEach((item) => {
      if (item === 'A') {
        this._resultScale8AGross += 2;
      }
    });
    trueNonPrototypeItems.forEach((item) => {
      if (item === 'A') {
        this._resultScale8AGross += 1;
      }
    });

    if (this._selectedClient.gender === 'Masculin') {
      this._resultScale8ABR =
        this._tableReferenceMcmi3Service.Male['scale8A'][
          `gross${this._resultScale8AGross}` as keyof typeof this._tableReferenceMcmi3Service.Male.scale8A
        ];
    }
    if (this._selectedClient.gender === 'Feminin') {
      this._resultScale8ABR =
        this._tableReferenceMcmi3Service.Female['scale8A'][
          `gross${this._resultScale8AGross}` as keyof typeof this._tableReferenceMcmi3Service.Female.scale8A
        ];
    }
  }

  private _scale8B(): void {
    if (!this._selectedClient) {
      return;
    }

    const truePrototypeItems = [
      this._selectedClient.answers['answer19'],
      this._selectedClient.answers['answer43'],
      this._selectedClient.answers['answer70'],
      this._selectedClient.answers['answer90'],
      this._selectedClient.answers['answer104'],
      this._selectedClient.answers['answer122'],
      this._selectedClient.answers['answer161'],
    ];
    const trueNonPrototypeItems = [
      this._selectedClient.answers['answer18'],
      this._selectedClient.answers['answer24'],
      this._selectedClient.answers['answer25'],
      this._selectedClient.answers['answer35'],
      this._selectedClient.answers['answer40'],
      this._selectedClient.answers['answer98'],
      this._selectedClient.answers['answer148'],
      this._selectedClient.answers['answer169'],
    ];

    truePrototypeItems.forEach((item) => {
      if (item === 'A') {
        this._resultScale8BGross += 2;
      }
    });
    trueNonPrototypeItems.forEach((item) => {
      if (item === 'A') {
        this._resultScale8BGross += 1;
      }
    });

    if (this._selectedClient.gender === 'Masculin') {
      this._resultScale8BBR =
        this._tableReferenceMcmi3Service.Male['scale8B'][
          `gross${this._resultScale8BGross}` as keyof typeof this._tableReferenceMcmi3Service.Male.scale8B
        ];
    }
    if (this._selectedClient.gender === 'Feminin') {
      this._resultScale8BBR =
        this._tableReferenceMcmi3Service.Female['scale8B'][
          `gross${this._resultScale8BGross}` as keyof typeof this._tableReferenceMcmi3Service.Female.scale8B
        ];
    }
  }

  private _scaleS(): void {
    if (!this._selectedClient) {
      return;
    }

    const truePrototypeItems = [
      this._selectedClient.answers['answer8'],
      this._selectedClient.answers['answer48'],
      this._selectedClient.answers['answer71'],
      this._selectedClient.answers['answer76'],
      this._selectedClient.answers['answer117'],
      this._selectedClient.answers['answer138'],
      this._selectedClient.answers['answer156'],
      this._selectedClient.answers['answer158'],
      this._selectedClient.answers['answer162'],
    ];
    const trueNonPrototypeItems = [
      this._selectedClient.answers['answer69'],
      this._selectedClient.answers['answer99'],
      this._selectedClient.answers['answer102'],
      this._selectedClient.answers['answer134'],
      this._selectedClient.answers['answer141'],
      this._selectedClient.answers['answer148'],
      this._selectedClient.answers['answer151'],
    ];

    truePrototypeItems.forEach((item) => {
      if (item === 'A') {
        this._resultScaleSGross += 2;
      }
    });
    trueNonPrototypeItems.forEach((item) => {
      if (item === 'A') {
        this._resultScaleSGross += 1;
      }
    });

    if (this._selectedClient.gender === 'Masculin') {
      this._resultScaleSBR =
        this._tableReferenceMcmi3Service.Male['scaleS'][
          `gross${this._resultScaleSGross}` as keyof typeof this._tableReferenceMcmi3Service.Male.scaleS
        ];
    }
    if (this._selectedClient.gender === 'Feminin') {
      this._resultScaleSBR =
        this._tableReferenceMcmi3Service.Female['scaleS'][
          `gross${this._resultScaleSGross}` as keyof typeof this._tableReferenceMcmi3Service.Female.scaleS
        ];
    }
  }

  private _scaleC(): void {
    if (!this._selectedClient) {
      return;
    }

    const truePrototypeItems = [
      this._selectedClient.answers['answer30'],
      this._selectedClient.answers['answer41'],
      this._selectedClient.answers['answer72'],
      this._selectedClient.answers['answer83'],
      this._selectedClient.answers['answer98'],
      this._selectedClient.answers['answer120'],
      this._selectedClient.answers['answer134'],
      this._selectedClient.answers['answer142'],
      this._selectedClient.answers['answer154'],
    ];
    const trueNonPrototypeItems = [
      this._selectedClient.answers['answer7'],
      this._selectedClient.answers['answer22'],
      this._selectedClient.answers['answer122'],
      this._selectedClient.answers['answer135'],
      this._selectedClient.answers['answer161'],
      this._selectedClient.answers['answer166'],
      this._selectedClient.answers['answer171'],
    ];

    truePrototypeItems.forEach((item) => {
      if (item === 'A') {
        this._resultScaleCGross += 2;
      }
    });
    trueNonPrototypeItems.forEach((item) => {
      if (item === 'A') {
        this._resultScaleCGross += 1;
      }
    });

    if (this._selectedClient.gender === 'Masculin') {
      this._resultScaleCBR =
        this._tableReferenceMcmi3Service.Male['scaleC'][
          `gross${this._resultScaleCGross}` as keyof typeof this._tableReferenceMcmi3Service.Male.scaleC
        ];
    }
    if (this._selectedClient.gender === 'Feminin') {
      this._resultScaleCBR =
        this._tableReferenceMcmi3Service.Female['scaleC'][
          `gross${this._resultScaleCGross}` as keyof typeof this._tableReferenceMcmi3Service.Female.scaleC
        ];
    }
  }

  private _scaleP(): void {
    if (!this._selectedClient) {
      return;
    }

    const truePrototypeItems = [
      this._selectedClient.answers['answer6'],
      this._selectedClient.answers['answer33'],
      this._selectedClient.answers['answer42'],
      this._selectedClient.answers['answer49'],
      this._selectedClient.answers['answer89'],
      this._selectedClient.answers['answer103'],
      this._selectedClient.answers['answer146'],
      this._selectedClient.answers['answer167'],
      this._selectedClient.answers['answer175'],
    ];
    const trueNonPrototypeItems = [
      this._selectedClient.answers['answer8'],
      this._selectedClient.answers['answer48'],
      this._selectedClient.answers['answer60'],
      this._selectedClient.answers['answer63'],
      this._selectedClient.answers['answer115'],
      this._selectedClient.answers['answer138'],
      this._selectedClient.answers['answer158'],
      this._selectedClient.answers['answer159'],
    ];

    truePrototypeItems.forEach((item) => {
      if (item === 'A') {
        this._resultScalePGross += 2;
      }
    });
    trueNonPrototypeItems.forEach((item) => {
      if (item === 'A') {
        this._resultScalePGross += 1;
      }
    });

    if (this._selectedClient.gender === 'Masculin') {
      this._resultScalePBR =
        this._tableReferenceMcmi3Service.Male['scaleP'][
          `gross${this._resultScalePGross}` as keyof typeof this._tableReferenceMcmi3Service.Male.scaleP
        ];
    }
    if (this._selectedClient.gender === 'Feminin') {
      this._resultScalePBR =
        this._tableReferenceMcmi3Service.Female['scaleP'][
          `gross${this._resultScalePGross}` as keyof typeof this._tableReferenceMcmi3Service.Female.scaleP
        ];
    }
  }

  private _scaleA(): void {
    if (!this._selectedClient) {
      return;
    }

    const truePrototypeItems = [
      this._selectedClient.answers['answer58'],
      this._selectedClient.answers['answer75'],
      this._selectedClient.answers['answer124'],
      this._selectedClient.answers['answer147'],
      this._selectedClient.answers['answer164'],
      this._selectedClient.answers['answer170'],
    ];
    const trueNonPrototypeItems = [
      this._selectedClient.answers['answer40'],
      this._selectedClient.answers['answer61'],
      this._selectedClient.answers['answer76'],
      this._selectedClient.answers['answer108'],
      this._selectedClient.answers['answer109'],
      this._selectedClient.answers['answer135'],
      this._selectedClient.answers['answer145'],
      this._selectedClient.answers['answer149'],
    ];

    truePrototypeItems.forEach((item) => {
      if (item === 'A') {
        this._resultScaleAGross += 2;
      }
    });
    trueNonPrototypeItems.forEach((item) => {
      if (item === 'A') {
        this._resultScaleAGross += 1;
      }
    });

    if (this._selectedClient.gender === 'Masculin') {
      this._resultScaleABR =
        this._tableReferenceMcmi3Service.Male['scaleA'][
          `gross${this._resultScaleAGross}` as keyof typeof this._tableReferenceMcmi3Service.Male.scaleA
        ];
    }
    if (this._selectedClient.gender === 'Feminin') {
      this._resultScaleABR =
        this._tableReferenceMcmi3Service.Female['scaleA'][
          `gross${this._resultScaleAGross}` as keyof typeof this._tableReferenceMcmi3Service.Female.scaleA
        ];
    }
  }

  private _scaleH(): void {
    if (!this._selectedClient) {
      return;
    }

    const truePrototypeItems = [
      this._selectedClient.answers['answer4'],
      this._selectedClient.answers['answer11'],
      this._selectedClient.answers['answer37'],
      this._selectedClient.answers['answer55'],
      this._selectedClient.answers['answer74'],
    ];
    const trueNonPrototypeItems = [
      this._selectedClient.answers['answer1'],
      this._selectedClient.answers['answer75'],
      this._selectedClient.answers['answer107'],
      this._selectedClient.answers['answer111'],
      this._selectedClient.answers['answer130'],
      this._selectedClient.answers['answer145'],
      this._selectedClient.answers['answer148'],
    ];

    truePrototypeItems.forEach((item) => {
      if (item === 'A') {
        this._resultScaleHGross += 2;
      }
    });
    trueNonPrototypeItems.forEach((item) => {
      if (item === 'A') {
        this._resultScaleHGross += 1;
      }
    });

    if (this._selectedClient.gender === 'Masculin') {
      this._resultScaleHBR =
        this._tableReferenceMcmi3Service.Male['scaleH'][
          `gross${this._resultScaleHGross}` as keyof typeof this._tableReferenceMcmi3Service.Male.scaleH
        ];
    }
    if (this._selectedClient.gender === 'Feminin') {
      this._resultScaleHBR =
        this._tableReferenceMcmi3Service.Female['scaleH'][
          `gross${this._resultScaleHGross}` as keyof typeof this._tableReferenceMcmi3Service.Female.scaleH
        ];
    }
  }

  private _scaleN(): void {
    if (!this._selectedClient) {
      return;
    }

    const truePrototypeItems = [
      this._selectedClient.answers['answer3'],
      this._selectedClient.answers['answer54'],
      this._selectedClient.answers['answer96'],
      this._selectedClient.answers['answer106'],
      this._selectedClient.answers['answer125'],
    ];
    const trueNonPrototypeItems = [
      this._selectedClient.answers['answer22'],
      this._selectedClient.answers['answer41'],
      this._selectedClient.answers['answer51'],
      this._selectedClient.answers['answer83'],
      this._selectedClient.answers['answer117'],
      this._selectedClient.answers['answer134'],
      this._selectedClient.answers['answer166'],
      this._selectedClient.answers['answer170'],
    ];

    truePrototypeItems.forEach((item) => {
      if (item === 'A') {
        this._resultScaleNGross += 2;
      }
    });
    trueNonPrototypeItems.forEach((item) => {
      if (item === 'A') {
        this._resultScaleNGross += 1;
      }
    });

    if (this._selectedClient.gender === 'Masculin') {
      this._resultScaleNBR =
        this._tableReferenceMcmi3Service.Male['scaleN'][
          `gross${this._resultScaleNGross}` as keyof typeof this._tableReferenceMcmi3Service.Male.scaleN
        ];
    }
    if (this._selectedClient.gender === 'Feminin') {
      this._resultScaleNBR =
        this._tableReferenceMcmi3Service.Female['scaleN'][
          `gross${this._resultScaleNGross}` as keyof typeof this._tableReferenceMcmi3Service.Female.scaleN
        ];
    }
  }

  private _scaleD(): void {
    if (!this._selectedClient) {
      return;
    }

    const truePrototypeItems = [
      this._selectedClient.answers['answer24'],
      this._selectedClient.answers['answer56'],
      this._selectedClient.answers['answer62'],
      this._selectedClient.answers['answer86'],
      this._selectedClient.answers['answer111'],
      this._selectedClient.answers['answer130'],
    ];
    const trueNonPrototypeItems = [
      this._selectedClient.answers['answer15'],
      this._selectedClient.answers['answer25'],
      this._selectedClient.answers['answer55'],
      this._selectedClient.answers['answer83'],
      this._selectedClient.answers['answer104'],
      this._selectedClient.answers['answer141'],
      this._selectedClient.answers['answer142'],
      this._selectedClient.answers['answer148'],
    ];

    truePrototypeItems.forEach((item) => {
      if (item === 'A') {
        this._resultScaleDGross += 2;
      }
    });
    trueNonPrototypeItems.forEach((item) => {
      if (item === 'A') {
        this._resultScaleDGross += 1;
      }
    });

    if (this._selectedClient.gender === 'Masculin') {
      this._resultScaleDBR =
        this._tableReferenceMcmi3Service.Male['scaleD'][
          `gross${this._resultScaleDGross}` as keyof typeof this._tableReferenceMcmi3Service.Male.scaleD
        ];
    }
    if (this._selectedClient.gender === 'Feminin') {
      this._resultScaleDBR =
        this._tableReferenceMcmi3Service.Female['scaleD'][
          `gross${this._resultScaleDGross}` as keyof typeof this._tableReferenceMcmi3Service.Female.scaleD
        ];
    }
  }

  private _scaleB(): void {
    if (!this._selectedClient) {
      return;
    }

    const truePrototypeItems = [
      this._selectedClient.answers['answer52'],
      this._selectedClient.answers['answer77'],
      this._selectedClient.answers['answer100'],
      this._selectedClient.answers['answer131'],
      this._selectedClient.answers['answer152'],
    ];
    const trueNonPrototypeItems = [
      this._selectedClient.answers['answer14'],
      this._selectedClient.answers['answer41'],
      this._selectedClient.answers['answer64'],
      this._selectedClient.answers['answer93'],
      this._selectedClient.answers['answer101'],
      this._selectedClient.answers['answer113'],
      this._selectedClient.answers['answer122'],
      this._selectedClient.answers['answer139'],
      this._selectedClient.answers['answer166'],
    ];
    const falseItems = [this._selectedClient.answers['answer23']];

    truePrototypeItems.forEach((item) => {
      if (item === 'A') {
        this._resultScaleBGross += 2;
      }
    });
    trueNonPrototypeItems.forEach((item) => {
      if (item === 'A') {
        this._resultScaleBGross += 1;
      }
    });
    falseItems.forEach((item) => {
      if (item === 'F') {
        this._resultScaleBGross += 2;
      }
    });

    if (this._selectedClient.gender === 'Masculin') {
      this._resultScaleBBR =
        this._tableReferenceMcmi3Service.Male['scaleB'][
          `gross${this._resultScaleBGross}` as keyof typeof this._tableReferenceMcmi3Service.Male.scaleB
        ];
    }
    if (this._selectedClient.gender === 'Feminin') {
      this._resultScaleBBR =
        this._tableReferenceMcmi3Service.Female['scaleB'][
          `gross${this._resultScaleBGross}` as keyof typeof this._tableReferenceMcmi3Service.Female.scaleB
        ];
    }
  }

  private _scaleT(): void {
    if (!this._selectedClient) {
      return;
    }

    const truePrototypeItems = [
      this._selectedClient.answers['answer13'],
      this._selectedClient.answers['answer39'],
      this._selectedClient.answers['answer66'],
      this._selectedClient.answers['answer91'],
      this._selectedClient.answers['answer118'],
      this._selectedClient.answers['answer136'],
    ];
    const trueNonPrototypeItems = [
      this._selectedClient.answers['answer7'],
      this._selectedClient.answers['answer21'],
      this._selectedClient.answers['answer38'],
      this._selectedClient.answers['answer41'],
      this._selectedClient.answers['answer53'],
      this._selectedClient.answers['answer101'],
      this._selectedClient.answers['answer113'],
      this._selectedClient.answers['answer139'],
    ];

    truePrototypeItems.forEach((item) => {
      if (item === 'A') {
        this._resultScaleTGross += 2;
      }
    });
    trueNonPrototypeItems.forEach((item) => {
      if (item === 'A') {
        this._resultScaleTGross += 1;
      }
    });

    if (this._selectedClient.gender === 'Masculin') {
      this._resultScaleTBR =
        this._tableReferenceMcmi3Service.Male['scaleT'][
          `gross${this._resultScaleTGross}` as keyof typeof this._tableReferenceMcmi3Service.Male.scaleT
        ];
    }
    if (this._selectedClient.gender === 'Feminin') {
      this._resultScaleTBR =
        this._tableReferenceMcmi3Service.Female['scaleT'][
          `gross${this._resultScaleTGross}` as keyof typeof this._tableReferenceMcmi3Service.Female.scaleT
        ];
    }
  }

  private _scaleR(): void {
    if (!this._selectedClient) {
      return;
    }

    const truePrototypeItems = [
      this._selectedClient.answers['answer109'],
      this._selectedClient.answers['answer129'],
      this._selectedClient.answers['answer149'],
      this._selectedClient.answers['answer160'],
      this._selectedClient.answers['answer173'],
    ];
    const trueNonPrototypeItems = [
      this._selectedClient.answers['answer62'],
      this._selectedClient.answers['answer76'],
      this._selectedClient.answers['answer83'],
      this._selectedClient.answers['answer123'],
      this._selectedClient.answers['answer133'],
      this._selectedClient.answers['answer142'],
      this._selectedClient.answers['answer147'],
      this._selectedClient.answers['answer148'],
      this._selectedClient.answers['answer151'],
      this._selectedClient.answers['answer154'],
      this._selectedClient.answers['answer164'],
    ];

    truePrototypeItems.forEach((item) => {
      if (item === 'A') {
        this._resultScaleRGross += 2;
      }
    });
    trueNonPrototypeItems.forEach((item) => {
      if (item === 'A') {
        this._resultScaleRGross += 1;
      }
    });

    if (this._selectedClient.gender === 'Masculin') {
      this._resultScaleRBR =
        this._tableReferenceMcmi3Service.Male['scaleR'][
          `gross${this._resultScaleRGross}` as keyof typeof this._tableReferenceMcmi3Service.Male.scaleR
        ];
    }
    if (this._selectedClient.gender === 'Feminin') {
      this._resultScaleRBR =
        this._tableReferenceMcmi3Service.Female['scaleR'][
          `gross${this._resultScaleRGross}` as keyof typeof this._tableReferenceMcmi3Service.Female.scaleR
        ];
    }
  }

  private _scaleSS(): void {
    if (!this._selectedClient) {
      return;
    }

    const truePrototypeItems = [
      this._selectedClient.answers['answer34'],
      this._selectedClient.answers['answer61'],
      this._selectedClient.answers['answer68'],
      this._selectedClient.answers['answer78'],
      this._selectedClient.answers['answer102'],
      this._selectedClient.answers['answer168'],
    ];
    const trueNonPrototypeItems = [
      this._selectedClient.answers['answer22'],
      this._selectedClient.answers['answer56'],
      this._selectedClient.answers['answer72'],
      this._selectedClient.answers['answer76'],
      this._selectedClient.answers['answer83'],
      this._selectedClient.answers['answer117'],
      this._selectedClient.answers['answer134'],
      this._selectedClient.answers['answer142'],
      this._selectedClient.answers['answer148'],
      this._selectedClient.answers['answer151'],
      this._selectedClient.answers['answer162'],
    ];

    truePrototypeItems.forEach((item) => {
      if (item === 'A') {
        this._resultScaleSSGross += 2;
      }
    });
    trueNonPrototypeItems.forEach((item) => {
      if (item === 'A') {
        this._resultScaleSSGross += 1;
      }
    });

    if (this._selectedClient.gender === 'Masculin') {
      this._resultScaleSSBR =
        this._tableReferenceMcmi3Service.Male['scaleSS'][
          `gross${this._resultScaleSSGross}` as keyof typeof this._tableReferenceMcmi3Service.Male.scaleSS
        ];
    }
    if (this._selectedClient.gender === 'Feminin') {
      this._resultScaleSSBR =
        this._tableReferenceMcmi3Service.Female['scaleSS'][
          `gross${this._resultScaleSSGross}` as keyof typeof this._tableReferenceMcmi3Service.Female.scaleSS
        ];
    }
  }

  private _scaleCC(): void {
    if (!this._selectedClient) {
      return;
    }

    const truePrototypeItems = [
      this._selectedClient.answers['answer1'],
      this._selectedClient.answers['answer44'],
      this._selectedClient.answers['answer107'],
      this._selectedClient.answers['answer128'],
      this._selectedClient.answers['answer150'],
      this._selectedClient.answers['answer171'],
    ];
    const trueNonPrototypeItems = [
      this._selectedClient.answers['answer4'],
      this._selectedClient.answers['answer34'],
      this._selectedClient.answers['answer55'],
      this._selectedClient.answers['answer74'],
      this._selectedClient.answers['answer104'],
      this._selectedClient.answers['answer111'],
      this._selectedClient.answers['answer130'],
      this._selectedClient.answers['answer142'],
      this._selectedClient.answers['answer148'],
      this._selectedClient.answers['answer149'],
      this._selectedClient.answers['answer154'],
    ];

    truePrototypeItems.forEach((item) => {
      if (item === 'A') {
        this._resultScaleCCGross += 2;
      }
    });
    trueNonPrototypeItems.forEach((item) => {
      if (item === 'A') {
        this._resultScaleCCGross += 1;
      }
    });

    if (this._selectedClient.gender === 'Masculin') {
      this._resultScaleCCBR =
        this._tableReferenceMcmi3Service.Male['scaleCC'][
          `gross${this._resultScaleCCGross}` as keyof typeof this._tableReferenceMcmi3Service.Male.scaleCC
        ];
    }
    if (this._selectedClient.gender === 'Feminin') {
      this._resultScaleCCBR =
        this._tableReferenceMcmi3Service.Female['scaleCC'][
          `gross${this._resultScaleCCGross}` as keyof typeof this._tableReferenceMcmi3Service.Female.scaleCC
        ];
    }
  }

  private _scalePP(): void {
    if (!this._selectedClient) {
      return;
    }

    const truePrototypeItems = [
      this._selectedClient.answers['answer63'],
      this._selectedClient.answers['answer119'],
      this._selectedClient.answers['answer140'],
      this._selectedClient.answers['answer153'],
    ];
    const trueNonPrototypeItems = [
      this._selectedClient.answers['answer5'],
      this._selectedClient.answers['answer38'],
      this._selectedClient.answers['answer49'],
      this._selectedClient.answers['answer67'],
      this._selectedClient.answers['answer89'],
      this._selectedClient.answers['answer103'],
      this._selectedClient.answers['answer138'],
      this._selectedClient.answers['answer159'],
      this._selectedClient.answers['answer175'],
    ];

    truePrototypeItems.forEach((item) => {
      if (item === 'A') {
        this._resultScalePPGross += 2;
      }
    });
    trueNonPrototypeItems.forEach((item) => {
      if (item === 'A') {
        this._resultScalePPGross += 1;
      }
    });

    if (this._selectedClient.gender === 'Masculin') {
      this._resultScalePPBR =
        this._tableReferenceMcmi3Service.Male['scalePP'][
          `gross${this._resultScalePPGross}` as keyof typeof this._tableReferenceMcmi3Service.Male.scalePP
        ];
    }
    if (this._selectedClient.gender === 'Feminin') {
      this._resultScalePPBR =
        this._tableReferenceMcmi3Service.Female['scalePP'][
          `gross${this._resultScalePPGross}` as keyof typeof this._tableReferenceMcmi3Service.Female.scalePP
        ];
    }
  }
}
