import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseLoginUrl: string = 'http://localhost:3000/auth/login';
  private baseRegisterUrl: string = 'http://localhost:3000/auth/register';
  private basePostWallUrl: string = 'http://localhost:3000/post/wall';
  private baseFriendsUrl: string = 'http://localhost:3000/friends';
  constructor(private httpClient: HttpClient) {}

  fetchPostWall() {
    let bearerToken = localStorage.getItem('sessionToken');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${bearerToken}`,
    });
    const requestOptions = { headers: headers };
    return this.httpClient.get(this.basePostWallUrl, requestOptions).pipe(
      tap((data: Object) => {
        localStorage.setItem('wall', JSON.stringify(data));
      })
    );
  }

  fetchFriends() {
    let bearerToken = localStorage.getItem('sessionToken');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${bearerToken}`,
    });
    const requestOptions = { headers: headers };
    return this.httpClient.get(this.baseFriendsUrl, requestOptions).pipe(
      tap((data: Object) => {
        localStorage.setItem('friends', JSON.stringify(data));
      })
    );
  }

  fetchLogin(email: string, password: string) {
    const params = new HttpParams()
      .set('email', email)
      .set('password', password);
    return this.httpClient
      .get(this.baseLoginUrl, { params, responseType: 'text' })
      .pipe(
        tap((data) => {
          localStorage.setItem('sessionToken', data);
        }),
        take(1)
      );
    //return this.httpClient.get(this.baseLoginUrl, {params, responseType: 'text'}).subscribe(data => localStorage.setItem('sessionToken', data));
  }
  fetchRegister(email: string, password: string) {
    const params = new HttpParams()
      .set('email', email)
      .set('password', password);
    return this.httpClient
      .post(this.baseRegisterUrl, { email, password }, { responseType: 'text' })
      .pipe(
        tap((data) => {
          localStorage.setItem('currentUser', data);
        }),
        take(1)
      );
    // return this.httpClient.post(this.baseRegisterUrl, {email,password}, {responseType: 'text'}).subscribe(data => localStorage.setItem('currentUser', data));
  }
}
