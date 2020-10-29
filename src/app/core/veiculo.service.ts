import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Veiculo } from '../models/veiculo';

const url = 'http://localhost:4200';
@Injectable({
  providedIn: 'root'
})

export class VeiculoService {

  constructor(private http: HttpClient) { }

  salvar(veiculo: Veiculo): Observable<Veiculo> {
    return this.http.post<Veiculo>(url, veiculo);
  }
}
