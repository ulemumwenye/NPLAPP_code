import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WordpressService {
  private apiUrl = 'https://mwnation.com/wp-json/wp/v2/posts';

  constructor(private http: HttpClient) {}

  getRecentPosts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
