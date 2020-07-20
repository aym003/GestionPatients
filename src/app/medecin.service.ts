import { Injectable } from '@angular/core';


import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MedecinService {

  
  private baseUrl = 'http://localhost:8082/clinique/api/v1/medecins';

constructor(private http: HttpClient) { }

getMedecin(id: number): Observable<any> {
return this.http.get(`${this.baseUrl}/${id}`);
}
createMedecin(medecin: Object): Observable<Object> {
return this.http.post(`${this.baseUrl}`, medecin);
}
updateMedecin(id: number, value: any): Observable<Object> {
return this.http.put(`${this.baseUrl}/${id}`, value);
}
deleteMedecin(id: number): Observable<any> {
return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
}
getMedecinList(): Observable<any> {
return this.http.get(`${this.baseUrl}`);
}

getMedecinsBySpec(spec: string): Observable<any> {
  return this.http.get(`${this.baseUrl}/recherche/${spec}`);
  }

  getMedecinsByadvancedsearch(spec: string, nom: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/advanced/${spec}&${nom}`);
    }

    
}
