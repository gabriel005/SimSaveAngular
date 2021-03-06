import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Curso } from './content/curso';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  private readonly API = 'http://localhost:3000/cursos'

  constructor(private http: HttpClient) { }


  list() {
    return this.http.get<Curso[]>(this.API);
  }

}

