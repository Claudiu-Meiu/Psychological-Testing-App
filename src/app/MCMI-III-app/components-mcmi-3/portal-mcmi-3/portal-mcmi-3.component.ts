import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TestMcmi3Service } from '../../services-mcmi-3/test-mcmi-3.service';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';

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
  ],
  templateUrl: './portal-mcmi-3.component.html',
  styleUrl: './portal-mcmi-3.component.scss',
})
export class PortalMcmi3Component {
  @Input() mcmi3Btn!: () => void;

  testMcmi3Service = inject(TestMcmi3Service);

  onSubmit() {
    this.testMcmi3Service.startTestBtn();
  }

  callMcmi3Btn = () => {
    if (this.mcmi3Btn) {
      this.mcmi3Btn();
    }
  };
}
