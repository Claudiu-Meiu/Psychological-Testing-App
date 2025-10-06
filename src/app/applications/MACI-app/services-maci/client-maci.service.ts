import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { type ClientMaci } from '../models-maci/client-maci.model';

@Injectable({
  providedIn: 'root',
})
export class ClientMaciService {
  public nameValue: string = '';
  public genderValue: string = '';
  public ageValue: number = 0;

  public selectedClientSubject: BehaviorSubject<ClientMaci | null> =
    new BehaviorSubject<ClientMaci | null>(null);

  public setGender(value: string): void {
    this.genderValue = value;
  }

  public setAge(value: number): void {
    this.ageValue = value;
  }

  public setSelectedClient(client: ClientMaci | null): void {
    this.selectedClientSubject.next(client);
  }

  public resetClient(): void {
    this.nameValue = '';
    this.genderValue = '';
    this.ageValue = 0;
    this.setSelectedClient(null);
  }
}
