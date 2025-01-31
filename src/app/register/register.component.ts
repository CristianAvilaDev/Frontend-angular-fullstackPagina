import { Component, OnInit } from '@angular/core';
import { BackendService } from '../services/backend.service';  // Asegúrate de que la ruta sea correcta

@Component({
  standalone: false,
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // Variables para el formulario
  formFirstName: string = '';
  formLastName: string = '';
  formEmail: string = '';
  password: string = '';

  constructor(private backendService: BackendService) {}

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

  // Método para manejar el envío del formulario y enviar los datos al backend
  onSubmit(): void {
    const datos = {
      firstName: this.formFirstName,
      lastName: this.formLastName,
      email: this.formEmail,
      password: this.password
    };

    console.log('Datos a enviar:', datos);

    this.backendService.enviarEstudianteAlBackend(datos).subscribe(response => {
      console.log('Respuesta del backend:', response);
      this.openModal();  // ✅ Abre el modal cuando el registro es exitoso
    }, error => {
      console.error('Error al enviar los datos:', error);
    });
  }

  ngOnInit(): void {}
}
