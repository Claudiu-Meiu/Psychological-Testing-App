import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { type ClientMcmi3 } from '../models-mcmi-3/client-mcmi-3.model';

@Injectable({
  providedIn: 'root',
})
export class ClientMcmi3Service {
  public name: string = '';
  public dateOfBirth: Date | null = null;
  public gender: string = '';

  public selectedClientSubject: BehaviorSubject<ClientMcmi3 | null> =
    new BehaviorSubject<ClientMcmi3 | null>(null);

  public setGender(value: string): void {
    this.gender = value;
  }

  public setSelectedClient(client: ClientMcmi3 | null): void {
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
