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

import { AppRoutes } from '../../../../models/app-routes.enum';

import { MongoDbPaSchmieschekService } from '../../services-pa-schmieschek/mongodb-pa-schmieschek.service';
import { TestPaSchmieschekService } from '../../services-pa-schmieschek/test-pa-schmieschek.service';
import { AnswersPaSchmieschekService } from '../../services-pa-schmieschek/answers-pa-schmieschek.service';
import { CalculatePaSchmieschekService } from '../../services-pa-schmieschek/calculate-pa-schmieschek.service';
import { ClientPaSchmieschekService } from '../../services-pa-schmieschek/client-pa-schmieschek.service';

import { type ClientPaSchmieschek } from '../../models-pa-schmieschek/client-pa-schmieschek.model';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
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
import { MatDatepickerModule } from '@angular/material/datepicker';

@Component({
  selector: 'app-portal-pa-schmieschek',
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
    MatDatepickerModule,
  ],
  templateUrl: './portal-pa-schmieschek.component.html',
})
export class PortalPaSchmieschekComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  private _router = inject(Router);

  readonly dialog = inject(MatDialog);

  private _mongoDbPaSchmieschekService = inject(MongoDbPaSchmieschekService);
  private _answersPaSchmieschekService = inject(AnswersPaSchmieschekService);
  private _testPaSchmieschekService = inject(TestPaSchmieschekService);
  private _calculatePaSchmieschekService = inject(
    CalculatePaSchmieschekService
  );
  public clientPaSchmieschekService = inject(ClientPaSchmieschekService);

  public allPaSchmieschekClients: MatTableDataSource<ClientPaSchmieschek> =
    new MatTableDataSource<ClientPaSchmieschek>();

  public displayedPaSchmieschekTableColumns: string[] = [
    'name',
    'age',
    'gender',
    'date',
    'answers-scores',
    'edit-delete',
  ];

  ngOnInit(): void {
    this._loadPaSchmieschekClientsFromDb();
    this.allPaSchmieschekClients.paginator = this.paginator;
  }

  ngAfterViewInit(): void {
    this.allPaSchmieschekClients.paginator = this.paginator;
    this.allPaSchmieschekClients.sort = this.sort;
  }

  public applyPaSchmieschekFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.allPaSchmieschekClients.filter = filterValue.trim().toLowerCase();

    if (this.allPaSchmieschekClients.paginator) {
      this.allPaSchmieschekClients.paginator.firstPage();
    }
  }

  private _loadPaSchmieschekClientsFromDb(): void {
    this._mongoDbPaSchmieschekService
      .getClients()
      .subscribe((clients: ClientPaSchmieschek[]) => {
        this.allPaSchmieschekClients.data = clients.sort((a, b) => {
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        });
      });
  }

  private _addPaSchmieschekClient(): void {
    const newClient: ClientPaSchmieschek = {
      date: new Date(),
      name: this.clientPaSchmieschekService.name,
      dateOfBirth: this.clientPaSchmieschekService.dateOfBirth,
      age: this.clientPaSchmieschekService.age,
      gender: this.clientPaSchmieschekService.gender,
      answers:
        this._answersPaSchmieschekService.generateEmptyAnswersObjectPaSchmieschek(),
    };

    this._mongoDbPaSchmieschekService.addClient(newClient).subscribe({
      next: (client: ClientPaSchmieschek) => {
        this.allPaSchmieschekClients.data = [
          ...this.allPaSchmieschekClients.data,
          client,
        ];

        this.clientPaSchmieschekService.setSelectedClient(client);

        this._answersPaSchmieschekService.savedAnswers =
          this._answersPaSchmieschekService.getAnswers();
      },
      error: (err) => {
        console.error('Error adding client:', err);
      },
    });
  }

  public selectClient(client: ClientPaSchmieschek): void {
    this.clientPaSchmieschekService.setSelectedClient(client);
    this._testPaSchmieschekService.startTestBtn();

    this._answersPaSchmieschekService.savedAnswers =
      this._answersPaSchmieschekService.getAnswers();
  }

  public onSubmit(): void {
    this._addPaSchmieschekClient();
    this._testPaSchmieschekService.startTestBtn();
  }

  public async viewAnswers(): Promise<boolean> {
    await this._calculatePaSchmieschekService.calculateScores();
    this._testPaSchmieschekService.resetTest();
    return this._router.navigate([AppRoutes.PaSchmieschekTest]);
  }

  public async viewResults(): Promise<boolean> {
    await this._calculatePaSchmieschekService.calculateScores();
    return this._router.navigate([AppRoutes.PaSchmieschekResults]);
  }

  public exitPortal(): Promise<boolean> {
    this._testPaSchmieschekService.resetTest();
    return this._router.navigate([AppRoutes.Home]);
  }

  public openEditPaSchmieschekClientDialog(
    client: ClientPaSchmieschek,
    enterAnimationDuration: string,
    exitAnimationDuration: string
  ): void {
    const dialogRef = this.dialog.open(EditPaSchmieschekClientDialog, {
      width: '400px',
      enterAnimationDuration,
      exitAnimationDuration,
      data: { client: { ...client } },
    });

    dialogRef.afterClosed().subscribe((updatedClient) => {
      if (updatedClient) {
        this._mongoDbPaSchmieschekService
          .editClient(updatedClient._id!, updatedClient)
          .subscribe({
            next: (res) => {
              const index = this.allPaSchmieschekClients.data.findIndex(
                (c) => c._id === res._id
              );
              if (index !== -1) {
                this.allPaSchmieschekClients.data[index] = res;
                this.allPaSchmieschekClients._updateChangeSubscription();
              }
            },
            error: (error) => console.error('Error updating client:', error),
          });
      }
    });
  }

  public openDeletePaSchmieschekClientDialog(
    client: ClientPaSchmieschek,
    enterAnimationDuration: string,
    exitAnimationDuration: string
  ): void {
    const dialogRef = this.dialog.open(DeletePaSchmieschekClientDialog, {
      width: '400px',
      enterAnimationDuration,
      exitAnimationDuration,
      data: { client },
    });

    dialogRef.afterClosed().subscribe((deletedClient) => {
      if (deletedClient) {
        this._mongoDbPaSchmieschekService.deleteClient(client._id).subscribe({
          next: () => {
            this.allPaSchmieschekClients.data =
              this.allPaSchmieschekClients.data.filter(
                (selectedClient: ClientPaSchmieschek) =>
                  selectedClient._id !== client._id
              );
          },
          error: (error) => {
            console.error('Error deleting client:', error);
          },
        });
      }
    });
  }
}

