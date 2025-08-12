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

import { MongoDbMcmi3Service } from '../../services-mcmi-3/mongodb-mcmi-3.service';
import { TestMcmi3Service } from '../../services-mcmi-3/test-mcmi-3.service';
import { AnswersMcmi3Service } from '../../services-mcmi-3/answers-mcmi-3.service';
import { CalculateMcmi3Service } from '../../services-mcmi-3/calculate-mcmi-3.service';
import { ClientMcmi3Service } from '../../services-mcmi-3/client-mcmi-3.service';

import { type ClientMcmi3 } from '../../models-mcmi-3/client-mcmi-3.model';

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
  selector: 'app-portal-mcmi-3',
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
  templateUrl: './portal-mcmi-3.component.html',
})
export class PortalMcmi3Component implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  private _router = inject(Router);

  readonly dialog = inject(MatDialog);

  private _mongoDbMcmi3Service = inject(MongoDbMcmi3Service);
  private _answersMcmi3Service = inject(AnswersMcmi3Service);
  private _testMcmi3Service = inject(TestMcmi3Service);
  private _calculateMcmi3Service = inject(CalculateMcmi3Service);
  public clientMcmi3Service = inject(ClientMcmi3Service);

  public allMcmi3Clients: MatTableDataSource<ClientMcmi3> =
    new MatTableDataSource<ClientMcmi3>();

  public displayedMcmi3TableColumns: string[] = [
    'delete',
    'name',
    'gender',
    'date',
    'answers-scores',
  ];

  ngOnInit(): void {
    this._loadMcmi3ClientsFromDb();
    this.allMcmi3Clients.paginator = this.paginator;
  }

  ngAfterViewInit(): void {
    this.allMcmi3Clients.paginator = this.paginator;
    this.allMcmi3Clients.sort = this.sort;
  }

  public applyMcmi3TableFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.allMcmi3Clients.filter = filterValue.trim().toLowerCase();

    if (this.allMcmi3Clients.paginator) {
      this.allMcmi3Clients.paginator.firstPage();
    }
  }

  private _loadMcmi3ClientsFromDb(): void {
    this._mongoDbMcmi3Service
      .getClients()
      .subscribe((clients: ClientMcmi3[]) => {
        this.allMcmi3Clients.data = clients;
      });
  }

  private _addMcmi3Client(): void {
    const newClient: ClientMcmi3 = {
      date: new Date(),
      gender: this.clientMcmi3Service.genderValue,
      name: this.clientMcmi3Service.nameValue,
      answers: this._answersMcmi3Service.generateEmptyAnswersObjectMcmi3(),
    };

    this._mongoDbMcmi3Service.addClient(newClient).subscribe({
      next: (client: ClientMcmi3) => {
        this.allMcmi3Clients.data = [...this.allMcmi3Clients.data, client];

        this.clientMcmi3Service.setSelectedClient(client);

        this._answersMcmi3Service.savedAnswers =
          this._answersMcmi3Service.getAnswers();
      },
      error: (err) => {
        console.error('Error adding client:', err);
      },
    });
  }

  public selectClient(client: ClientMcmi3): void {
    this.clientMcmi3Service.setSelectedClient(client);
    this._testMcmi3Service.startTestBtn();

    this._answersMcmi3Service.savedAnswers =
      this._answersMcmi3Service.getAnswers();
  }

  public deleteClient(clientId: string): void {
    this._mongoDbMcmi3Service.deleteClient(clientId).subscribe({
      next: () => {
        this.allMcmi3Clients.data = this.allMcmi3Clients.data.filter(
          (selectedClient: ClientMcmi3) => selectedClient._id !== clientId
        );
      },
      error: (error) => {
        console.error('Error deleting client:', error);
      },
    });
  }

  public onSubmit(): void {
    this._addMcmi3Client();
    this._testMcmi3Service.startTestBtn();
  }

  public async viewAnswers(): Promise<boolean> {
    await this._calculateMcmi3Service.calculateScores();
    this._testMcmi3Service.resetTest();
    return this._router.navigate([AppRoutes.Mcmi3Test]);
  }

  public async viewResults(): Promise<boolean> {
    await this._calculateMcmi3Service.calculateScores();
    return this._router.navigate([AppRoutes.Mcmi3Results]);
  }

  public exitPortal(): Promise<boolean> {
    this._testMcmi3Service.resetTest();
    return this._router.navigate([AppRoutes.Home]);
  }

  public openDeleteMcmi3ClientDialog(
    client: ClientMcmi3,
    enterAnimationDuration: string,
    exitAnimationDuration: string
  ): void {
    const dialogRef = this.dialog.open(DeleteMcmi3ClientDialog, {
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
  selector: 'delete-mcmi-3-client-dialog',
  templateUrl: './delete-mcmi-3-client-dialog.html',
  standalone: true,
  imports: [
    MatButtonModule,
    MatDialogActions,
    MatDialogClose,
    MatDialogTitle,
    MatDialogContent,
  ],
})
export class DeleteMcmi3ClientDialog {
  constructor(
    readonly dialogRef: MatDialogRef<DeleteMcmi3ClientDialog>,
    @Inject(MAT_DIALOG_DATA) public data: { client: ClientMcmi3 }
  ) {}

  public confirmDelete(): void {
    this.dialogRef.close(true);
  }
}
