import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { AppRoutes } from '../../models/app-routes.enum';

import { ClientMcmi3Service } from './client-mcmi-3.service';
import { CalculateMcmi3Service } from './calculate-mcmi-3.service';

@Injectable({
  providedIn: 'root',
})
export class TestMcmi3Service {
  private _router = inject(Router);

  private _clientMcmi3Service = inject(ClientMcmi3Service);
  private _calculateMcmi3Service = inject(CalculateMcmi3Service);

  public startTestBtn(): Promise<boolean> {
    return this._router.navigate([AppRoutes.Mcmi3Test]);
  }

  public resetTest(): void {
    this._clientMcmi3Service.resetClient();
    this._calculateMcmi3Service.resetCalculationVariables();
  }
}
