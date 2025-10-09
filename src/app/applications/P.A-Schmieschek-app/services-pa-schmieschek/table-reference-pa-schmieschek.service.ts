import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TableReferencePaSchmieschekService {
  public Titles: Record<string, string> = {
    group1: 'Grupa I Demonstrativ',
    group2: 'Grupa II Hiperexact',
    group3: 'Grupa III Hiperperseverent',
    group4: 'Grupa IV Nestăpânit',
    group5: 'Grupa V Hipertim',
    group6: 'Grupa VI Distimic',
    group7: 'Grupa VII Ciclotim',
    group8: 'Grupa VIII Exaltat',
    group9: 'Grupa IX Anxios',
    group10: 'Grupa X Emotiv',
  };

  public Group_1_2_3: Record<string, number> = {
    total0: 0,
    total1: 8.3,
    total2: 16.6,
    total3: 24.9,
    total4: 33.2,
    total5: 41.5,
    total6: 49.8,
    total7: 58.1,
    total8: 66.4,
    total9: 74.7,
    total10: 83,
    total11: 91.3,
    total12: 99.6,
  };

  public Group_4_5_6_7_9_10: Record<string, number> = {
    total0: 0,
    total1: 12.5,
    total2: 25,
    total3: 37.5,
    total4: 50,
    total5: 62.5,
    total6: 75,
    total7: 87.5,
    total8: 100,
  };

  public Group_8: Record<string, number> = {
    total0: 0,
    total1: 25,
    total2: 50,
    total3: 75,
    total4: 100,
  };
}
