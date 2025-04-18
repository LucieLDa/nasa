import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NasaService {
  private apiKey : string = "wTeurrEwuyQmdIxbLpY9in7jOXh9csTs80gRHCgO";
  private apiUrl : string = `https://api.nasa.gov/planetary/apod?api_key=${this.apiKey}`;

  private http = inject(HttpClient);

  constructor() { }

  getImageOfTheDay() : Observable<any>{
    return this.http.get(this.apiUrl);
  }
}
