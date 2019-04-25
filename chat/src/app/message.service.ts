import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Message } from './message';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class MessageService {
private messagesUrl = 'http://localhost:8080';

constructor(
  private http: HttpClient) {}

getMessages(): Observable<Message[]> {
    return this.http.get<Message[]>(this.messagesUrl + '/allmessages');
  }


addMessage(message: Message): Observable<Message> {
  return this.http.post<Message>(this.messagesUrl + '/addmessage', message , httpOptions);
}


deleteMessage(message: Message | number): Observable<Message> {
    const messageid = typeof message === 'number' ? message : message.messageid;
    const url = `${this.messagesUrl + '/deletemessage'}/${messageid}`;
    return this.http.delete<Message>(url, httpOptions);
}
}
