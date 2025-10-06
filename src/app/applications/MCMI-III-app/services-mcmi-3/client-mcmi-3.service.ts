import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { type ClientMcmi3 } from '../models-mcmi-3/client-mcmi-3.model';

@Injectable({
  providedIn: 'root',
})
export class ClientMcmi3Service {
  public nameValue: string = '';
  public genderValue: string = '';

  public selectedClientSubject: BehaviorSubject<ClientMcmi3 | null> =
    new BehaviorSubject<ClientMcmi3 | null>(null);

  public setGender(value: string): void {
    this.genderValue = value;
  }

  public setSelectedClient(client: ClientMcmi3 | null): void {
    this.selectedClientSubject.next(client);
  }

  public resetClient(): void {
    this.nameValue = '';
    this.genderValue = '';
    this.setSelectedClient(null);
  }
}
