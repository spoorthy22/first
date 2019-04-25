import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Groups } from './groups';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class GroupsService {
private groupsUrl = 'http://localhost:8080';

constructor(
  private http: HttpClient) {}

getGroups(): Observable<Groups[]> {
    return this.http.get<Groups[]>(this.groupsUrl + '/allgroups');
  }


addGroups(group: Groups): Observable<Groups> {
  return this.http.post<Groups>(this.groupsUrl + '/addgroup', group , httpOptions);
}


deleteGroups(group: Groups | number): Observable<Groups> {
    const groupid = typeof group === 'number' ? group : group.groupid;
    const url = `${this.groupsUrl + '/deletegroup'}/${groupid}`;
    return this.http.delete<Groups>(url, httpOptions);
}
}
