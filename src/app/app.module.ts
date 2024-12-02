import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NombreDelComponenteComponent } from './nombre-del-componente/nombre-del-componente.component';
import { HttpClientModule } from '@angular/common/http'; // <-- Asegúrate de importar esto
import { FormsModule } from '@angular/forms';  // Importa FormsModule

@NgModule({
  declarations: [
    AppComponent,
    NombreDelComponenteComponent
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
