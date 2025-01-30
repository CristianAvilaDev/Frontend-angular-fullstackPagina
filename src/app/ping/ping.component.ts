import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ping',
  standalone: false,

  templateUrl: './ping.component.html',
  styleUrl: './ping.component.css'
})
export class PingComponent implements OnInit, OnDestroy {
  private interval: any;
  private pingUrl = 'https://crudrapido-app-latest.onrender.com'; // La URL a la que harás el ping

  constructor(private http: HttpClient) {}

  ngOnInit() {
    console.log('hola');
    this.startPing();
  }

  ngOnDestroy() {
    if (this.interval) {
      clearInterval(this.interval); // Detener el intervalo cuando el componente se destruya
    }
  }

startPing() {
  // Establecer la solicitud de ping cada 5 minutos (300,000 ms)
  this.interval = setInterval(() => {
    this.http.get(this.pingUrl, { responseType: 'text' }).subscribe({
      next: (response) => {
        console.log('Ping exitoso', response);
      },
      error: (error) => {
        console.error('Error al hacer ping', error);
      }
    });
  }, 300000); // 5 minutos
}





}
