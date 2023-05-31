import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:8054/todo/'

  constructor(private http: HttpClient) { }

  login(credentials: any) {
    return this.http.post('http://localhost:8054/v1/login', credentials);
  }

  getTodos() {
    return this.http.get(this.apiUrl);
  }

  addTodo(todo: any): Observable<any> {
    return this.http.post<any>('http://localhost:8054/todo/', todo);
  }
}
