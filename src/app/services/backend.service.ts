// BackendService.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  private baseUrl = 'https://crudrapido-app-latest.onrender.com'; // URL de tu backend Spring Boot
//private baseUrl = 'http://localhost:8080'; // URL de tu backend Spring Boot

  constructor(private http: HttpClient) {}


  // Aqui usamos los endpoint de estudiante controller  -------------------------


  // enviar estudiante en forma de json al backend
 enviarEstudianteAlBackend(dato: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/api/estudiantes/guardarEstudiante`, dato, {
      headers: { 'Content-Type': 'application/json' },
      responseType: 'json'
    });
  }

  // Método para obtener todos lo usuarios
  getDatosTOdosUsuarios(): Observable<any> {
    return this.http.get(`${this.baseUrl}/api/estudiantes/obtenerEstudiantes`);
  }

  //-------------------------------------------------------------------------------------------







  // estaba haciendo prueba no mas esto no es necesario ---------------------------


  //enviar uan simple cadena de texto
   getDatos(): Observable<any> {
     return this.http.get(`${this.baseUrl}/api/datos`);
   }

 //recibe una cadena de texto ,creo, no me acuerdo
 enviarDato(dato: string): Observable<any> {
   return this.http.post(`${this.baseUrl}/api/recibirDato`, dato, { responseType: 'text' });

 }
  //--------------------------------------------------------------------------------------------






}
