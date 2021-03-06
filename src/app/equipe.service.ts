import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Equipe } from 'src/app/equipe';
import {Equipes } from 'src/app/equipes'
  
@Injectable({
  providedIn: 'root'
})
export class EquipeService {

  private baseUrl = 'http://localhost:8080/equipes/';
  constructor( private httpClient: HttpClient) { }

getEquipes(): Observable<any> {
  return this.httpClient.get(this.baseUrl);
}
createEquipe(equipe: object): Observable<object> {
  return this.httpClient.post(this.baseUrl, equipe);
}

updateEquipe(id: number, value: any): Observable<object> {
  return this.httpClient.put(this.baseUrl + id, value);
}

deleteEquipe(id: number): Observable<any> {
  return this.httpClient.delete(this.baseUrl + id, { responseType: 'text' });
}

}