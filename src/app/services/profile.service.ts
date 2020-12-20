import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Profile} from '../models/profile';
import {environment} from '../../environments/environment';
import {retry} from 'rxjs/operators';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }

  getAllProfile(): Observable<Profile[]> {
    return this.http.get<Profile[]>(`${environment.url}/api/admin/profils`)
      .pipe(
        retry(1),
      );
  }
  // tslint:disable-next-line:typedef
  getById(id: string) {
    return this.http.get<Profile>(`${environment.url}/${id}`);
  }

  // tslint:disable-next-line:typedef
  create(params) {
    return this.http.post(`${environment.url}/api/admin/profils`, params);
  }

  // tslint:disable-next-line:typedef
  update(id: string, params) {
    return this.http.put(`${environment.url}/${id}`, params);
  }

  // tslint:disable-next-line:typedef
  delete(id: string) {
    return this.http.delete(`${environment.url}/${id}`);
  }
}
