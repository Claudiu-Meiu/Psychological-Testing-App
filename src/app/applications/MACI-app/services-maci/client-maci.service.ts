import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { type ClientMaci } from '../models-maci/client-maci.model';

@Injectable({
  providedIn: 'root',
})
export class ClientMaciService {
  public name: string = '';
  public dateOfBirth: Date | null = null;
  public gender: string = '';

  public selectedClientSubject: BehaviorSubject<ClientMaci | null> =
    new BehaviorSubject<ClientMaci | null>(null);

  public setGender(value: string): void {
    this.gender = value;
  }

  public setSelectedClient(client: ClientMaci | null): void {
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
}
