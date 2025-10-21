import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { AppRoutes } from '../models/app-routes.enum';

import { BackupService } from '../services/backup.service';

import { MatRippleModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    MatRippleModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
  ],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  private _router = inject(Router);

  private _backupService = inject(BackupService);

  public maciBtn(): Promise<boolean> {
    return this._router.navigate([AppRoutes.Maci]);
  }

  public mcmi3Btn(): Promise<boolean> {
    return this._router.navigate([AppRoutes.Mcmi3]);
  }

  public paSchmieschekBtn(): Promise<boolean> {
    return this._router.navigate([AppRoutes.PaSchmieschek]);
  }

  public exportBackup() {
    this._backupService.downloadBackup().subscribe({
      next: (blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `mongodb-backup-${new Date()
          .toISOString()
          .slice(0, 10)}.zip`;
        a.click();
        window.URL.revokeObjectURL(url);
      },
      error: (err) => {
        console.error('Backup export failed', err);
      },
    });
  }
}
