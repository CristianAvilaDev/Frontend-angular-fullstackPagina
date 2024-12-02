import { Component, OnInit } from '@angular/core';
import { BackendService } from './services/backend.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'prjAngular';
  datos2: string = '';
  datos: string[] = [];

  // Variables para el formulario
  primerNombre: string = '';  // Definir primerNombre
  segundoNombre: string = ''; // Definir segundoNombre
  correo: string = '';        // Definir correo
  nombre: string = '';
  password: string = '';

  // Agregamos la variable mostrarFormularioFlag para controlar la visibilidad del formulario
  mostrarFormularioFlag: boolean = false;

  constructor(private backendService: BackendService) {}

  // Método para asignar el valor "hola" a datos2
  setDatos2(): void {
    this.datos2 = "hola";
    console.log(this.datos2); // Esto imprimirá "hola" en la consola
  }

  // Método para obtener datos del backend
  private obtenerDatosDelBackend(): void {
    this.backendService.getDatos().subscribe(response => {
      this.datos = response;
      console.log('Datos recibidos:', this.datos); // Imprime los datos obtenidos
    });
  }

  // Método para enviar "dato1" al backend
  private enviarDatoAlBackend(): void {
    this.backendService.enviarDato("datosw1").subscribe(response => {
      console.log('Respuesta del backend:', response);
    });
  }

  // Método para mostrar u ocultar el formulario
  mostrarFormulario() {
    this.mostrarFormularioFlag = !this.mostrarFormularioFlag;
  }

  // Método para manejar el envío del formulario
public onSubmit(): void {
  // Crear un objeto con los datos a enviar
  const datos = {
    firstName: this.primerNombre,
    lastName: this.segundoNombre,
    email: this.correo
  };

  // Mostrar los datos en consola (opcional para depuración)
  console.log('Datos a enviar:', datos);

  // Llamar al método de servicio para enviar los datos como JSON
  this.backendService.enviarDatoJson(datos).subscribe(response => {
    console.log('Respuesta del backend:', response);
  }, error => {
    console.error('Error al enviar los datos:', error);
  });

  // Aquí puedes hacer cualquier otra acción después de enviar los datos
}


  // Organiza las llamadas en ngOnInit
  ngOnInit(): void {
    this.setDatos2();
    this.obtenerDatosDelBackend();

  }
}
