import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usersUrl = 'http://localhost:8080/springboot-crud-rest/api/v1/users';
  constructor(private http: HttpClient) {  }

  public findAll(): Observable<User[]> {
    return this.http.get<User[]>(`${this.usersUrl}`);
  }

  public save(user: User) {
    return this.http.post<User>(`${this.usersUrl}`, user);
  }
}
