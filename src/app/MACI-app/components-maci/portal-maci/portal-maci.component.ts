import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TestMaciService } from '../../services-maci/test-maci.service';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';

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
  ],
  templateUrl: './portal-maci.component.html',
  styleUrl: './portal-maci.component.scss',
})
export class PortalMaciComponent {
  @Input() maciBtn!: () => void;

  testMaciService = inject(TestMaciService);

  onSubmit() {
    this.testMaciService.startTestBtn();
    console.log(this.testMaciService.age);
  }

  callMaciBtn = () => {
    if (this.maciBtn) {
      this.maciBtn();
    }
  };
}
