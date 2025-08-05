import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { AppRoutes } from '../models/app-routes.enum';

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

  public maciBtn(): Promise<boolean> {
    return this._router.navigate([AppRoutes.Maci]);
  }

  public mcmi3Btn(): Promise<boolean> {
    return this._router.navigate([AppRoutes.Mcmi3]);
  }
}
