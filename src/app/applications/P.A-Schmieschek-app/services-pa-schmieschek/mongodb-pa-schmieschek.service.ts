import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { type ClientPaSchmieschek } from '../models-pa-schmieschek/client-pa-schmieschek.model';

@Injectable({
  providedIn: 'root',
})
export class MongoDbPaSchmieschekService {
  private _http = inject(HttpClient);

  private _apiUrl = 'http://localhost:5000/api/paschmieschek/clients';

  public getClients(): Observable<ClientPaSchmieschek[]> {
    return this._http.get<ClientPaSchmieschek[]>(this._apiUrl);
  }

  public addClient(
    client: ClientPaSchmieschek
  ): Observable<ClientPaSchmieschek> {
    return this._http.post<ClientPaSchmieschek>(this._apiUrl, client);
  }

  public saveAnswersForClient(
    clientId: string | undefined,
    answers: Record<string, string>
  ): Observable<Object> {
    return this._http.put(`${this._apiUrl}/${clientId}/answers`, {
      answers: answers,
    });
  }

  public saveScoresForClient(
    clientId: string | undefined,
    scoresValue: any
  ): Observable<ClientPaSchmieschek> {
    return this._http.put<ClientPaSchmieschek>(
      `${this._apiUrl}/${clientId}/scores`,
      scoresValue
    );
  }

  public editClient(
    clientId: string | undefined,
    updatedData: Partial<ClientPaSchmieschek>
  ): Observable<ClientPaSchmieschek> {
    return this._http.put<ClientPaSchmieschek>(
      `${this._apiUrl}/${clientId}`,
      updatedData
    );
  }

  public deleteClient(clientId: string | undefined): Observable<string> {
    return this._http.delete<string>(`${this._apiUrl}/${clientId}`);
  }
}
