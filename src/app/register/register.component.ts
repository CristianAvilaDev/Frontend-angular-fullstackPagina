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
  formFirstName: string = '';  // Nombre del usuario
  formLastName: string = '';   // Apellido del usuario
  formEmail: string = '';      // Correo electrónico del usuario
  password: string = '';       // Contraseña


  constructor(private backendService: BackendService) {}

  // Método para manejar el envío del formulario y enviar los datos al backend
  onSubmit(): void {
    const datos = {
      firstName: this.formFirstName,
      lastName: this.formLastName,
      email: this.formEmail,
      password: this.password  // Si deseas enviar la contraseña también
    };

    console.log('Datos a enviar:', datos);

    this.backendService.enviarDatoJson(datos).subscribe(response => {
      console.log('Respuesta del backend:', response);
    }, error => {
      console.error('Error al enviar los datos:', error);
    });
  }

  ngOnInit(): void {
    // Si necesitas realizar alguna configuración inicial, puedes colocarla aquí
  }
}

