import {
  AfterViewInit,
  Component,
  Inject,
  inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { AppRoutes } from '../../../models/app-routes.enum';

import { MongoDbMaciService } from '../../services-maci/mongodb-maci.service';
import { AnswersMaciService } from '../../services-maci/answers-maci.service';
import { TestMaciService } from '../../services-maci/test-maci.service';
import { CalculateMaciService } from '../../services-maci/calculate-maci.service';
import { ClientMaciService } from '../../services-maci/client-maci.service';

import { type ClientMaci } from '../../models-maci/client-maci.model';

import { PaginatorIntlService } from '../../../services/overrides/paginatorIntl.service';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import {
  MatPaginatorModule,
  MatPaginator,
  MatPaginatorIntl,
} from '@angular/material/paginator';
import { MatSortModule, MatSort } from '@angular/material/sort';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-portal-maci',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatRadioModule,
    MatIconModule,
    MatSelectModule,
    MatTabsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatTooltipModule,
  ],
  providers: [{ provide: MatPaginatorIntl, useClass: PaginatorIntlService }],
  templateUrl: './portal-maci.component.html',
})
export class PortalMaciComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  private _router = inject(Router);

  readonly dialog = inject(MatDialog);

  private _mongoDbMaciService = inject(MongoDbMaciService);
  private _answersMaciService = inject(AnswersMaciService);
  private _testMaciService = inject(TestMaciService);
  private _calculateMaciService = inject(CalculateMaciService);
  public clientMaciService = inject(ClientMaciService);

  public allMaciClients: MatTableDataSource<ClientMaci> =
    new MatTableDataSource<ClientMaci>();

  public displayedMaciTableColumns: string[] = [
    'delete',
    'name',
    'gender',
    'age',
    'select',
    'results',
  ];

  ngOnInit(): void {
    this._loadMaciClientsFromDb();
    this.allMaciClients.paginator = this.paginator;
  }

  ngAfterViewInit(): void {
    this.allMaciClients.paginator = this.paginator;
    this.allMaciClients.sort = this.sort;
  }

  public applyMaciTableFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.allMaciClients.filter = filterValue.trim().toLowerCase();

    if (this.allMaciClients.paginator) {
      this.allMaciClients.paginator.firstPage();
    }
  }

  private _loadMaciClientsFromDb(): void {
    this._mongoDbMaciService.getClients().subscribe((clients: ClientMaci[]) => {
      this.allMaciClients.data = clients;
    });
  }

  private _addMaciClient(): void {
    const newClient: ClientMaci = {
      gender: this.clientMaciService.genderValue,
      name: this.clientMaciService.nameValue,
      age: this.clientMaciService.ageValue,
      answers: this._answersMaciService.generateEmptyAnswersObjectMaci(),
    };

    this._mongoDbMaciService.addClient(newClient).subscribe({
      next: (client: ClientMaci) => {
        this.allMaciClients.data = [...this.allMaciClients.data, client];

        this.clientMaciService.setSelectedClient(client);

        this._answersMaciService.savedAnswers =
          this._answersMaciService.getAnswers();
      },
      error: (err) => {
        console.error('Error adding client:', err);
      },
    });
  }

  public selectClient(client: ClientMaci): void {
    this.clientMaciService.setSelectedClient(client);

    this._answersMaciService.savedAnswers =
      this._answersMaciService.getAnswers();
  }

  public deleteClient(clientId: string): void {
    this._mongoDbMaciService.deleteClient(clientId).subscribe({
      next: () => {
        this.allMaciClients.data = this.allMaciClients.data.filter(
          (selectedClient: ClientMaci) => selectedClient._id !== clientId
        );
      },
      error: (error) => {
        console.error('Error deleting client:', error);
      },
    });
  }

  public onSubmit(): void {
    this._addMaciClient();
    this._testMaciService.startTestBtn();
  }

  public async viewAnswers(): Promise<boolean> {
    await this._calculateMaciService.calculateScores();
    this._testMaciService.resetTest();
    return this._router.navigate([AppRoutes.MaciTest]);
  }

  public async viewResults(): Promise<boolean> {
    await this._calculateMaciService.calculateScores();
    return this._router.navigate([AppRoutes.MaciResults]);
  }

  public exitPortal(): Promise<boolean> {
    this._testMaciService.resetTest();
    return this._router.navigate([AppRoutes.Home]);
  }

  public openDeleteMaciClientDialog(
    client: ClientMaci,
    enterAnimationDuration: string,
    exitAnimationDuration: string
  ): void {
    const dialogRef = this.dialog.open(DeleteMaciClientDialog, {
      width: '350px',
      enterAnimationDuration,
      exitAnimationDuration,
      data: { client },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.deleteClient(client._id!);
      }
    });
  }
}

@Component({
  selector: 'delete-maci-client-dialog',
  templateUrl: './delete-maci-client-dialog.html',
  standalone: true,
  imports: [
    MatButtonModule,
    MatDialogActions,
    MatDialogClose,
    MatDialogTitle,
    MatDialogContent,
  ],
})
export class DeleteMaciClientDialog {
  constructor(
    readonly dialogRef: MatDialogRef<DeleteMaciClientDialog>,
    @Inject(MAT_DIALOG_DATA) public data: { client: ClientMaci }
  ) {}

  public confirmDelete(): void {
    this.dialogRef.close(true);
  }
}
