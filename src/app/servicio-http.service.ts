import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServicioHttpService {
  private apiUrl="http://localhost:8080/api/vehiculo"
  constructor(private http: HttpClient) { }

  puedeCircular(matricula: string, fechaActual:string):Observable<any>{
    let params = new HttpParams()
    .set('matricula', matricula)
    .set('fechaActual', fechaActual);
  return this.http.get<string>(this.apiUrl, { params, responseType: 'text' as 'json' });
  }

}
