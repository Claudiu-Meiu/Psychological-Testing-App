import {
  AfterViewInit,
  Component,
  inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { AppRoutes } from '../../../models/app-routes.enum';

import { TestMaciService } from '../../services-maci/test-maci.service';
import { ClientMaciService } from '../../services-maci/client-maci.service';
import { CalculateMaciService } from '../../services-maci/calculate-maci.service';

import { type ClientMaci } from '../../models-maci/client-maci.model';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatSortModule, MatSort } from '@angular/material/sort';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-results-maci',
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
  templateUrl: './results-maci.component.html',
})
export class ResultsMaciComponent implements OnInit, AfterViewInit {
  @ViewChild(MatSort) sort!: MatSort;

  private _router = inject(Router);

  private _testMaciService = inject(TestMaciService);
  private _clientMaciService = inject(ClientMaciService);
  private _calculateMaciService = inject(CalculateMaciService);

  public displayedMaciResultsTableColumns: string[] = ['scale', 'gross', 'br'];
  public maciResults: any = null;

  public selectedClient: ClientMaci | null = null;

  ngOnInit(): void {
    this._clientMaciService.selectedClientSubject.subscribe({
      next: (client) => {
        if (client) {
          this.selectedClient = client;
          this.maciResults = new MatTableDataSource(client.scores);
          this.maciResults.sort = this.sort;
        } else {
          this.maciResults = null;
        }
      },
      error: (err) => {
        console.error('Error fetching client data:', err);
      },
    });
  }

  ngAfterViewInit(): void {
    this.maciResults.sort = this.sort;
  }

  public applyMaciResultsTableFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.maciResults.filter = filterValue.trim().toLowerCase();
  }

  public goBackToAnswers(): Promise<boolean> {
    this._calculateMaciService.resetCalculationVariables();
    return this._router.navigate([AppRoutes.MaciTest]);
  }

  public exitResults(): Promise<boolean> {
    this._testMaciService.resetTest();
    return this._router.navigate([AppRoutes.Maci]);
  }
}
