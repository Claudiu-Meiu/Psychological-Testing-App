import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { type ClientMaci } from '../models-maci/client-maci.model';

@Injectable({
  providedIn: 'root',
})
export class MongoDbMaciService {
  private _http = inject(HttpClient);

  private _apiUrl = 'http://localhost:5000/api/maci/clients';

  public getClients(): Observable<ClientMaci[]> {
    return this._http.get<ClientMaci[]>(this._apiUrl);
  }

  public addClient(client: ClientMaci): Observable<ClientMaci> {
    return this._http.post<ClientMaci>(this._apiUrl, client);
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
  ): Observable<ClientMaci> {
    return this._http.put<ClientMaci>(
      `${this._apiUrl}/${clientId}/scores`,
      scoresValue
    );
  }

  public editClient(
    clientId: string | undefined,
    updatedData: Partial<ClientMaci>
  ): Observable<ClientMaci> {
    return this._http.put<ClientMaci>(
      `${this._apiUrl}/${clientId}`,
      updatedData
    );
  }

  public deleteClient(clientId: string | undefined): Observable<string> {
    return this._http.delete<string>(`${this._apiUrl}/${clientId}`);
  }
}
