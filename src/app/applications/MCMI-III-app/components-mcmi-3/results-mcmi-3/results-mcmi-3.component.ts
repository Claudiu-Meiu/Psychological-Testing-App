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

import { TestMcmi3Service } from '../../services-mcmi-3/test-mcmi-3.service';
import { ClientMcmi3Service } from '../../services-mcmi-3/client-mcmi-3.service';
import { CalculateMcmi3Service } from '../../services-mcmi-3/calculate-mcmi-3.service';

import { type ClientMcmi3 } from '../../models-mcmi-3/client-mcmi-3.model';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatSortModule, MatSort } from '@angular/material/sort';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-results-mcmi-3',
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
  templateUrl: './results-mcmi-3.component.html',
})
export class ResultsMcmi3Component implements OnInit, AfterViewInit {
  @ViewChild(MatSort) sort!: MatSort;

  private _router = inject(Router);

  private _testMcmi3Service = inject(TestMcmi3Service);
  private _clientMcmi3Service = inject(ClientMcmi3Service);
  private _calculateMcmi3Service = inject(CalculateMcmi3Service);

  public displayedMcmi3ResultsTableColumns: string[] = ['scale', 'gross', 'br'];
  public mcmi3Results: any = null;

  public selectedClient: ClientMcmi3 | null = null;

  ngOnInit(): void {
    this._clientMcmi3Service.selectedClientSubject.subscribe({
      next: (client) => {
        if (client) {
          this.selectedClient = client;
          this.mcmi3Results = new MatTableDataSource(client.scores);
          this.mcmi3Results.sort = this.sort;
        } else {
          this.mcmi3Results = null;
        }
      },
      error: (err) => {
        console.error('Error fetching client data:', err);
      },
    });
  }

  ngAfterViewInit(): void {
    this.mcmi3Results.sort = this.sort;
  }

  public applyMcmi3ResultsTableFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.mcmi3Results.filter = filterValue.trim().toLowerCase();
  }

  public goBackToAnswers(): Promise<boolean> {
    this._calculateMcmi3Service.resetCalculationVariables();
    return this._router.navigate([AppRoutes.Mcmi3Test]);
  }

  public exitResults(): Promise<boolean> {
    this._testMcmi3Service.resetTest();
    return this._router.navigate([AppRoutes.Mcmi3]);
  }
}
