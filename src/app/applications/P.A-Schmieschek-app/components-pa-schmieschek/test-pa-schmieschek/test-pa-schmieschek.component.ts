import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { AppRoutes } from '../../../../models/app-routes.enum';

import { AnswersPaSchmieschekService } from '../../services-pa-schmieschek/answers-pa-schmieschek.service';
import { ClientPaSchmieschekService } from '../../services-pa-schmieschek/client-pa-schmieschek.service';
import { CalculatePaSchmieschekService } from '../../services-pa-schmieschek/calculate-pa-schmieschek.service';
import { TestPaSchmieschekService } from '../../services-pa-schmieschek/test-pa-schmieschek.service';

import { type ClientPaSchmieschek } from '../../models-pa-schmieschek/client-pa-schmieschek.model';

import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatStepperModule } from '@angular/material/stepper';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-test-pa-schmieschek',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatStepperModule,
    MatIconModule,
    MatTooltipModule,
  ],
  templateUrl: './test-pa-schmieschek.component.html',
  styleUrl: './test-pa-schmieschek.component.scss',
})
export class TestPaSchmieschekComponent implements OnInit {
  private _router = inject(Router);

  private _testPaSchmieschekService = inject(TestPaSchmieschekService);
  private _calculatePaSchmieschekService = inject(
    CalculatePaSchmieschekService
  );
  private _clientPaSchmieschekService = inject(ClientPaSchmieschekService);
  public answersPaSchmieschekService = inject(AnswersPaSchmieschekService);

  public selectedClient: ClientPaSchmieschek | null = null;

  ngOnInit(): void {
    this._clientPaSchmieschekService.selectedClientSubject.subscribe({
      next: (client) => {
        this.selectedClient = client;
      },
      error: (err) => {
        console.error('Error fetching client data:', err);
      },
    });
  }

  public async exitTest(): Promise<boolean> {
    await this._calculatePaSchmieschekService.calculateScores();
    this._testPaSchmieschekService.resetTest();
    return this._router.navigate([AppRoutes.PaSchmieschek]);
  }

  public async calculatePaSchmieschekScoresBtn(): Promise<boolean> {
    await this._calculatePaSchmieschekService.calculateScores();
    return this._router.navigate([AppRoutes.PaSchmieschekResults]);
  }
}