@Component({
  selector: 'edit-pa-schmieschek-client-dialog',
  templateUrl: './edit-pa-schmieschek-client-dialog.html',
  standalone: true,
  imports: [
    FormsModule,
    MatDialogActions,
    MatDialogClose,
    MatIconModule,
    MatDialogContent,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatDatepickerModule,
  ],
})
export class EditPaSchmieschekClientDialog {
  constructor(
    readonly dialogRef: MatDialogRef<EditPaSchmieschekClientDialog>,
    @Inject(MAT_DIALOG_DATA) public data: { client: ClientPaSchmieschek }
  ) {}

  public saveChanges(): void {
    this.dialogRef.close(this.data.client);
  }

  public updateAge(): void {
    const dob = this.data.client.dateOfBirth;
    const td = this.data.client.date;

    if (!dob || !td) {
      this.data.client.age = undefined as any;
      return;
    }

    const birthDate = dob instanceof Date ? dob : new Date(dob);
    const testDate = td instanceof Date ? td : new Date(td);

    let age = testDate.getFullYear() - birthDate.getFullYear();
    const monthDiff = testDate.getMonth() - birthDate.getMonth();

    if (
      monthDiff < 0 ||
      (monthDiff === 0 && testDate.getDate() < birthDate.getDate())
    ) {
      age--;
    }

    this.data.client.age = age;
  }
}

@Component({
  selector: 'delete-pa-schmieschek-client-dialog',
  templateUrl: './delete-pa-schmieschek-client-dialog.html',
  standalone: true,
  imports: [
    MatButtonModule,
    MatDialogActions,
    MatDialogClose,
    MatIconModule,
    MatDialogContent,
  ],
})
export class DeletePaSchmieschekClientDialog {
  constructor(
    readonly dialogRef: MatDialogRef<DeletePaSchmieschekClientDialog>,
    @Inject(MAT_DIALOG_DATA) public data: { client: ClientPaSchmieschek }
  ) {}

  public confirmDelete(): void {
    this.dialogRef.close(true);
  }
}
