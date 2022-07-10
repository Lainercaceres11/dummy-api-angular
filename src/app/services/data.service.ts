import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  getData(): Observable<any>{
    const URL = 'https://dummy.restapiexample.com/api/v1/employees';
    return this.http.get(URL);
  }

 getDataId(id: number): Observable<any>{
  const URL = 'https://dummy.restapiexample.com/api/v1/employee/' + id;
  return this.http.get(URL)   
} 
}
