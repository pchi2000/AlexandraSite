import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GoogleBooksService {
  private apiUrl = 'https://www.googleapis.com/books/v1/volumes';
  private apiKey = 'AIzaSyAtBxRqSj3gb1ulCrzBL2vnxV3wR0lsjcU';

  constructor(private http: HttpClient) { }

  searchBooks(query: string): Observable<any> {
    const params = { q: query, key: this.apiKey };
    return this.http.get(`${this.apiUrl}`, { params });
  }
}
