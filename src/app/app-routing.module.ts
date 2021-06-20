import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './clientes/pages/formulario/formulario.component';

const routes: Routes = [
  {path:'', redirectTo:'listado', pathMatch: 'full'},
  {path:'listado', component:FormularioComponent},
  {path:'**', component:FormularioComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
