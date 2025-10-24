import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { type ClientMcmi3 } from '../models-mcmi-3/client-mcmi-3.model';

@Injectable({
  providedIn: 'root',
})
export class MongoDbMcmi3Service {
  private _http = inject(HttpClient);

  private _apiUrl = 'http://localhost:5000/api/mcmi3/clients';

  public getClients(): Observable<ClientMcmi3[]> {
    return this._http.get<ClientMcmi3[]>(this._apiUrl);
  }

  public addClient(client: ClientMcmi3): Observable<ClientMcmi3> {
    return this._http.post<ClientMcmi3>(this._apiUrl, client);
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
  ): Observable<ClientMcmi3> {
    return this._http.put<ClientMcmi3>(
      `${this._apiUrl}/${clientId}/scores`,
      scoresValue
    );
  }

  public editClient(
    clientId: string | undefined,
    updatedData: Partial<ClientMcmi3>
  ): Observable<ClientMcmi3> {
    return this._http.put<ClientMcmi3>(
      `${this._apiUrl}/${clientId}`,
      updatedData
    );
  }

  public deleteClient(clientId: string | undefined): Observable<string> {
    return this._http.delete<string>(`${this._apiUrl}/${clientId}`);
  }
}
