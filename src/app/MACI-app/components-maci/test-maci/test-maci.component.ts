import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestMaciService } from '../../services-maci/test-maci.service';
import { AnswersMaciService } from '../../services-maci/answers-maci.service';
import { PdfDownloadMaciService } from '../../services-maci/pdf-download-maci.service';

import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatStepperModule } from '@angular/material/stepper';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-test-maci',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatStepperModule,
    MatIconModule,
  ],
  templateUrl: './test-maci.component.html',
  styleUrl: './test-maci.component.scss',
})
export class TestMaciComponent {
  @Input() maciBtn!: () => void;

  testMaciService = inject(TestMaciService);
  answersMaci = inject(AnswersMaciService);
  pdfDownloadMaciService = inject(PdfDownloadMaciService);

  callMaciBtn = () => {
    if (this.maciBtn) {
      this.maciBtn();
    }
  };
}
