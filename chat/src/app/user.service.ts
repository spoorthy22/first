import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { User } from './user';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class UserService {
private usersUrl =  'http://localhost:8080';

constructor(
  private http: HttpClient) {}

getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl + '/allusers');
  }


addUser(user: User): Observable<User> {
  return this.http.post<User>(this.usersUrl + '/adduser', user, httpOptions);
}


deleteUser(user: User | number): Observable<User> {
    const userid = typeof user === 'number' ? user : user.userid;
    const url = `${this.usersUrl + '/deleteuser'}/${userid}`;
    return this.http.delete<User>(url, httpOptions);
}

}
