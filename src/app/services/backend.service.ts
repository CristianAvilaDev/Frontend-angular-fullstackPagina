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


getEstudiante(idEstudiante: string): Observable<any> {
  return this.http.get(`${this.baseUrl}/api/estudiantes/obtenerEstudiante/${idEstudiante}`);
}

deleteEstudiante(idEstudiante: string): Observable<any> {
  return this.http.delete(`${this.baseUrl}/api/estudiantes/${idEstudiante}`);
}
actualizarEstudiante(idEstudiante: string, estudiante: any): Observable<any> {
  // Enviamos el id y el cuerpo con los datos del estudiante
  return this.http.put(`${this.baseUrl}/api/estudiantes/actualizarEstudiante/${idEstudiante}`, estudiante);
}



  eliminarEstudiante(id: string ): string {
    return "hola";

  }


  editarEstudiante (id: string ):  string  {
    return "hola";

  }


  //-------------------------------------------------------------------------------------------









}
