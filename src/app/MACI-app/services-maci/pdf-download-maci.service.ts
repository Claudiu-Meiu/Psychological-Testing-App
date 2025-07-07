import { Injectable, inject } from '@angular/core';

import { AnswersMaci } from '../shared-maci/answers-maci';

import { TestMaciService } from './test-maci.service';

import jsPDF from 'jspdf';
import JSZip from 'jszip';

@Injectable({
  providedIn: 'root',
})
export class PdfDownloadMaciService {
  testMaciService = inject(TestMaciService);

  answersMaci = AnswersMaci;

  async downloadPDFs() {
    const zip = new JSZip();
    //------------------------------------------------------------------------------------------------------------
    const doc1 = new jsPDF();
    let startY = 10;
    const lineHeight = 10;
    const pageHeight = doc1.internal.pageSize.height;

    doc1.text(
      `MACI / RASPUNSURI / ${this.testMaciService.name} - ${this.testMaciService.age} ani - ${this.testMaciService.gender}`,
      10,
      startY
    );

    startY += lineHeight * 4;

    for (let i = 1; i <= 160; i++) {
      const answerKey = `answer${i}`;
      if (this.answersMaci[answerKey]) {
        if (startY + lineHeight > pageHeight) {
          doc1.addPage();
          startY = 10;
        }
        doc1.text(`${i}: ${this.answersMaci[answerKey]}`, 10, startY);
        startY += lineHeight;
      }
    }

    const pdfBlob1 = doc1.output('blob');
    zip.file(`${this.testMaciService.name} Raspunsuri.pdf`, pdfBlob1);
    //------------------------------------------------------------------------------------------------------------
    const doc2 = new jsPDF();
    startY = 10;

    doc2.text(
      `MACI / SCORURI / ${this.testMaciService.name} - ${this.testMaciService.age} ani - ${this.testMaciService.gender}`,
      10,
      startY
    );

    startY += lineHeight * 8;

    const scales = [
      {
        title: 'Scala X Dezvaluire',
        gross: this.testMaciService.resultScaleXGrossRounded,
        br: this.testMaciService.resultScaleXBR,
      },
      {
        title: 'Scala Y Dezirabilitate',
        gross: this.testMaciService.resultScaleYGross,
        br: this.testMaciService.resultScaleYBR,
      },
      {
        title: 'Scala Z Devalorizare',
        gross: this.testMaciService.resultScaleZGross,
        br: this.testMaciService.resultScaleZBR,
      },
      {
        title: 'Scala 1 Introvertit',
        gross: this.testMaciService.resultScale1Gross,
        br: this.testMaciService.resultScale1BR,
      },
      {
        title: 'Scala 2A Inhibat',
        gross: this.testMaciService.resultScale2AGross,
        br: this.testMaciService.resultScale2ABR,
      },
      {
        title: 'Scala 2B Trist',
        gross: this.testMaciService.resultScale2BGross,
        br: this.testMaciService.resultScale2BBR,
      },
      {
        title: 'Scala 3 Supus',
        gross: this.testMaciService.resultScale3Gross,
        br: this.testMaciService.resultScale3BR,
      },
      {
        title: 'Scala 4 Dramatic',
        gross: this.testMaciService.resultScale4Gross,
        br: this.testMaciService.resultScale4BR,
      },
      {
        title: 'Scala 5 Egoist',
        gross: this.testMaciService.resultScale5Gross,
        br: this.testMaciService.resultScale5BR,
      },
      {
        title: 'Scala 6A Insubordonat',
        gross: this.testMaciService.resultScale6AGross,
        br: this.testMaciService.resultScale6ABR,
      },
      {
        title: 'Scala 6B Puternic',
        gross: this.testMaciService.resultScale6BGross,
        br: this.testMaciService.resultScale6BBR,
      },
      {
        title: 'Scala 7 Conformist',
        gross: this.testMaciService.resultScale7Gross,
        br: this.testMaciService.resultScale7BR,
      },
      {
        title: 'Scala 8A Opozitionist',
        gross: this.testMaciService.resultScale8AGross,
        br: this.testMaciService.resultScale8ABR,
      },
      {
        title: 'Scala 8B Auto-devalorizare',
        gross: this.testMaciService.resultScale8BGross,
        br: this.testMaciService.resultScale8BBR,
      },
      {
        title: 'Scala 9 Tendinte borderline',
        gross: this.testMaciService.resultScale9Gross,
        br: this.testMaciService.resultScale9BR,
      },
      {
        title: 'Scala A Identitate difuza',
        gross: this.testMaciService.resultScaleAGross,
        br: this.testMaciService.resultScaleABR,
      },
      {
        title: 'Scala B Auto-depreciere',
        gross: this.testMaciService.resultScaleBGross,
        br: this.testMaciService.resultScaleBBR,
      },
      {
        title: 'Scala C Dezaprobare corporala',
        gross: this.testMaciService.resultScaleCGross,
        br: this.testMaciService.resultScaleCBR,
      },
      {
        title: 'Scala D Disconfort sexual',
        gross: this.testMaciService.resultScaleDGross,
        br: this.testMaciService.resultScaleDBR,
      },
      {
        title: 'Scala E Insecuritate in raport cu covarstnicii',
        gross: this.testMaciService.resultScaleEGross,
        br: this.testMaciService.resultScaleEBR,
      },
      {
        title: 'Scala F Lipsa interesului social',
        gross: this.testMaciService.resultScaleFGross,
        br: this.testMaciService.resultScaleFBR,
      },
      {
        title: 'Scala G Neintelegeri în familie',
        gross: this.testMaciService.resultScaleGGross,
        br: this.testMaciService.resultScaleGBR,
      },
      {
        title: 'Scala H Abuz in copilarie',
        gross: this.testMaciService.resultScaleHGross,
        br: this.testMaciService.resultScaleHBR,
      },
      {
        title: 'Scala AA Disfunctii alimentare',
        gross: this.testMaciService.resultScaleAAGross,
        br: this.testMaciService.resultScaleAABR,
      },
      {
        title: 'Scala BB Predilectie spre abuz de substante',
        gross: this.testMaciService.resultScaleBBGross,
        br: this.testMaciService.resultScaleBBBR,
      },
      {
        title: 'Scala CC Predispozitie spre delicventa',
        gross: this.testMaciService.resultScaleCCGross,
        br: this.testMaciService.resultScaleCCBR,
      },
      {
        title: 'Scala DD Tendinte impulsive',
        gross: this.testMaciService.resultScaleDDGross,
        br: this.testMaciService.resultScaleDDBR,
      },
      {
        title: 'Scala EE Trairi anxioase',
        gross: this.testMaciService.resultScaleEEGross,
        br: this.testMaciService.resultScaleEEBR,
      },
      {
        title: 'Scala FF Trairi depresive',
        gross: this.testMaciService.resultScaleFFGross,
        br: this.testMaciService.resultScaleFFBR,
      },
      {
        title: 'Scala GG Tendinte suicidare',
        gross: this.testMaciService.resultScaleGGGross,
        br: this.testMaciService.resultScaleGGBR,
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
    zip.file(`${this.testMaciService.name} Scoruri.pdf`, pdfBlob2);
    //------------------------------------------------------------------------------------------------------------
    const zipBlob = await zip.generateAsync({ type: 'blob' });

    const link = document.createElement('a');
    link.href = URL.createObjectURL(zipBlob);
    link.download = `${this.testMaciService.name} MACI.zip`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
