import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { type ClientPaSchmieschek } from '../models-pa-schmieschek/client-pa-schmieschek.model';

@Injectable({ providedIn: 'root' })
export class ClientPaSchmieschekService {
  public name: string = '';
  public dateOfBirth: Date | null = null;
  public gender: string = '';

  public selectedClientSubject: BehaviorSubject<ClientPaSchmieschek | null> =
    new BehaviorSubject<ClientPaSchmieschek | null>(null);

  public setSelectedClient(client: ClientPaSchmieschek | null): void {
    this.selectedClientSubject.next(client);
  }

  public resetClient(): void {
    this.name = '';
    this.dateOfBirth = null;
    this.gender = '';
    this.setSelectedClient(null);
  }

  public get age(): number | null {
    if (!this.dateOfBirth) return null;

    const dob = new Date(this.dateOfBirth);

    const today = new Date();
    let age = today.getFullYear() - dob.getFullYear();

    const monthDiff = today.getMonth() - dob.getMonth();
    const dayDiff = today.getDate() - dob.getDate();

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      age--;
    }

    return age;
  }

  public setGender(value: string): void {
    this.gender = value;
  }
}
