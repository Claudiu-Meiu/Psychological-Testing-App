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

import { MongoDbMaciService } from '../../services-maci/mongodb-maci.service';
import { AnswersMaciService } from '../../services-maci/answers-maci.service';
import { TestMaciService } from '../../services-maci/test-maci.service';
import { CalculateMaciService } from '../../services-maci/calculate-maci.service';
import { ClientMaciService } from '../../services-maci/client-maci.service';

import { type ClientMaci } from '../../models-maci/client-maci.model';

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
    MatDatepickerModule,
  ],
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
    'name',
    'age',
    'gender',
    'date',
    'answers-scores',
    'edit-delete',
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
      this.allMaciClients.data = clients.sort((a, b) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      });
    });
  }

  private _addMaciClient(): void {
    const newClient: ClientMaci = {
      date: new Date(),
      name: this.clientMaciService.name,
      dateOfBirth: this.clientMaciService.dateOfBirth,
      age: this.clientMaciService.age,
      gender: this.clientMaciService.gender,
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

  public openEditMaciClientDialog(
    client: ClientMaci,
    enterAnimationDuration: string,
    exitAnimationDuration: string
  ): void {
    const dialogRef = this.dialog.open(EditMaciClientDialog, {
      width: '400px',
      enterAnimationDuration,
      exitAnimationDuration,
      data: { client: { ...client } },
    });

    dialogRef.afterClosed().subscribe((updatedClient) => {
      if (updatedClient) {
        this._mongoDbMaciService
          .editClient(updatedClient._id!, updatedClient)
          .subscribe({
            next: (res) => {
              const index = this.allMaciClients.data.findIndex(
                (c) => c._id === res._id
              );
              if (index !== -1) {
                this.allMaciClients.data[index] = res;
                this.allMaciClients._updateChangeSubscription();
              }
            },
            error: (error) => console.error('Error updating client:', error),
          });
      }
    });
  }

  public openDeleteMaciClientDialog(
    client: ClientMaci,
    enterAnimationDuration: string,
    exitAnimationDuration: string
  ): void {
    const dialogRef = this.dialog.open(DeleteMaciClientDialog, {
      width: '400px',
      enterAnimationDuration,
      exitAnimationDuration,
      data: { client },
    });

    dialogRef.afterClosed().subscribe((deletedClient) => {
      if (deletedClient) {
        this._mongoDbMaciService.deleteClient(client._id).subscribe({
          next: () => {
            this.allMaciClients.data = this.allMaciClients.data.filter(
              (selectedClient: ClientMaci) => selectedClient._id !== client._id
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
  selector: 'edit-maci-client-dialog',
  templateUrl: './edit-maci-client-dialog.html',
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
export class EditMaciClientDialog {
  constructor(
    readonly dialogRef: MatDialogRef<EditMaciClientDialog>,
    @Inject(MAT_DIALOG_DATA) public data: { client: ClientMaci }
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
  selector: 'delete-maci-client-dialog',
  templateUrl: './delete-maci-client-dialog.html',
  standalone: true,
  imports: [
    MatButtonModule,
    MatDialogActions,
    MatDialogClose,
    MatIconModule,
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
