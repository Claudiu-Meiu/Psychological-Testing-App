import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { AppRoutes } from '../../../../models/app-routes.enum';

import { TestMaciService } from '../../services-maci/test-maci.service';
import { AnswersMaciService } from '../../services-maci/answers-maci.service';
import { ClientMaciService } from '../../services-maci/client-maci.service';
import { CalculateMaciService } from '../../services-maci/calculate-maci.service';

import { type ClientMaci } from '../../models-maci/client-maci.model';

import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatStepperModule } from '@angular/material/stepper';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-test-maci',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatStepperModule,
    MatIconModule,
    MatTooltipModule,
  ],
  templateUrl: './test-maci.component.html',
})
export class TestMaciComponent implements OnInit {
  private _router = inject(Router);

  private _testMaciService = inject(TestMaciService);
  private _calculateMaciService = inject(CalculateMaciService);
  private _clientMaciService = inject(ClientMaciService);
  public answersMaciService = inject(AnswersMaciService);

  public selectedClient: ClientMaci | null = null;

  ngOnInit(): void {
    this._clientMaciService.selectedClientSubject.subscribe({
      next: (client) => {
        if (client) {
          this.selectedClient = client;
        }
      },
      error: (err) => {
        console.error('Error fetching client data:', err);
      },
    });
  }

  public async exitTest(): Promise<boolean> {
    await this._calculateMaciService.calculateScores();
    this._testMaciService.resetTest();
    return this._router.navigate([AppRoutes.Maci]);
  }

  public async calculateMaciScoresBtn(): Promise<boolean> {
    await this._calculateMaciService.calculateScores();
    return this._router.navigate([AppRoutes.MaciResults]);
  }
}
