import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { type ClientPaSchmieschek } from '../models-pa-schmieschek/client-pa-schmieschek.model';

@Injectable({
  providedIn: 'root',
})
export class ClientPaSchmieschekService {
  public nameValue: string = '';

  public selectedClientSubject: BehaviorSubject<ClientPaSchmieschek | null> =
    new BehaviorSubject<ClientPaSchmieschek | null>(null);

  public setSelectedClient(client: ClientPaSchmieschek | null): void {
    this.selectedClientSubject.next(client);
  }

  public resetClient(): void {
    this.nameValue = '';
    this.setSelectedClient(null);
  }
}
