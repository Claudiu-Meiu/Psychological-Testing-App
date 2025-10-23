import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BackupService {
  private _http = inject(HttpClient);

  private _apiUrl = 'http://localhost:5000/api/backup';

  public downloadBackup(): Observable<Blob> {
    return this._http.get(`${this._apiUrl}/export`, { responseType: 'blob' });
  }
}
