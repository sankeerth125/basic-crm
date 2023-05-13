import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  baseUrl = 'http://localhost:10101/api/';

  constructor(private http: HttpClient) {}

  saveUser(user: User) {
    return this.http.post(this.baseUrl + 'user', user);
  }

  fetchUsers() {
    return this.http.get(this.baseUrl + 'users') as Observable<User[]>;
  }

  checkIfUsernameAlreadyExist(username: string): Observable<boolean> {
    return this.http.get(this.baseUrl + 'userPresent', {
      params: {
        username: username,
      },
    }) as Observable<boolean>;
  }
}
