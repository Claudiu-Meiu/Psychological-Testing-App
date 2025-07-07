import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestMcmi3Service } from '../../services-mcmi-3/test-mcmi-3.service';
import { AnswersMcmi3Service } from '../../services-mcmi-3/answers-mcmi-3.service';
import { PdfDownloadMcmi3Service } from '../../services-mcmi-3/pdf-download-mcmi-3.service';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-results-mcmi-3',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './results-mcmi-3.component.html',
  styleUrl: './results-mcmi-3.component.scss',
})
export class ResultsMcmi3Component {
  @Input() mcmi3Btn!: () => void;

  testMcmi3Service = inject(TestMcmi3Service);
  answersMcmi3Service = inject(AnswersMcmi3Service);
  pdfDownloadMcmi3Service = inject(PdfDownloadMcmi3Service);

  callMcmi3Btn = () => {
    if (this.mcmi3Btn) {
      this.mcmi3Btn();
    }
  }
}
