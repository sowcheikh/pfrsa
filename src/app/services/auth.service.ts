import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {User} from '../models/user';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {
  }

  // tslint:disable-next-line:typedef
  login(user) {
    return this.http.post<User>(`${environment.url}/api/login`, user)
      .pipe(map(currentUser => {
        if (currentUser) {
          localStorage.setItem('currentUser', JSON.stringify(currentUser));

          return this.getRole();
        }
      }));
  }

  getUser(): Observable<any> {
    return this.http.get<User>(`${environment.url}/api/admin/users`);
  }

  // tslint:disable-next-line:typedef
  isLogin() {
    if (localStorage.getItem('currentUser')) {
      return true;
    }
    return false;
  }

  // tslint:disable-next-line:typedef
  getAuthorizationToken() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    return currentUser.token;
  }
  // tslint:disable-next-line:typedef
  getRole()
  {
    const decoded = jwt_decode(this.getAuthorizationToken());
    console.log(decoded);
    const role = decoded['roles'][0];
    // console.log(role);
    return role;
  }
}
