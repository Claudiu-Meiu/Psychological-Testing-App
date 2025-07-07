import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestMaciService } from '../../services-maci/test-maci.service';
import { AnswersMaciService } from '../../services-maci/answers-maci.service';
import { PdfDownloadMaciService } from '../../services-maci/pdf-download-maci.service';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-results-maci',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './results-maci.component.html',
  styleUrl: './results-maci.component.scss',
})
export class ResultsMaciComponent {
  @Input() maciBtn!: () => void;

  testMaciService = inject(TestMaciService);
  answersMaciService = inject(AnswersMaciService);
  pdfDownloadMaciService = inject(PdfDownloadMaciService);

  callMaciBtn = () => {
    if (this.maciBtn) {
      this.maciBtn();
    }
  };
}
