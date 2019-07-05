import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuarios } from '../Modelo/Usuarios';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor( private http:HttpClient) { 

  }

  /* invocar el proyecto backend
   * por las siguientes URI's se inbocan a los controladores del proyecto 
  */
  //uriAllItems='http://localhost:8080/SpringBoot-JNDIConfig-Example/getAllItems';
  //uriAllItems='http://localhost:8080/SpringBoot-JNDIConfig-Example/getUsuarios';
  //uriAllItems='http://www.appjade.com:8080/SpringBoot-JNDIConfig-Example/getUsuarios';
  //uriAllItems='http://www.appjade.com/SpringBoot-JNDIConfig-Example/getUsuarios';
  uriAllItems='http://www.appjade.com/crud/getUsers';
  getUsuarios(){
    return this.http.get<Usuarios[]>(this.uriAllItems);
  }
}

