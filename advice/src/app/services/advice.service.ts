import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdviceService {

  constructor(private http: HttpClient) { }

  linkApi = 'https://api.adviceslip.com/advice'


  getAdvice():Observable<any>{
    return this.http.get(`${this.linkApi}`)
  }
}
