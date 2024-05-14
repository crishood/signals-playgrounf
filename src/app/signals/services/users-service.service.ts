import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { SingleUserResponse, User } from '../interfaces/signals.interface';

@Injectable({
  providedIn: 'root',
})
export class UsersServiceService {
  private _http = inject(HttpClient);
  private _baseUrl = 'https://reqres.in/api/';

  getUserById(id: number): Observable<User> {
    return this._http
      .get<SingleUserResponse>(`${this._baseUrl}users/${id}`)
      .pipe(map((response) => response.data));
  }
}
