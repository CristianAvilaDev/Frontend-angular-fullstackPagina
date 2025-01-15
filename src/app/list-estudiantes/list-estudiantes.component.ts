import { Component, OnInit } from '@angular/core';
import { BackendService } from '../services/backend.service'; // Asegúrate de importar el servicio correctamente.

@Component({
  selector: 'app-list-estudiantes',
  standalone: false,
  templateUrl: './list-estudiantes.component.html',
  styleUrls: ['./list-estudiantes.component.css']
})
export class ListEstudiantesComponent implements OnInit {

  datosTodosEstudiantes: any[] = [];  // Lista completa de estudiantes
  currentPage: number = 1;
  itemsPerPage: number = 10;
  paginatedEstudiantes: any[] = [];

  constructor(private backendService: BackendService) {}

  ngOnInit(): void {
    this.obtenerDatosTOdosLosUsuarios();  // Cargar los datos al iniciar el componente
  }

  // Obtiene todos los estudiantes desde el backend
  private obtenerDatosTOdosLosUsuarios(): void {
    this.backendService.getDatosTOdosUsuarios().subscribe(response => {
      this.datosTodosEstudiantes = response;
      console.log('Datos recibidos de todos los estudiantes:', this.datosTodosEstudiantes);
      this.paginarEstudiantes();
    });
  }

  // Función para paginar los estudiantes
  private paginarEstudiantes(): void {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = this.currentPage * this.itemsPerPage;
    this.paginatedEstudiantes = this.datosTodosEstudiantes.slice(startIndex, endIndex);
  }

  // Cambio de página hacia adelante
  siguientePagina(): void {
    if (this.currentPage * this.itemsPerPage < this.datosTodosEstudiantes.length) {
      this.currentPage++;
      this.paginarEstudiantes();
    }
  }

  // Cambio de página hacia atrás
  anteriorPagina(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.paginarEstudiantes();
    }
  }
}
