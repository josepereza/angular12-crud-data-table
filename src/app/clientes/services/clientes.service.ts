import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private http:HttpClient) { }

  listAll(){
   return this.http.get('http://localhost:3000/posts')
  }
  addCliente(cliente:any){
    return  this.http.post('http://localhost:3000/posts',cliente)
  }
  actualizarCliente(id:number,cliente:any){
    return  this.http.put(`http://localhost:3000/posts/${id}`,cliente)
  }
  borrarCliente(id:any){
    console.log('mi id', id)
    return this.http.delete(`http://localhost:3000/posts/${id}`)
  }
}
