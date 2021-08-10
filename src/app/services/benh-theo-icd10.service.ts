import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { BenhTheoICD10 } from '../models/BenhTheoICD10.models';

@Injectable({
  providedIn: 'root',
})
export class BenhTheoICD10Service {
  public mangBenhTheoICD10$ = new BehaviorSubject<BenhTheoICD10[]>([]);

  private REST_API_SERVER =
    'https://610b9b962b6add0017cb398d.mockapi.io/BenhTheoICD10/';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'applications/json',
    }),
  };

  constructor(private httpClient: HttpClient) {}

  public layDanhSachBenh(): Observable<any> {
    const url = `${this.REST_API_SERVER}`;
    return this.httpClient.get<any>(url, this.httpOptions);
  }

  public themBenh(data: BenhTheoICD10): Observable<any> {
    const url = `${this.REST_API_SERVER}`;
    return this.httpClient.post<any>(url, data);
  }

  public xoaBenh(id: any): Observable<any> {
    const url = `${this.REST_API_SERVER}` + id;
    return this.httpClient.delete<any>(url);
  }

  public capNhatBenh(id: any, data: BenhTheoICD10): Observable<any> {
    const url = `${this.REST_API_SERVER}` + id;
    return this.httpClient.put<any>(url, data);
  }
}
