import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainMaciComponent } from '../MACI-app/components-maci/main-maci/main-maci.component';
import { MainMcmi3Component } from '../MCMI-III-app/components-mcmi-3/main-mcmi-3/main-mcmi-3.component';

import { MatRippleModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    MainMaciComponent,
    MainMcmi3Component,
    MatRippleModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  isMaciBtnClicked: boolean = false;
  isMcmi3BtnClicked: boolean = false;

  maciBtn = () => {
    this.isMaciBtnClicked = !this.isMaciBtnClicked;
  };

  mcmi3Btn = () => {
    this.isMcmi3BtnClicked = !this.isMcmi3BtnClicked;
  };
}
