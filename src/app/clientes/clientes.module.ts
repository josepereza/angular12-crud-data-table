import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from './angular-material.module';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { MenuComponent } from './components/menu/menu.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { ListadoComponent } from '../clientes/pages/listado/listado.component'


@NgModule({
  declarations: [
    FormularioComponent,
    MenuComponent,
    ListadoComponent

  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  exports:[
    AngularMaterialModule,
    FormularioComponent,
    MenuComponent
    
  ]
})
export class ClientesModule { }
