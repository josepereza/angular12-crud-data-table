import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ClientesService } from '../../services/clientes.service';
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  profileForm = new FormGroup({
    id: new FormControl(''),
    nombre: new FormControl('',[Validators.required]),
    saldo:new FormControl('')
  });
  actualizar:boolean=false;
  constructor(private http:HttpClient,private clienteService:ClientesService) { }
cliente:any=''
  ngOnInit(): void {
    
  }
enviar(){
if (this.profileForm.valid){
  if (this.actualizar==true){
    this.clienteService.actualizarCliente(this.profileForm.value.id, this.profileForm.value)
    .subscribe(data=>{ this.actualizar=false; this.cliente=data;
      this.profileForm.reset()
      
    })
  }else {
  console.log ('este es el else')
  this.clienteService.addCliente(this.profileForm.value)
  .subscribe((data:any)=>this.cliente=data)
}
}else return
}


nuevoCliente(data:any){
  this.actualizar=true;
console.log(data)
this.profileForm.patchValue({
  id:data.id,
  nombre:data.nombre,
  saldo:data.saldo
})
}
}
