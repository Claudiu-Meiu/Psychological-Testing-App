import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { AppRoutes } from '../../../models/app-routes.enum';

import { ClientPaSchmieschekService } from './client-pa-schmieschek.service';
import { CalculatePaSchmieschekService } from './calculate-pa-schmieschek.service';

@Injectable({
  providedIn: 'root',
})
export class TestPaSchmieschekService {
  private _router = inject(Router);

  private _clientPaSchmieschekService = inject(ClientPaSchmieschekService);
  private _calculatePaSchmieschekService = inject(
    CalculatePaSchmieschekService
  );

  public startTestBtn(): Promise<boolean> {
    return this._router.navigate([AppRoutes.PaSchmieschekTest]);
  }

  public resetTest(): void {
    this._clientPaSchmieschekService.resetClient();
    this._calculatePaSchmieschekService.resetCalculationVariables();
  }
}
