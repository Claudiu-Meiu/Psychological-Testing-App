import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { AppRoutes } from '../../../models/app-routes.enum';

import { AnswersMcmi3Service } from '../../services-mcmi-3/answers-mcmi-3.service';
import { ClientMcmi3Service } from '../../services-mcmi-3/client-mcmi-3.service';
import { CalculateMcmi3Service } from '../../services-mcmi-3/calculate-mcmi-3.service';
import { TestMcmi3Service } from '../../services-mcmi-3/test-mcmi-3.service';

import { type ClientMcmi3 } from '../../models-mcmi-3/client-mcmi-3.model';

import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatStepperModule } from '@angular/material/stepper';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-test-mcmi-3',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatStepperModule,
    MatIconModule,
    MatTooltipModule,
  ],
  templateUrl: './test-mcmi-3.component.html',
  styleUrl: './test-mcmi-3.component.scss',
})
export class TestMcmi3Component implements OnInit {
  private _router = inject(Router);

  private _testMcmi3Service = inject(TestMcmi3Service);
  public _calculateMcmi3Service = inject(CalculateMcmi3Service);
  private _clientMcmi3Service = inject(ClientMcmi3Service);
  public answersMcmi3Service = inject(AnswersMcmi3Service);

  public selectedClient: ClientMcmi3 | null = null;

  ngOnInit(): void {
    this._clientMcmi3Service.selectedClientSubject.subscribe({
      next: (client) => {
        this.selectedClient = client;
      },
      error: (err) => {
        console.error('Error fetching client data:', err);
      },
    });
  }

  public async exitTest(): Promise<boolean> {
    await this._calculateMcmi3Service.calculateScores();
    this._testMcmi3Service.resetTest();
    return this._router.navigate([AppRoutes.Mcmi3]);
  }

  public async calculateMcmi3ScoresBtn(): Promise<boolean> {
    await this._calculateMcmi3Service.calculateScores();
    return this._router.navigate([AppRoutes.Mcmi3Results]);
  }
}
