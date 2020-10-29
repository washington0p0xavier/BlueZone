import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario';

const url = 'http://localhost:4200';
@Injectable({
  providedIn: 'root'
})

export class UsuarioService {

  constructor(private http: HttpClient) { }

  salvar(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(url, usuario);
  }
}
