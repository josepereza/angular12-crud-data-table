import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';

import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule
  ],
  exports:[
    MatToolbarModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule
  ]
 
})
export class AngularMaterialModule { }
