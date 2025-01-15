import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NombreDelComponenteComponent } from './nombre-del-componente/nombre-del-componente.component';
import { HttpClientModule } from '@angular/common/http'; // <-- Asegúrate de importar esto
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { ComponentePruebaComponent } from './componente-prueba/componente-prueba.component';
import { ListEstudiantesComponent } from './list-estudiantes/list-estudiantes.component';
import { HomeComponent } from './home/home.component';  // Importa FormsModule

@NgModule({
  declarations: [
    AppComponent,
    NombreDelComponenteComponent,
    RegisterComponent,
    ComponentePruebaComponent,
    ListEstudiantesComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule  // <-- Añade esto a los imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
