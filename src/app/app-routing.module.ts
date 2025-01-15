import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { ListEstudiantesComponent } from './list-estudiantes/list-estudiantes.component';
import { HomeComponent } from './home/home.component';  // Importa FormsModule


const routes: Routes = [
   { path: '', component: HomeComponent},
    { path: 'registrar', component: RegisterComponent },
    { path: 'lista_estudiantes', component: ListEstudiantesComponent },
        { path: 'inicioComponente', component: HomeComponent },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
