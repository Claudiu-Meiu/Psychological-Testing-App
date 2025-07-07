import { Injectable, inject } from '@angular/core';

import { AnswersMcmi3 } from '../shared-mcmi-3/answers-mcmi-3';

import { TestMcmi3Service } from './test-mcmi-3.service';

import jsPDF from 'jspdf';
import JSZip from 'jszip';

@Injectable({
  providedIn: 'root',
})
export class PdfDownloadMcmi3Service {
  testMcmi3Service = inject(TestMcmi3Service);

  answersMcmi3 = AnswersMcmi3;

  async downloadPDFs() {
    const zip = new JSZip();
    //------------------------------------------------------------------------------------------------------------
    const doc1 = new jsPDF();
    let startY = 10;
    const lineHeight = 10;
    const pageHeight = doc1.internal.pageSize.height;

    doc1.text(
      `MCMI-III / RASPUNSURI / ${this.testMcmi3Service.name} - ${this.testMcmi3Service.gender}`,
      10,
      startY
    );

    startY += lineHeight * 4;

    for (let i = 1; i <= 175; i++) {
      const answerKey = `answer${i}`;
      if (this.answersMcmi3[answerKey]) {
        if (startY + lineHeight > pageHeight) {
          doc1.addPage();
          startY = 10;
        }
        doc1.text(`${i}: ${this.answersMcmi3[answerKey]}`, 10, startY);
        startY += lineHeight;
      }
    }

    const pdfBlob1 = doc1.output('blob');
    zip.file(`${this.testMcmi3Service.name} Raspunsuri.pdf`, pdfBlob1);
    //------------------------------------------------------------------------------------------------------------
    const doc2 = new jsPDF();
    startY = 10;

    doc2.text(
      `MCMI-III / SCORURI / ${this.testMcmi3Service.name} - ${this.testMcmi3Service.gender}`,
      10,
      startY
    );

    startY += lineHeight * 4;

    const scales = [
      {
        title: 'Scala X Dezvaluire',
        gross: this.testMcmi3Service.resultScaleXGrossRounded,
        br: this.testMcmi3Service.resultScaleXBR,
      },
      {
        title: 'Scala Y Dezirabilitate',
        gross: this.testMcmi3Service.resultScaleYGross,
        br: this.testMcmi3Service.resultScaleYBR,
      },
      {
        title: 'Scala Z Devalorizare',
        gross: this.testMcmi3Service.resultScaleZGross,
        br: this.testMcmi3Service.resultScaleZBR,
      },
      {
        title: 'Scala 1 Schizoid',
        gross: this.testMcmi3Service.resultScale1Gross,
        br: this.testMcmi3Service.resultScale1BR,
      },
      {
        title: 'Scala 2A Evitant',
        gross: this.testMcmi3Service.resultScale2AGross,
        br: this.testMcmi3Service.resultScale2ABR,
      },
      {
        title: 'Scala 2B Depresiv',
        gross: this.testMcmi3Service.resultScale2BGross,
        br: this.testMcmi3Service.resultScale2BBR,
      },
      {
        title: 'Scala 3 Dependent',
        gross: this.testMcmi3Service.resultScale3Gross,
        br: this.testMcmi3Service.resultScale3BR,
      },
      {
        title: 'Scala 4 Histrionic',
        gross: this.testMcmi3Service.resultScale4Gross,
        br: this.testMcmi3Service.resultScale4BR,
      },
      {
        title: 'Scala 5 Narcisist',
        gross: this.testMcmi3Service.resultScale5Gross,
        br: this.testMcmi3Service.resultScale5BR,
      },
      {
        title: 'Scala 6A Antisocial',
        gross: this.testMcmi3Service.resultScale6AGross,
        br: this.testMcmi3Service.resultScale6ABR,
      },
      {
        title: 'Scala 6B Sadic (agresiv)',
        gross: this.testMcmi3Service.resultScale6BGross,
        br: this.testMcmi3Service.resultScale6BBR,
      },
      {
        title: 'Scala 7 Compulsiv',
        gross: this.testMcmi3Service.resultScale7Gross,
        br: this.testMcmi3Service.resultScale7BR,
      },
      {
        title: 'Scala 8A Negativist (pasiv-agresiv)',
        gross: this.testMcmi3Service.resultScale8AGross,
        br: this.testMcmi3Service.resultScale8ABR,
      },
      {
        title: 'Scala 8B Masochist (ego-distonic)',
        gross: this.testMcmi3Service.resultScale8BGross,
        br: this.testMcmi3Service.resultScale8BBR,
      },
      {
        title: 'Scala S Schizotipal',
        gross: this.testMcmi3Service.resultScaleSGross,
        br: this.testMcmi3Service.resultScaleSBR,
      },
      {
        title: 'Scala C Borderline',
        gross: this.testMcmi3Service.resultScaleCGross,
        br: this.testMcmi3Service.resultScaleCBR,
      },
      {
        title: 'Scala P Paranoid',
        gross: this.testMcmi3Service.resultScalePGross,
        br: this.testMcmi3Service.resultScalePBR,
      },
      {
        title: 'Scala A Anxietate',
        gross: this.testMcmi3Service.resultScaleAGross,
        br: this.testMcmi3Service.resultScaleABR,
      },
      {
        title: 'Scala H Somatoform',
        gross: this.testMcmi3Service.resultScaleHGross,
        br: this.testMcmi3Service.resultScaleHBR,
      },
      {
        title: 'Scala N Bipolar: maniacal',
        gross: this.testMcmi3Service.resultScaleNGross,
        br: this.testMcmi3Service.resultScaleNBR,
      },
      {
        title: 'Scala D Distime',
        gross: this.testMcmi3Service.resultScaleDGross,
        br: this.testMcmi3Service.resultScaleDBR,
      },
      {
        title: 'Scala B Dependenta de alcool',
        gross: this.testMcmi3Service.resultScaleBGross,
        br: this.testMcmi3Service.resultScaleBBR,
      },
      {
        title: 'Scala T Dependenta de droguri',
        gross: this.testMcmi3Service.resultScaleTGross,
        br: this.testMcmi3Service.resultScaleTBR,
      },
      {
        title: 'Scala R Tulburarea de stres post-traumatic',
        gross: this.testMcmi3Service.resultScaleRGross,
        br: this.testMcmi3Service.resultScaleRBR,
      },
      {
        title: 'Scala SS Tulburarea de gandire',
        gross: this.testMcmi3Service.resultScaleSSGross,
        br: this.testMcmi3Service.resultScaleSSBR,
      },
      {
        title: 'Scala CC Depresie majora',
        gross: this.testMcmi3Service.resultScaleCCGross,
        br: this.testMcmi3Service.resultScaleCCBR,
      },
      {
        title: 'Scala PP Tulburarea deliranta',
        gross: this.testMcmi3Service.resultScalePPGross,
        br: this.testMcmi3Service.resultScalePPBR,
      },
    ];

    for (const scale of scales) {
      if (startY + lineHeight > pageHeight) {
        doc2.addPage();
        startY = 10;
      }
      doc2.text(scale.title, 10, startY);
      startY += lineHeight;

      if (startY + lineHeight > pageHeight) {
        doc2.addPage();
        startY = 10;
      }
      doc2.text(`Scor brut: ${scale.gross}`, 10, startY);
      startY += lineHeight;

      if (startY + lineHeight > pageHeight) {
        doc2.addPage();
        startY = 10;
      }
      doc2.text(`Scor BR: ${scale.br}`, 10, startY);
      startY += lineHeight;

      startY += lineHeight;
    }

    const pdfBlob2 = doc2.output('blob');
    zip.file(`${this.testMcmi3Service.name} Scoruri.pdf`, pdfBlob2);
    //------------------------------------------------------------------------------------------------------------
    const zipBlob = await zip.generateAsync({ type: 'blob' });

    const link = document.createElement('a');
    link.href = URL.createObjectURL(zipBlob);
    link.download = `${this.testMcmi3Service.name} MCMI-III.zip`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
