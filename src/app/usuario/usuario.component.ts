import { Component, Input } from '@angular/core';
import { BackendService } from '../services/backend.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario',
  standalone: false,
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent {
   isEditing = false;
  estudiante: any;  // Para almacenar los detalles del estudiante
  estudianteId: string | null = '';

  constructor(private route: ActivatedRoute, private backendService: BackendService) {}

  ngOnInit(): void {
    // Obtener el ID del estudiante desde la URL
    this.estudianteId = this.route.snapshot.paramMap.get('id');
    console.log('Estudiante ID:', this.estudianteId);

    // Llamar al servicio para obtener los detalles del estudiante
    if (this.estudianteId) {
      this.backendService.getEstudiante(this.estudianteId).subscribe(
        (response) => {
          this.estudiante = response;
          console.log('Detalles del estudiante:', this.estudiante);
        },
        (error) => {
          console.error('Error al obtener el estudiante:', error);
        }
      );
    }
  }


  // Método para abrir el modal
  openModal() {
    const modal = document.getElementById('myModal');
    if (modal) {
      modal.classList.add('show');
      modal.style.display = 'block';
    }
  }

  // Método para cerrar el modal
  closeModal() {
    const modal = document.getElementById('myModal');
    if (modal) {
      modal.classList.remove('show');
      modal.style.display = 'none';
    }
  }

  borrarEstudiante(estudiante: any) {
 this.openModal();

        if (this.estudianteId) {
          this.backendService.deleteEstudiante(this.estudianteId).subscribe(
            (response) => {

              console.log("estudiante borrado");
            },
            (error) => {
              console.error("error al borrar");
            }
          );
        }



  }

  editarEstudiante(estudiante: any) {



    this.isEditing = true;
  }
guardarCambios(estudiante: any) {
  if (this.estudianteId) {
    // Enviamos tanto el id como los datos completos del estudiante
    this.backendService.actualizarEstudiante(this.estudianteId, estudiante).subscribe(
      (response) => {
        console.log("Estudiante actualizado");
      },
      (error) => {
        console.error("Error al actualizar");
      }
    );
  }
  this.isEditing = false;
}





}
