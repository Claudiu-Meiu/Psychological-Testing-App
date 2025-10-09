import {
  AfterViewInit,
  Component,
  inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { AppRoutes } from '../../../../models/app-routes.enum';

import { TestPaSchmieschekService } from '../../services-pa-schmieschek/test-pa-schmieschek.service';
import { ClientPaSchmieschekService } from '../../services-pa-schmieschek/client-pa-schmieschek.service';
import { CalculatePaSchmieschekService } from '../../services-pa-schmieschek/calculate-pa-schmieschek.service';

import { type ClientPaSchmieschek } from '../../models-pa-schmieschek/client-pa-schmieschek.model';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatSortModule, MatSort } from '@angular/material/sort';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-results-pa-schmieschek',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatTooltipModule,
  ],
  templateUrl: './results-pa-schmieschek.component.html',
})
export class ResultsPaSchmieschekComponent implements OnInit, AfterViewInit {
  @ViewChild(MatSort) sort!: MatSort;

  private _router = inject(Router);

  private _testPaSchmieschekService = inject(TestPaSchmieschekService);
  private _clientPaSchmieschekService = inject(ClientPaSchmieschekService);
  private _calculatePaSchmieschekService = inject(
    CalculatePaSchmieschekService
  );

  public displayedPaSchmieschekResultsTableColumns: string[] = [
    'groupName',
    'symptomaticAnswers',
    'total',
    'percentage',
  ];
  public paSchmieschekResults: any = null;

  public selectedClient: ClientPaSchmieschek | null = null;

  ngOnInit(): void {
    this._clientPaSchmieschekService.selectedClientSubject.subscribe({
      next: (client) => {
        if (client) {
          this.selectedClient = client;
          this.paSchmieschekResults = new MatTableDataSource(client.scores);
          this.paSchmieschekResults.sort = this.sort;
        } else {
          this.paSchmieschekResults = null;
        }
      },
      error: (err) => {
        console.error('Error fetching client data:', err);
      },
    });
  }

  ngAfterViewInit(): void {
    this.paSchmieschekResults.sort = this.sort;
  }

  public applyPaSchmieschekResultsTableFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.paSchmieschekResults.filter = filterValue.trim().toLowerCase();
  }

  public goBackToAnswers(): Promise<boolean> {
    this._calculatePaSchmieschekService.resetCalculationVariables();
    return this._router.navigate([AppRoutes.PaSchmieschekTest]);
  }

  public exitResults(): Promise<boolean> {
    this._testPaSchmieschekService.resetTest();
    return this._router.navigate([AppRoutes.PaSchmieschek]);
  }
}
