import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TableReferenceMcmi3Service {
  Titles: Record<string, string> = {
    scaleX: 'Scala X Dezvăluire',
    scaleY: 'Scala Y Dezirabilitate',
    scaleZ: 'Scala Z Devalorizare',
    scale1: 'Scala 1 Schizoid',
    scale2A: 'Scala 2A Evitant',
    scale2B: 'Scala 2B Depresiv',
    scale3: 'Scala 3 Dependent',
    scale4: 'Scala 4 Histrionic',
    scale5: 'Scala 5 Narcisist',
    scale6A: 'Scala 6A Antisocial',
    scale6B: 'Scala 6B Sadic (agresiv)',
    scale7: 'Scala 7 Compulsiv',
    scale8A: 'Scala 8A Negativist (pasiv-agresiv)',
    scale8B: 'Scala 8B Masochist (ego-distonic)',
    scaleS: 'Scala S Schizotipal',
    scaleC: 'Scala C Borderline',
    scaleP: 'Scala P Paranoid',
    scaleA: 'Scala A Anxietate',
    scaleH: 'Scala H Somatoform',
    scaleN: 'Scala N Bipolar: maniacal',
    scaleD: 'Scala D Distimie',
    scaleB: 'Scala B Dependența de alcool',
    scaleT: 'Scala T Dependența de droguri',
    scaleR: 'Scala R Tulburarea de stres post-traumatic',
    scaleSS: 'Scala SS Tulburarea de gândire',
    scaleCC: 'Scala CC Depresia majoră',
    scalePP: 'Scala PP Tulburarea delirantă',
  };

  createTableReference = (values: number[]): Record<string, number> => {
    return values.reduce((acc, value, index) => {
      acc[`gross${index}`] = value;
      return acc;
    }, {} as Record<string, number>);
  };

  X: Record<string, Record<string, number>> = {
    scaleX: this.createTableReference([
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 4, 6, 8, 10, 11, 12,
      14, 16, 18, 20, 22, 24, 26, 28, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
      40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 50, 51, 51, 52, 52, 53, 53,
      54, 54, 55, 55, 56, 57, 58, 58, 59, 59, 60, 60, 61, 61, 62, 62, 63, 63,
      64, 64, 65, 65, 66, 66, 67, 67, 68, 68, 69, 69, 70, 70, 71, 71, 72, 73,
      73, 74, 74, 75, 75, 75, 76, 76, 77, 77, 77, 78, 78, 78, 79, 79, 79, 80,
      80, 81, 81, 82, 82, 83, 83, 84, 84, 85, 85, 86, 86, 87, 87, 88, 88, 88,
      89, 89, 90, 90, 91, 92, 92, 93, 94, 95, 96, 97, 98, 99,
    ]),
  };

  Male: Record<string, Record<string, number>> = {
    scale1: this.createTableReference([
      0, 12, 24, 36, 48, 60, 64, 68, 72, 74, 75, 77, 79, 81, 83, 85, 89, 96,
      103, 106, 108, 110, 112, 115,
    ]),
    scale2A: this.createTableReference([
      0, 12, 24, 36, 48, 60, 74, 75, 78, 79, 80, 81, 82, 83, 84, 85, 87, 90, 92,
      95, 100, 110, 115, 115, 115,
    ]),
    scale2B: this.createTableReference([
      0, 20, 40, 60, 64, 68, 73, 75, 78, 80, 81, 82, 84, 85, 88, 95, 102, 107,
      115, 115, 115, 115, 115, 115,
    ]),
    scale3: this.createTableReference([
      0, 10, 20, 30, 40, 50, 60, 65, 70, 75, 78, 80, 82, 83, 84, 84, 87, 92, 98,
      105, 110, 115, 115, 115, 115,
    ]),
    scale4: this.createTableReference([
      0, 4, 9, 13, 17, 21, 26, 30, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54,
      56, 60, 66, 73, 79, 84,
    ]),
    scale5: this.createTableReference([
      0, 5, 9, 14, 18, 23, 28, 32, 37, 42, 46, 49, 51, 53, 57, 59, 61, 71, 73,
      75, 81, 85, 88, 92, 96, 100, 104, 108, 110, 112, 114, 115, 115,
    ]),
    scale6A: this.createTableReference([
      0, 8, 15, 22, 30, 38, 45, 52, 60, 67, 72, 73, 75, 76, 80, 82, 85, 87, 89,
      91, 93, 95, 100, 102, 105,
    ]),
    scale6B: this.createTableReference([
      0, 9, 17, 26, 34, 43, 51, 60, 61, 62, 63, 64, 65, 68, 72, 75, 76, 78, 80,
      82, 86, 90, 95, 100, 108, 112, 115, 115,
    ]),
    scale7: this.createTableReference([
      0, 4, 9, 10, 21, 24, 26, 31, 34, 36, 39, 41, 44, 46, 47, 49, 51, 53, 55,
      56, 58, 60, 63, 67, 75, 83,
    ]),
    scale8A: this.createTableReference([
      0, 8, 15, 22, 30, 38, 45, 52, 60, 66, 72, 77, 80, 81, 82, 83, 84, 85, 90,
      95, 100, 105, 107, 109, 111, 113,
    ]),
    scale8B: this.createTableReference([
      0, 20, 40, 60, 68, 75, 76, 77, 78, 79, 80, 81, 82, 83, 86, 89, 95, 104,
      110, 115, 115, 115, 115,
    ]),
    scaleS: this.createTableReference([
      0, 20, 40, 60, 62, 63, 65, 67, 68, 70, 72, 73, 75, 77, 78, 80, 82, 83, 85,
      89, 94, 98, 102, 106, 111, 115,
    ]),
    scaleC: this.createTableReference([
      0, 10, 20, 30, 40, 50, 60, 62, 65, 68, 70, 72, 75, 78, 80, 82, 85, 88, 92,
      95, 98, 102, 105, 108, 112, 115,
    ]),
    scaleP: this.createTableReference([
      0, 12, 24, 36, 48, 60, 62, 63, 64, 66, 68, 69, 70, 72, 74, 75, 78, 80, 82,
      85, 91, 97, 103, 109, 115, 115, 115, 115,
    ]),
    scaleA: this.createTableReference([
      0, 20, 40, 60, 75, 78, 80, 82, 85, 88, 90, 92, 95, 98, 100, 192, 105, 108,
      110, 112, 115,
    ]),
    scaleH: this.createTableReference([
      0, 30, 60, 62, 63, 64, 66, 68, 69, 70, 72, 74, 75, 80, 85, 95, 105, 115,
    ]),
    scaleN: this.createTableReference([
      0, 12, 24, 36, 48, 60, 62, 64, 66, 68, 69, 71, 73, 77, 81, 85, 92, 98,
      105,
    ]),
    scaleD: this.createTableReference([
      0, 20, 40, 60, 64, 68, 71, 75, 76, 78, 79, 80, 81, 82, 84, 85, 91, 97,
      103, 109, 115,
    ]),
    scaleB: this.createTableReference([
      0, 15, 30, 45, 60, 65, 70, 75, 77, 79, 81, 83, 85, 88, 92, 95, 98, 102,
      105, 108, 112, 115,
    ]),
    scaleT: this.createTableReference([
      0, 15, 30, 45, 60, 62, 63, 65, 67, 68, 70, 72, 73, 75, 78, 82, 85, 92, 98,
      104, 110,
    ]),
    scaleR: this.createTableReference([
      0, 15, 30, 45, 60, 62, 63, 65, 67, 68, 70, 72, 73, 75, 77, 79, 81, 83, 85,
      92, 98, 104, 110,
    ]),
    scaleSS: this.createTableReference([
      0, 15, 30, 45, 60, 61, 63, 64, 65, 67, 68, 70, 71, 72, 74, 75, 78, 80, 82,
      85, 92, 100, 108, 115,
    ]),
    scaleCC: this.createTableReference([
      0, 20, 40, 60, 61, 63, 64, 65, 67, 68, 70, 71, 72, 74, 75, 78, 82, 85, 90,
      95, 100, 105, 110, 115,
    ]),
    scalePP: this.createTableReference([
      0, 25, 60, 63, 65, 67, 68, 70, 71, 74, 77, 83, 89, 94, 100, 115, 115,
    ]),
    scaleY: this.createTableReference([
      0, 5, 10, 15, 20, 25, 30, 35, 39, 43, 47, 51, 55, 59, 65, 70, 74, 80, 84,
      89, 94, 100,
    ]),
    scaleZ: this.createTableReference([
      0, 34, 38, 42, 45, 49, 52, 56, 59, 61, 63, 64, 65, 67, 69, 70, 71, 72, 74,
      76, 77, 78, 80, 81, 83, 85, 87, 89, 91, 93, 95, 98, 100, 100,
    ]),
  };

  Female: Record<string, Record<string, number>> = {
    scale1: this.createTableReference([
      0, 10, 20, 30, 40, 50, 60, 62, 67, 69, 71, 73, 78, 80, 83, 85, 89, 93, 97,
      99, 101, 103, 105, 111,
    ]),
    scale2A: this.createTableReference([
      0, 9, 17, 26, 34, 43, 51, 60, 63, 66, 70, 73, 76, 80, 83, 85, 87, 89, 93,
      99, 104, 109, 113, 115, 115,
    ]),
    scale2B: this.createTableReference([
      0, 7, 13, 20, 27, 33, 40, 47, 53, 60, 69, 71, 77, 80, 82, 84, 87, 92, 98,
      102, 107, 113, 115, 115,
    ]),
    scale3: this.createTableReference([
      0, 7, 13, 20, 27, 33, 40, 47, 53, 60, 68, 77, 79, 82, 84, 86, 88, 93, 95,
      97, 99, 102, 104, 106, 108,
    ]),
    scale4: this.createTableReference([
      0, 5, 9, 14, 18, 23, 28, 32, 37, 42, 46, 51, 55, 60, 62, 68, 70, 72, 74,
      76, 81, 83, 88, 90, 92,
    ]),
    scale5: this.createTableReference([
      0, 5, 11, 16, 22, 27, 33, 38, 44, 49, 55, 60, 62, 64, 66, 68, 71, 77, 82,
      88, 90, 92, 98, 104, 109, 115, 115, 115, 115, 115, 115, 115, 115,
    ]),
    scale6A: this.createTableReference([
      0, 12, 24, 36, 48, 60, 62, 64, 66, 68, 70, 71, 77, 79, 82, 84, 89, 92, 97,
      99, 102, 106, 111, 115, 115,
    ]),
    scale6B: this.createTableReference([
      0, 12, 24, 36, 48, 60, 61, 63, 64, 65, 67, 68, 70, 71, 72, 74, 76, 78, 84,
      89, 96, 107, 115, 115, 115, 115, 115, 115,
    ]),
    scale7: this.createTableReference([
      0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 63, 67, 69,
      72, 74, 76, 78, 80, 86, 91,
    ]),
    scale8A: this.createTableReference([
      0, 7, 13, 20, 27, 33, 40, 47, 53, 60, 63, 69, 72, 74, 76, 79, 81, 83, 85,
      91, 94, 96, 102, 108, 114, 115,
    ]),
    scale8B: this.createTableReference([
      0, 12, 24, 36, 48, 60, 74, 78, 81, 83, 85, 87, 89, 91, 93, 95, 99, 102,
      104, 107, 113, 115, 115,
    ]),
    scaleS: this.createTableReference([
      0, 15, 30, 45, 60, 61, 62, 64, 65, 66, 68, 69, 70, 71, 72, 74, 75, 85, 89,
      92, 96, 100, 104, 108, 111, 115,
    ]),
    scaleC: this.createTableReference([
      0, 8, 15, 22, 30, 38, 45, 52, 60, 65, 70, 75, 77, 79, 81, 83, 85, 88, 92,
      95, 98, 102, 105, 108, 112, 115,
    ]),
    scaleP: this.createTableReference([
      0, 15, 30, 45, 60, 62, 63, 65, 67, 68, 70, 72, 73, 75, 77, 79, 81, 83, 85,
      92, 100, 108, 115, 115, 115, 115, 115,
    ]),
    scaleA: this.createTableReference([
      0, 12, 24, 36, 48, 60, 75, 77, 78, 80, 82, 83, 85, 89, 92, 96, 100, 104,
      108, 111, 115,
    ]),
    scaleH: this.createTableReference([
      0, 9, 17, 26, 34, 43, 51, 60, 63, 66, 69, 72, 75, 85, 92, 100, 108, 115,
    ]),
    scaleN: this.createTableReference([
      0, 12, 24, 36, 48, 60, 62, 64, 66, 68, 69, 72, 75, 80, 85, 95, 105, 115,
      115,
    ]),
    scaleD: this.createTableReference([
      0, 7, 13, 20, 27, 33, 40, 47, 53, 60, 65, 70, 75, 77, 79, 81, 83, 85, 95,
      105, 115,
    ]),
    scaleB: this.createTableReference([
      0, 25, 60, 61, 62, 63, 64, 68, 70, 71, 75, 78, 80, 82, 85, 90, 95, 100,
      105, 110, 115, 115,
    ]),
    scaleT: this.createTableReference([
      0, 25, 60, 62, 63, 64, 65, 66, 67, 68, 70, 75, 80, 85, 91, 97, 103, 109,
      115, 115, 115,
    ]),
    scaleR: this.createTableReference([
      0, 10, 20, 30, 40, 50, 60, 63, 64, 65, 66, 68, 70, 71, 72, 74, 75, 80, 85,
      95, 105, 115,
    ]),
    scaleSS: this.createTableReference([
      0, 9, 17, 26, 34, 43, 51, 60, 62, 63, 64, 66, 68, 69, 70, 72, 74, 75, 80,
      85, 92, 100, 108, 115,
    ]),
    scaleCC: this.createTableReference([
      0, 8, 15, 22, 30, 38, 45, 52, 60, 63, 66, 71, 75, 80, 85, 88, 92, 95, 98,
      102, 105, 108, 112, 115,
    ]),
    scalePP: this.createTableReference([
      0, 25, 60, 65, 68, 70, 72, 75, 78, 85, 95, 105, 115, 115, 115, 115, 115,
      115,
    ]),
    scaleY: this.createTableReference([
      0, 5, 10, 15, 20, 25, 30, 35, 39, 43, 47, 51, 55, 59, 65, 70, 74, 80, 84,
      89, 94, 100,
    ]),
    scaleZ: this.createTableReference([
      0, 34, 38, 42, 45, 49, 52, 56, 59, 61, 63, 64, 65, 67, 69, 70, 71, 72, 74,
      76, 77, 78, 80, 81, 83, 85, 87, 89, 91, 93, 95, 98, 100, 100,
    ]),
  };
}
