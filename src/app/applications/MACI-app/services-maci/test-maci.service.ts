import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { AppRoutes } from '../../../models/app-routes.enum';

import { ClientMaciService } from './client-maci.service';
import { CalculateMaciService } from './calculate-maci.service';

@Injectable({
  providedIn: 'root',
})
export class TestMaciService {
  private _router = inject(Router);

  private _clientMaciService = inject(ClientMaciService);
  private _calculateMaciService = inject(CalculateMaciService);

  public startTestBtn(): Promise<boolean> {
    return this._router.navigate([AppRoutes.MaciTest]);
  }

  public resetTest(): void {
    this._clientMaciService.resetClient();
    this._calculateMaciService.resetCalculationVariables();
  }
}
